const fs = require('fs');
const { EpubParser } = require('@ridi/epub-parser');

const {
  getEpubFileKeys,
  getEpubFile,
  deleteEpubFile,
  uploadEpubImageFiles,
} = require('./server.s3.js');
const {
  DEFAULT_COVER_IMAGE,
  EPUB_UNZIP_PATH,
  EPUB_IMAGE_STATIC_PATH,
} = require('./server.constant.js');

const clearEpubFile = (fileName) => {
  fs.unlinkSync(`public/${fileName}.epub`);
  fs.rmdirSync(`public/epub/${fileName}`, { recursive: true });
};

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

const uploadImages = async (fileName, epubFileName, images) => {
  // eslint-disable-next-line no-restricted-syntax
  for (const image of images) {
    const { href, mediaType } = image;
    const uploadImagePath = `${fileName}/${href}`;
    const unzipImagePath = `${EPUB_UNZIP_PATH}/${epubFileName}/${href}`;

    await uploadEpubImageFiles(uploadImagePath, unzipImagePath, mediaType);
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

const getBookInfo = async (epubFileName) => {
  const [fileName] = epubFileName.split('-');
  const parser = new EpubParser(`public/${epubFileName}.epub`);

  try {
    const book = await parsingBook(parser, {
      unzipPath: `${EPUB_UNZIP_PATH}/${epubFileName}`,
    });

    if (book) {
      const { styles, images, spines } = book;

      await uploadImages(fileName, epubFileName, images);
      const viewers = await parsingViewers(parser, {
        bookSpines: spines,
        publicPath: `${EPUB_IMAGE_STATIC_PATH}/${fileName}`,
      });
      const styleTexts = getStyleTexts(epubFileName, styles);
      clearEpubFile(epubFileName);
      return {
        fileName,
        book,
        viewers,
        styleText: styleTexts.join(''),
      };
    }
  } catch (error) {
    console.log('Get book info error', error);
    throw new Error(error);
  }
};

const getTitle = (creators) => creators.reduce((acc, cur, index) => `${acc}${index > 0 ? ', ' : ''}${cur.name}`, '');

const getBookListItem = async (fileName) => {
  try {
    const epubFileName = await getEpubFile(fileName || 'jikji');
    if (epubFileName) {
      const { book } = await getBookInfo(epubFileName);
      const { creators, cover } = book;

      return {
        fileName,
        title: getTitle(creators),
        coverImage: cover ? `${EPUB_IMAGE_STATIC_PATH}/${fileName}/${cover.href}` : DEFAULT_COVER_IMAGE,
      };
    }
    return null;
  } catch (error) {
    throw new Error(error);
  }
};

const getBookListItems = async () => {
  const bookListItems = [];
  try {
    const fileKeys = await getEpubFileKeys();
    // eslint-disable-next-line no-restricted-syntax
    for (const fileKey of fileKeys) {
      const [fileName] = fileKey.split('.');
      const listItem = await getBookListItem(fileName);

      if (listItem) {
        bookListItems.push(listItem);
      }
    }
    return bookListItems;
  } catch (error) {
    throw new Error(error);
  }
};

const deleteListItem = async (fileName) => {
  try {
    const res = await deleteEpubFile(fileName);
    return res;
  } catch (error) {
    throw new Error(error);
  }
};

const getBook = async (fileName) => {
  try {
    const epubFileName = await getEpubFile(fileName || 'jikji');
    if (epubFileName) {
      const bookInfo = await getBookInfo(epubFileName);
      const {
        book, styleText, viewers,
      } = bookInfo;
      return {
        ...book,
        styleText,
        spineViewers: viewers,
        fileName,
      };
    }

    return null;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports.getBookListItem = getBookListItem;
module.exports.getBookListItems = getBookListItems;
module.exports.deleteListItem = deleteListItem;
module.exports.getBook = getBook;
