const fs = require('fs');
const { EpubParser } = require('@ridi/epub-parser');

const {
  DEFAULT_COVER_IMAGE,
  EPUB_UNZIP_PATH,
  EPUB_IMAGE_STATIC_PATH,
} = require('./server.constant.js');

const parsingBook = async (parser, {
  unzipPath,
}) => {
  try {
    const book = await parser.parse({
      validatePackage: true,
      parseStyle: false,
      unzipPath,
    });

    return book;
  } catch (error) {
    throw new Error(error);
  }
};

const parsingViewers = async (parser, {
  bookSpines,
  publicPath,
}) => {
  try {
    const viewers = await parser.readItems(bookSpines, {
      force: true,
      extractBody: true,
      ignoreScript: true,
      basePath: publicPath,
    });

    return viewers;
  } catch (error) {
    throw new Error(error);
  }
};

const getStyleTexts = (epubFileName, styles) => {
  const styleTexts = [];
  // eslint-disable-next-line no-restricted-syntax
  for (const style of styles) {
    const { href } = style;
    const unzipEpubStylePath = `${EPUB_UNZIP_PATH}/${epubFileName}/${href}`;
    const text = fs.readFileSync(unzipEpubStylePath, 'utf8');
    styleTexts.push(text);
  }

  return styleTexts;
};

const getString = (item) => item.reduce((acc, cur, index) => `${acc}${index > 0 ? ', ' : ''}${cur}`, '');

const getBookInfo = async (epubFileName) => {
  const [fileName] = epubFileName.split('-');
  const parser = new EpubParser(`public/${epubFileName}.epub`);

  try {
    const book = await parsingBook(parser, {
      unzipPath: `${EPUB_UNZIP_PATH}/${fileName}`,
    });

    if (book) {
      const {
        ncx, spines, styles, creators, cover, titles,
      } = book;
      const viewers = await parsingViewers(parser, {
        bookSpines: spines,
        publicPath: `${EPUB_IMAGE_STATIC_PATH}/${fileName}`,
      });

      const styleTexts = getStyleTexts(fileName, styles);
      return {
        fileName,
        ncx,
        spines,
        creators: getString(creators.map((authorItem) => authorItem.name)),
        viewers,
        titles: getString(titles),
        styleText: styleTexts.join(''),
        coverImage: cover ? `${EPUB_IMAGE_STATIC_PATH}/${fileName}/${cover.href}` : DEFAULT_COVER_IMAGE,
      };
    }
  } catch (error) {
    console.log('Get book info error', error);
    throw new Error(error);
  }
};

const writeBookStaticInfo = (fileName, {
  titles,
  styleText,
  coverImage,
}) => (
  fs.writeFileSync(
    `public/epub/${fileName}/staticInfo.json`,
    JSON.stringify({
      titles,
      styleText,
      coverImage,
    }),
    'utf8',
  )
);

const writeBookViewerInfo = (fileName, {
  ncx,
  spines,
  creators,
  viewers,
}) => (
  fs.writeFileSync(
    `public/epub/${fileName}/viewerInfo.json`,
    JSON.stringify({
      ncx,
      spines,
      creators,
      viewers,
    }),
    'utf8',
  )
);

const clearEpubFile = (fileName) => {
  fs.unlinkSync(`public/${fileName}.epub`);
  fs.rmdirSync(`public/epub/${fileName}`, { recursive: true });
};

module.exports.getBookInfo = getBookInfo;

module.exports.writeBookStaticInfo = writeBookStaticInfo;
module.exports.writeBookViewerInfo = writeBookViewerInfo;

module.exports.clearEpubFile = clearEpubFile;
