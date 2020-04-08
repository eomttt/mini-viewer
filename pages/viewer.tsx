import React, {
  useState, useEffect, useCallback,
} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NextPageContext, NextPage } from 'next';

import debounce from 'lodash.debounce';

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

import { VIEWER_HEIGHT_RATIO, VIEWER_WIDTH_RATIO } from '../constants/viewer';

import { ReducerStates } from '../interfaces';
import { ViewerState } from '../interfaces/viewer';

import { useIsSetViewerCountList } from '../hooks';

interface ViewerPageProps {
  bookName: string;
}

const Viewer: NextPage<ViewerPageProps> = ({ bookName }) => {
  const dispatch = useDispatch();
  const {
    viewerCountList,
  }: ViewerState = useSelector((state: ReducerStates) => state.viewer);
  const book = useSelector((state: ReducerStates) => state.book);

  const isSetViewerCountList = useIsSetViewerCountList(viewerCountList, book ? book.spines : []);

  const [isResizing, setIsResizing] = useState(false);
  const [isGettingBook, setIsGettingBook] = useState(true);
  const [menuHeight, setMenuHeight] = useState(0);

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
  }, []);

  const initViewer = useCallback(() => {
    dispatch(viewerActions.initViewerState());
    dispatch(bookActions.clearShowingBook());
  }, []);

  const resizeViewer = useCallback(() => {
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

  const debounceResizeViewer = useCallback(debounce(resizeViewer, 100), [resizeViewer]);

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
    if (isSetViewerCountList) {
      const pageCount = viewerCountList.reduce((acc, cur) => acc + cur.count, 0);
      dispatch(viewerActions.setViewerPageWholeCount(pageCount > 0 ? pageCount - 1 : 0));
      setIsResizing(false);
    }
  }, [isSetViewerCountList]);

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
      {(!isSetViewerCountList || isResizing) && <Loading text="로딩 중..." />}
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
