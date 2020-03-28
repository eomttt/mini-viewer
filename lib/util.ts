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
      ignoreScript: true,
      basePath: publicPath,
    });

    return viewers;
  } catch (error) {
    console.log('Get viewers error', error);
  }

  return [];
};

export const getBookInfo = async ({
  EpubParser,
  FileSystem,
  dirPath,
  fileName,
}): Promise<BookInfo> => {
  const parser = new EpubParser(`${dirPath}/${fileName}.epub`);
  const styleText = [];
  try {
    const book: EpubBook = await getBook(parser, {
      unzipPath: `${dirPath}/${fileName}`,
    });

    if (book) {
      const viewers = await getViewers(parser, {
        bookSpines: book.spines,
        publicPath: `${fileName}`,
      });

      const { styles } = book;
      // eslint-disable-next-line no-restricted-syntax
      for (const style of styles) {
        const text = FileSystem.readFileSync(`${dirPath}/${fileName}/${style.href}`, 'utf8');
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

export const isProduction = () => process.env.NODE_ENV === 'production';

export const isEpubFile = (fileName) => fileName.includes('.epub');

export const getPageCountBySpineId = (viewerCountList, spineId) => {
  let pageCountIndex = -1;
  let pageCount = -1;
  viewerCountList.some((viewerCount, index) => {
    if (viewerCount.spineId === spineId) {
      pageCountIndex = index;
      return true;
    }
    return false;
  });

  if (pageCountIndex > -1) {
    pageCount = 0;
    viewerCountList.some((viewerCount, index) => {
      if (index < pageCountIndex) {
        pageCount += viewerCount.count;
        return false;
      }
      return true;
    });
  }
  return pageCount;
};
