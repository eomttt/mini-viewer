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
import { EpubBookViewer } from '../interfaces/books';
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
  }, []);

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
  }, [settingChangeToggle]);

  useEffect(() => {
    setViewerSize();
    return () => {
      // Page out
      dispatch(viewerActions.initViewerState());
      dispatch(bookActions.clearShowingBook());
    };
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

// eslint-disable-next-line @typescript-eslint/unbound-method
Viewer.getInitialProps = async (context: NextPageContext<any>): Promise<any> => {
  const { req, store, query } = context;
  const { fileName } = query;
  const queryName = decodeURI(String(fileName || 'jikji'));

  let book: EpubBookViewer = null;

  try {
    if (req) {
      const { getBook } = require('../server.util');
      book = await getBook(queryName);
    } else {
      book = await fetchGetBook(queryName);
    }
    store.dispatch(bookActions.setShowingBook(book));
  } catch (error) {
    console.error('Not support book');
  }
};

export default Viewer;
