import React, {
  useState, useMemo, useEffect, useCallback,
} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NextPageContext, NextPage } from 'next';

import styled from 'styled-components';

import Layout from '../components/Layout';
import ViewerBottom from '../components/viewer/ViewerBottom';
import ViewerPages from '../components/viewer/ViewerPages';
import ViewerHeader from '../components/viewer/ViewerHeader';

import * as viewerActions from '../reducers/viewer';

import { getBookInfo } from '../lib/util';

import { VIEWER_WIDTH_RATIO, VIEWER_HEIGHT_RATIO } from '../constants/viewer';

import { ReducerState } from '../interfaces';
import { EpubBook, BookInfo, BooksState } from '../interfaces/books';

const Container = styled.div`
  padding: ${(props) => props.styleProps.menuHeight}px ${(100 - VIEWER_WIDTH_RATIO) / 2}%;
  height: ${(props) => props.styleProps.height}px;
  background-color: ${(props) => props.styleProps.backgroundColor};
  text-align: center;
  // overflow: hidden;
`;

interface Props {
  book: EpubBook;
  viewers: string[];
  styleText: string;
}

const Viewer: NextPage<Props> = ({ book, viewers = [], styleText = '' }) => {
  const dispatch = useDispatch();

  const [viewerWidth, setViewerWidth] = useState(0);
  const [viewerHeight, setViewerHeight] = useState(0);
  const [wholeHeight, setWholeHeight] = useState(0);
  const [menuHeight, setMenuHeight] = useState(0);
  const [nowSpineIndex, setNowSpineIndex] = useState(0);
  const [wholePageCount, setWholePageCount] = useState(0);

  const {
    viewerCountList, viewerPageCount,
  } = useSelector((state: ReducerState) => state.viewer);
  const {
    fontSize, widthRatio, lineHeight, backgroundColor,
  } = useSelector((state: ReducerState) => state.viewerSetting);

  const isAnalyzedBook = useMemo(() => viewerCountList.length >= viewers.length,
    [viewerCountList, viewers]);
  const isFirstPage = useMemo(() => viewerPageCount === 0, [viewerPageCount]);
  const isLastPage = useMemo(() => viewerPageCount === wholePageCount,
    [viewerPageCount, wholePageCount]);
  const selectedSpineIndex = useMemo(() => {
    let spineIndex = 0;
    let accurateCount = 0;
    viewerCountList.some((viewerCount) => {
      if (accurateCount + viewerCount.count > viewerPageCount) {
        spineIndex = viewerCount.index;
        return true;
      }
      accurateCount += viewerCount.count;
      return false;
    });
    return spineIndex;
  }, [viewerPageCount, viewerCountList]);
  const pageColumnOffset = useMemo(() => {
    let columnOffset = viewerPageCount;
    viewerCountList.some((viewerCount, index) => {
      if (index < nowSpineIndex) {
        columnOffset -= (viewerCount.count);
        return false;
      }
      return true;
    });
    return columnOffset;
  }, [viewerCountList, viewerPageCount, nowSpineIndex]);

  useEffect(() => {
    setViewerWidth(Math.floor(window.innerWidth * (VIEWER_WIDTH_RATIO / 100)));
    setViewerHeight(Math.floor(window.innerHeight * (VIEWER_HEIGHT_RATIO / 100)));
    setWholeHeight(Math.floor(window.innerHeight));
    return () => {
      dispatch(viewerActions.initViewerState());
    };
  }, [dispatch]);

  useEffect(() => {
    setMenuHeight((wholeHeight - viewerHeight) / 2);
  }, [wholeHeight, viewerHeight]);

  useEffect(() => {
    console.log('Now spine index', selectedSpineIndex);
    setNowSpineIndex(selectedSpineIndex);
  }, [selectedSpineIndex]);

  useEffect(() => {
    if (isAnalyzedBook) {
      console.log('Set whole page count');
      const pageCount = viewerCountList.reduce((acc, cur) => acc + cur.count, 0);
      setWholePageCount(pageCount - 1);
    }
  }, [isAnalyzedBook, viewerCountList]);

  useEffect(() => {
    console.log('New style');
    dispatch(viewerActions.initViewerState());
  }, [dispatch, fontSize, lineHeight, widthRatio]);

  const calculateViewerWidth = useCallback(
    (nowWidth, newRatio) => Math.floor(Number(nowWidth) * (Number(newRatio) / 100)),
    [],
  );

  if (!book) {
    return (
      <div>
        지원하지 않은 책입니다.
      </div>
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
      <Container
        styleProps={{
          height: viewerHeight,
          menuHeight,
          backgroundColor,
        }}
      >
        <ViewerPages
          viewerWidth={calculateViewerWidth(viewerWidth, widthRatio)}
          viewerHeight={viewerHeight}
          spines={book.spines}
          spineIndex={nowSpineIndex}
          pageOffset={pageColumnOffset}
          viewers={viewers}
          isFirstPage={isFirstPage}
          isLastPage={isLastPage}
        />
      </Container>
      <ViewerBottom
        menuHeight={menuHeight}
        sliderMaxValue={wholePageCount}
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
  const { books }: ReducerState = store.getState();
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
