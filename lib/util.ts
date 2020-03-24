import { EpubBook, BookInfo } from '../interfaces/books';

export const getBook = async (parser, {
  unzipPath,
}): Promise<EpubBook | null> => {
  try {
    const book: EpubBook = await parser.parse({
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

export const getViewers = async (parser, {
  bookSpines,
  publicPath,
}): Promise<string[]> => {
  try {
    const viewers = await parser.readItems(bookSpines, {
      force: true,
      extractBody: true,
      serializedAnchor: true,
      ignoreScript: true,
      basePath: publicPath,
    });

    return viewers;
  } catch (error) {
    console.log('Get viewers error', error);
  }

  return [];
};

export const getBookInfo = async (EpubParser, fileSystem, fileName): Promise<BookInfo> => {
  const parser = new EpubParser(`public/${fileName}.epub`);
  const styleText = [];
  try {
    const book: EpubBook = await getBook(parser, {
      unzipPath: `public/epub/${fileName}`,
    });

    if (book) {
      const viewers = await getViewers(parser, {
        bookSpines: book.spines,
        publicPath: `epub/${fileName}`,
      });

      const { styles } = book;
      // eslint-disable-next-line no-restricted-syntax
      for (const style of styles) {
        const text = fileSystem.readFileSync(`public/epub/${fileName}/${style.href}`, 'utf8');
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

export const isProduction = () => {
  return process.env.NODE_ENV === 'production';
};

export const isEpubFile = (fileName) => {
  return fileName.includes('.epub');
};
