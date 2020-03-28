import React, {
  useState, useEffect,
} from 'react';
import { NextPageContext, NextPage } from 'next';

import Layout from '../components/Layout';
import ViewerPagesController from '../components/viewer/ViewerPagesController';
import ViewerBottom from '../components/viewer/ViewerBottom';
import ViewerHeader from '../components/viewer/ViewerHeader';
import ViewerNotSupport from '../components/viewer/ViewerNotSupport';

import { getBookInfo } from '../lib/util';

import { VIEWER_HEIGHT_RATIO } from '../constants/viewer';

import { ReducerStates } from '../interfaces';
import { BookInfo, BooksState } from '../interfaces/books';


const Viewer: NextPage<BookInfo> = (bookInfo) => {
  const [menuHeight, setMenuHeight] = useState(0);

  const { book, viewers, styleText } = bookInfo;

  useEffect(() => {
    const windowHeight = window.innerHeight;
    setMenuHeight((windowHeight - Math.floor(windowHeight * (VIEWER_HEIGHT_RATIO / 100))) / 2);
  }, []);

  if (!bookInfo.book) {
    return (
      <ViewerNotSupport />
    );
  }

  return (
    <Layout
      styleText={styleText}
    >
      <ViewerHeader
        menuHeight={menuHeight}
        titles={book.titles}
        authors={book.contributors}
        ncxItem={book.ncx}
      />
      <ViewerPagesController
        menuHeight={menuHeight}
        spines={book.spines}
        spineViewers={viewers}
      />
      <ViewerBottom
        menuHeight={menuHeight}
      />
    </Layout>
  );
};

const parsingBook = async (fileName: string): Promise<BookInfo> => {
  // Server side render
  const fs = require('fs');
  const { EpubParser } = require('@ridi/epub-parser');

  try {
    const bookInfo = await getBookInfo({
      EpubParser,
      FileSystem: fs,
      dirPath: 'public',
      fileName,
    });

    return {
      ...bookInfo,
    };
  } catch (error) {
    console.log('Error', error);
  }

  return null;
};

const getBookInfoInStore = (books: BooksState, fileName: string) => {
  const { list } = books;

  let selectedBookInfo = list[0];
  list.some((bookInfo) => {
    if (bookInfo.fileName === fileName) {
      selectedBookInfo = bookInfo;
      return true;
    }
    return false;
  });

  return {
    ...selectedBookInfo,
  };
};

// eslint-disable-next-line @typescript-eslint/unbound-method
Viewer.getInitialProps = async (context: NextPageContext<any>): Promise<any> => {
  const { req, store, query } = context;
  const { books }: ReducerStates = store.getState();
  const { fileName } = query;
  const queryName = decodeURI(String(fileName || 'jikji'));

  if (req) {
    const bookInfo = await parsingBook(queryName);
    return bookInfo;
  }

  // Client side render
  return getBookInfoInStore(books, queryName);
};

export default Viewer;
