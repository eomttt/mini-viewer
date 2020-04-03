const fs = require('fs');
const { EpubParser } = require('@ridi/epub-parser');

const {
  getEpubFileKeys,
  getEpubFile,
  deleteEpubFile,
} = require('./server.s3.js');
const { DEFAULT_COVER_IMAGE, EPUB_UNZIP_PATH } = require('./server.constant.js');

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

const getBookInfo = async (fileName) => {
  const parser = new EpubParser(`public/${fileName}.epub`);
  const styleText = [];
  try {
    const book = await parsingBook(parser, {
      unzipPath: `${EPUB_UNZIP_PATH}/${fileName}`,
    });

    if (book) {
      const viewers = await parsingViewers(parser, {
        bookSpines: book.spines,
        publicPath: `epub/${fileName}`,
      });

      const { styles } = book;
      // eslint-disable-next-line no-restricted-syntax
      for (const style of styles) {
        const text = fs.readFileSync(`${EPUB_UNZIP_PATH}/${fileName}/${style.href}`, 'utf8');
        styleText.push(text);
      }

      return {
        fileName,
        book,
        viewers,
        styleText: styleText.join(''),
      };
    }
  } catch (error) {
    throw new Error(error);
  }
};

const getTitle = (creators) => creators.reduce((acc, cur, index) => `${acc}${index > 0 ? ', ' : ''}${cur.name}`, '');

const getBookListItem = async (fileName) => {
  try {
    const epubFile = await getEpubFile(fileName || 'jikji');
    if (epubFile) {
      const { book } = await getBookInfo(fileName);
      const { creators, cover } = book;

      fs.unlinkSync(`public/${fileName}.epub`);
      return {
        fileName,
        title: getTitle(creators),
        coverImage: cover ? `epub/${fileName}/${cover.href}` : DEFAULT_COVER_IMAGE,
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
    const epubFile = await getEpubFile(fileName || 'jikji');
    if (epubFile) {
      const bookInfo = await getBookInfo(fileName);
      const {
        book, styleText, viewers,
      } = bookInfo;
      fs.unlinkSync(`public/${fileName}.epub`);
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
