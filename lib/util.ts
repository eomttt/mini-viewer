import axios from 'axios';
import { EpubBook } from '../interfaces/books';

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

export const getBookInfo = async (EpubParser, {
  epubFile,
  epubPath,
}): Promise<{
  book: EpubBook | null;
  viewers: string[];
}> => {
  const parser = new EpubParser(`public/${epubFile}.epub`);
  try {
    const book: EpubBook = await getBook(parser, {
      unzipPath: `public/${epubPath}`,
    });

    if (book) {
      const viewers = await getViewers(parser, {
        bookSpines: book.spines,
        publicPath: epubPath,
      });

      return {
        book,
        viewers,
      };
    }
  } catch (error) {
    console.log('Get book info error', error);
  }

  return {
    book: null,
    viewers: [],
  };
};

export const isEpubFile = (fileName) => {
  return fileName.includes('.epub');
};

export const getStyleText = async (publicPath, styles) => {
  const res = [];
  // eslint-disable-next-line no-restricted-syntax
  for (const style of styles) {
    try {
      const data = await axios.get(`${publicPath}/${style.href}`);
      res.push(data.data);
    } catch (error) {
      console.log('Get style text error', error);
    }
  }

  return res.join('');
};
