import React, {
  useState, useEffect,
} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NextPageContext, NextPage } from 'next';

import Layout from '../components/Layout';
import ViewerPagesController from '../components/viewer/ViewerPagesController';
import ViewerBottom from '../components/viewer/ViewerBottom';
import ViewerHeader from '../components/viewer/ViewerHeader';
import ViewerNotSupport from '../components/viewer/ViewerNotSupport';

import * as bookActions from '../reducers/book';
import * as viewerActions from '../reducers/viewer';

import { getBookInfo } from '../lib/util';

import { VIEWER_HEIGHT_RATIO, VIEWER_WIDTH_RATIO } from '../constants/viewer';

import { ReducerStates } from '../interfaces';
import { BookInfo, BooksState, EpubBookViewer } from '../interfaces/books';


const Viewer: NextPage = () => {
  const dispatch = useDispatch();
  const book = useSelector((state: ReducerStates) => state.book);
  const [menuHeight, setMenuHeight] = useState(0);

  useEffect(() => {
    const windowHeight = window.innerHeight;
    setMenuHeight((windowHeight - Math.floor(windowHeight * (VIEWER_HEIGHT_RATIO / 100))) / 2);
  }, []);

  useEffect(() => {
    dispatch(viewerActions.setViewerWidth(
      Math.floor(window.innerWidth * (VIEWER_WIDTH_RATIO / 100)),
    ));
    dispatch(viewerActions.setViewerHeight(
      Math.floor(window.innerHeight * (VIEWER_HEIGHT_RATIO / 100)),
    ));

    return () => {
      dispatch(viewerActions.initViewerState());
    };
  }, [dispatch]);

  if (!book) {
    return (
      <ViewerNotSupport />
    );
  }

  return (
    <Layout>
      <ViewerHeader
        menuHeight={menuHeight}
      />
      <ViewerPagesController
        menuHeight={menuHeight}
        book={book}
      />
      <ViewerBottom
        menuHeight={menuHeight}
      />
    </Layout>
  );
};

const parsingBook = async (fileName: string): Promise<EpubBookViewer> => {
  // Server side render
  const fs = require('fs');
  const { EpubParser } = require('@ridi/epub-parser');

  try {
    const bookInfo: BookInfo = await getBookInfo({
      EpubParser,
      FileSystem: fs,
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
  } catch (error) {
    console.log('Error', error);
  }

  return null;
};

const getBookInfoInStore = (books: BooksState, fileName: string): EpubBookViewer => {
  const { list } = books;

  let selectedBookInfo = list[0];
  list.some((bookInfo) => {
    if (bookInfo.fileName === fileName) {
      selectedBookInfo = bookInfo;
      return true;
    }
    return false;
  });

  const {
    book, styleText, viewers, fileName: bookInfoFileName,
  } = selectedBookInfo;

  return {
    ...book,
    styleText,
    spineViewers: viewers,
    fileName: bookInfoFileName,
  };
};

// eslint-disable-next-line @typescript-eslint/unbound-method
Viewer.getInitialProps = async (context: NextPageContext<any>): Promise<any> => {
  const { req, store, query } = context;
  const { books }: ReducerStates = store.getState();
  const { fileName } = query;
  const queryName = decodeURI(String(fileName || 'jikji'));

  let book = null;

  if (req) {
    book = await parsingBook(queryName);
  } else {
    book = getBookInfoInStore(books, queryName);
  }
  store.dispatch(bookActions.setShowingBook(book));
};

export default Viewer;
