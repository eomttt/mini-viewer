const fs = require('fs');
const { EpubParser } = require('@ridi/epub-parser');

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
    console.log('Get book error', error);
  }

  return null;
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
    console.log('Get viewers error', error);
  }

  return [];
};

const getBookInfo = async ({
  dirPath,
  fileName,
}) => {
  const parser = new EpubParser(`${dirPath}/${fileName}.epub`);
  const styleText = [];
  try {
    const book = await parsingBook(parser, {
      unzipPath: `${dirPath}/${fileName}`,
    });

    if (book) {
      const viewers = await parsingViewers(parser, {
        bookSpines: book.spines,
        publicPath: `${fileName}`,
      });

      const { styles } = book;
      // eslint-disable-next-line no-restricted-syntax
      for (const style of styles) {
        const text = fs.readFileSync(`${dirPath}/${fileName}/${style.href}`, 'utf8');
        styleText.push(text);
      }

      return {
        book,
        viewers,
        fileName,
        styleText: styleText.join(''),
      };
    }
  } catch (error) {
    console.log('Get book info error', error);
  }

  return {
    fileName,
    book: null,
    viewers: [],
    styleText: '',
  };
};

const isEpubFile = (fileName) => fileName.includes('.epub');

const getBooks = async () => {
  const files = fs.readdirSync('public');
  const booksInfo = [];
  // eslint-disable-next-line no-restricted-syntax
  for (const file of files) {
    if (isEpubFile(file)) {
      const [fileName] = file.split('.epub');
      try {
        const bookInfo = await getBookInfo({
          dirPath: 'public',
          fileName,
        });

        booksInfo.push({ ...bookInfo });
      } catch (error) {
        throw new Error(error);
      }
    }
  }
  return booksInfo;
};

const getBook = async (fileName) => {
  const bookInfo = await getBookInfo({
    dirPath: 'public',
    fileName,
  });

  const {
    book, styleText, viewers, fileName: bookInfoFileName,
  } = bookInfo;

  return {
    ...book,
    styleText,
    spineViewers: viewers,
    fileName: bookInfoFileName,
  };
};

module.exports.getBooks = getBooks;
module.exports.getBook = getBook;
