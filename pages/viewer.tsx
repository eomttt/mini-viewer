import React, {
  useState, useEffect, useCallback,
} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NextPageContext, NextPage } from 'next';

import debounce from 'lodash.debounce';

import { fetchGetBook } from '../lib/fetch';

import Layout from '../components/Layout';
import ViewerPagesController from '../components/viewer/ViewerPagesController';
import ViewerBottom from '../components/viewer/ViewerBottom';
import ViewerHeader from '../components/viewer/ViewerHeader';
import ViewerNotSupport from '../components/viewer/ViewerNotSupport';

import * as bookActions from '../reducers/book';
import * as viewerActions from '../reducers/viewer';
import * as settingActions from '../reducers/viewerSetting';

import { VIEWER_HEIGHT_RATIO, VIEWER_WIDTH_RATIO } from '../constants/viewer';

import { ReducerStates } from '../interfaces';
import { BooksState, EpubBookViewer } from '../interfaces/books';
import { ViewerSettingState } from '../interfaces/viewer';


const Viewer: NextPage = () => {
  const dispatch = useDispatch();
  const {
    settingChangeToggle,
  }: ViewerSettingState = useSelector((state: ReducerStates) => state.viewerSetting);

  const book = useSelector((state: ReducerStates) => state.book);
  const [menuHeight, setMenuHeight] = useState(0);

  const resizeViewer = useCallback(() => {
    dispatch(viewerActions.resizeViewerState());
  }, [dispatch]);

  const setViewerSize = useCallback(() => {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    dispatch(settingActions.setViewerWidth(
      Math.floor(windowWidth * (VIEWER_WIDTH_RATIO / 100)),
    ));
    dispatch(settingActions.setViewerHeight(
      Math.floor(windowHeight * (VIEWER_HEIGHT_RATIO / 100)),
    ));
    setMenuHeight((windowHeight - Math.floor(windowHeight * (VIEWER_HEIGHT_RATIO / 100))) / 2);
  }, [dispatch]);

  const resizeWindow = useCallback(() => {
    setViewerSize();
    resizeViewer();
  }, [setViewerSize, resizeViewer]);

  const debounceResizeWindow = useCallback(debounce(resizeWindow, 500), [resizeWindow]);

  useEffect(() => {
    window.addEventListener('resize', debounceResizeWindow);
    return () => {
      window.removeEventListener('resize', debounceResizeWindow);
    };
  }, [debounceResizeWindow]);

  useEffect(() => {
    resizeViewer();
  }, [settingChangeToggle, resizeViewer]);

  useEffect(() => {
    setViewerSize();
    return () => {
      dispatch(viewerActions.initViewerState());
      dispatch(bookActions.clearShowingBook());
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

const getBookInfoInStore = (books: BooksState, fileName: string): EpubBookViewer => {
  const { list } = books;

  if (!list) {
    return null;
  }

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
    const { getBook } = require('../server.util');
    book = await getBook(queryName);
  } else {
    book = getBookInfoInStore(books, queryName);
    if (!book) {
      book = await fetchGetBook(queryName);
    }
  }
  store.dispatch(bookActions.setShowingBook(book));
};

export default Viewer;
