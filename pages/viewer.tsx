import React, {
  useState, useEffect, useCallback,
} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NextPageContext, NextPage } from 'next';

import debounce from 'lodash.debounce';

import {
  getViewerWidth,
  getViewerHeight,
  getMenuHeight,
} from '../lib/calculate';
import { fetchGetBook } from '../lib/fetch';

import Layout from '../components/Layout';
import Loading from '../components/common/Loading';
import ViewerPagesController from '../components/viewer/ViewerPagesController';
import ViewerBottom from '../components/viewer/ViewerBottom';
import ViewerHeader from '../components/viewer/ViewerHeader';
import ViewerNotSupport from '../components/viewer/ViewerNotSupport';

import * as bookActions from '../reducers/book';
import * as viewerActions from '../reducers/viewer';
import * as settingActions from '../reducers/viewerSetting';

import { ReducerStates } from '../interfaces';
import { ViewerState } from '../interfaces/viewer';

import { useIsSetAllViewerCountList } from '../hooks';

interface ViewerPageProps {
  bookName: string;
}

const Viewer: NextPage<ViewerPageProps> = ({ bookName }) => {
  const dispatch = useDispatch();
  const {
    viewerCountList,
  }: ViewerState = useSelector((state: ReducerStates) => state.viewer);
  const book = useSelector((state: ReducerStates) => state.book);

  const isSetAllViewerCountList = useIsSetAllViewerCountList(viewerCountList, book ? book.spines : []);

  const [isResizing, setIsResizing] = useState(false);
  const [isGettingBook, setIsGettingBook] = useState(true);
  const [menuHeight, setMenuHeight] = useState(0);

  const setViewerSize = useCallback(() => {
    dispatch(settingActions.setViewerWidth(getViewerWidth()));
    dispatch(settingActions.setViewerHeight(getViewerHeight()));
    setMenuHeight(getMenuHeight());
  }, []);

  const initViewer = useCallback(() => {
    dispatch(viewerActions.initViewerState());
    dispatch(bookActions.clearShowingBook());
  }, []);

  const resizeViewer = useCallback(() => {
    dispatch(settingActions.setViewerWidth(0));
    dispatch(settingActions.setViewerHeight(0));
    dispatch(viewerActions.resizeViewerState());
    setViewerSize();
  }, []);

  const getBook = useCallback(async () => {
    const bookData = await fetchGetBook(bookName);
    if (bookData) {
      dispatch(bookActions.setShowingBook(bookData));
      setIsGettingBook(false);
    }
  }, []);

  const debounceResizeViewer = useCallback(debounce(resizeViewer, 500), [resizeViewer]);

  const addResizingEventListener = useCallback(() => {
    window.addEventListener('resize', () => {
      setIsResizing(true);
      debounceResizeViewer();
    });
  }, [debounceResizeViewer]);

  const removeResizingEventListener = useCallback(() => {
    window.removeEventListener('resize', () => {
      debounceResizeViewer();
    });
  }, [debounceResizeViewer]);

  useEffect(() => {
    if (isSetAllViewerCountList) {
      const pageCount = viewerCountList.reduce((acc, cur) => acc + cur.count, 0);
      dispatch(viewerActions.setViewerPageWholeCount(pageCount > 0 ? pageCount - 1 : 0));
      setIsResizing(false);
    }
  }, [isSetAllViewerCountList]);

  useEffect(() => {
    addResizingEventListener();
    return removeResizingEventListener;
  }, [addResizingEventListener, removeResizingEventListener]);

  useEffect(() => {
    getBook();
    setViewerSize();
    return initViewer;
  }, []);

  if (isGettingBook) {
    return (
      <Loading
        text="책을 가져오고 있습니다. 잠시만 기다려주세요..."
      />
    );
  }

  if (!book) {
    return (
      <ViewerNotSupport />
    );
  }

  return (
    <Layout>
      {(!isSetAllViewerCountList || isResizing) && <Loading text="로딩 중..." />}
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

Viewer.getInitialProps = (context: NextPageContext): ViewerPageProps => {
  const { query } = context;
  const { fileName } = query;
  const queryName = decodeURI(String(fileName || 'jikji'));

  return {
    bookName: queryName,
  };
};

export default Viewer;
