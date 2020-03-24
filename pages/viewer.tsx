import React, {
  useState, useMemo, useEffect, useCallback,
} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NextPageContext, NextPage } from 'next';


import styled from 'styled-components';

import ViewerBottom from '../components/viewer/ViewerBottom';
import ViewerCalculator from '../components/viewer/ViewerCalculator';
import ViewerHeader from '../components/viewer/ViewerHeader';
import ViewerPage from '../components/viewer/ViewerPage';

import * as viewerActions from '../reducers/viewer';

import { getBookInfo, getStyleText } from '../lib/util';

import { VIEWER_WIDTH_RATIO, VIEWER_HEIGHT_RATIO } from '../constants/viewer';

import { ReducerState } from '../interfaces';
import { EpubBook } from '../interfaces/books';
import Layout from '../components/Layout';

const Container = styled.div`
  padding: ${(100 - VIEWER_HEIGHT_RATIO) / 2}% ${(100 - VIEWER_WIDTH_RATIO) / 2}%;
  height: ${(props) => props.styleProps.height}px;
  background-color: ${(props) => props.styleProps.backgroundColor};
  text-align: center;
  overflow: hidden;
`;

interface Props {
  book: EpubBook;
  viewers: string[];
  styleText: string;
}

const Viewer: NextPage<Props> = ({ book, viewers, styleText }) => {
  const {
    spines, titles, ncx, contributors,
  } = book;
  const dispatch = useDispatch();

  const [viewerWidth, setViewerWidth] = useState(0);
  const [viewerHeight, setViewerHeight] = useState(0);
  const [nowSpineIndex, setNowSpineIndex] = useState(0);
  const [wholePageCount, setWholePageCount] = useState(0);

  const {
    viewerCountList, viewerPageCount,
  } = useSelector((state: ReducerState) => state.viewer);
  const {
    fontSize, widthRatio, lineHeight, backgroundColor,
  } = useSelector((state: ReducerState) => state.viewerSetting);

  const isAnalyzedSpine = useMemo(() => viewerCountList.length >= viewers.length, [viewerCountList, viewers]);
  const isFirstPage = useMemo(() => viewerPageCount === 0, [viewerPageCount]);
  const isLastPage = useMemo(() => viewerPageCount === wholePageCount, [viewerPageCount, wholePageCount]);
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
    return () => {
      dispatch(viewerActions.initViewerState());
    };
  }, [dispatch]);

  useEffect(() => {
    console.log('Now spine index', selectedSpineIndex);
    setNowSpineIndex(selectedSpineIndex);
  }, [selectedSpineIndex]);

  useEffect(() => {
    if (isAnalyzedSpine) {
      console.log('Set whole page count');
      const pageCount = viewerCountList.reduce((acc, cur) => acc + cur.count, 0);
      setWholePageCount(pageCount - 1);
    }
  }, [isAnalyzedSpine, viewerCountList]);

  useEffect(() => {
    console.log('New style');
    dispatch(viewerActions.initViewerState());
  }, [dispatch, fontSize, lineHeight, widthRatio]);

  const calculateViewerWidth = useCallback(
    (nowWidth, newRatio) => Math.floor(Number(nowWidth) * (Number(newRatio) / 100)),
    [],
  );

  return (
    <Layout
      styleText={styleText}
    >
      <ViewerHeader
        titles={titles}
        authors={contributors}
        ncxItem={ncx}
      />
      <Container
        styleProps={{
          height: viewerHeight,
          backgroundColor,
        }}
      >
        {isAnalyzedSpine
        && (
        <ViewerPage
          viewerWidth={calculateViewerWidth(viewerWidth, widthRatio)}
          viewerHeight={viewerHeight}
          pageColumnOffset={pageColumnOffset}
          viewerSpine={viewers[nowSpineIndex]}
          isFirstPage={isFirstPage}
          isLastPage={isLastPage}
        />
        )}
        {!isAnalyzedSpine
        && (
        <ViewerCalculator
          viewerWidth={calculateViewerWidth(viewerWidth, widthRatio)}
          viewerHeight={viewerHeight}
          spines={spines}
          viewers={viewers}
        />
        )}
      </Container>
      <ViewerBottom
        sliderMaxValue={wholePageCount}
      />
    </Layout>
  );
};

// eslint-disable-next-line @typescript-eslint/unbound-method
Viewer.getInitialProps = async (context: NextPageContext<any>): Promise<any> => {
  const { req, store, query } = context;
  const { bookPath } = query;
  const queryPath = decodeURI(String(bookPath || 'epub/jikji'));

  if (req) {
    // Server side render
    const { EpubParser } = require('@ridi/epub-parser');
    const [, fileName] = queryPath.split('/');
    const publicPath = `http://${req.headers.host}/${queryPath}`;
    try {
      const { book, viewers } = await getBookInfo(EpubParser, {
        epubFile: fileName,
        epubPath: queryPath,
      });
      const styleText = await getStyleText(publicPath, book.styles);
      return {
        book,
        viewers,
        styleText,
      };
    } catch (error) {
      console.log('Error', error);
    }
  } else {
    // Client side render
    const { books }: ReducerState = store.getState();
    const { list } = books;

    let selectedBookInfo = list[0];

    list.some((bookInfo) => {
      if (bookInfo.publicPath === queryPath) {
        selectedBookInfo = bookInfo;
        return true;
      }
      return false;
    });

    const { book, viewers, publicPath } = selectedBookInfo;
    const styleText = await getStyleText(publicPath, book.styles);

    return {
      book,
      viewers,
      styleText,
    };
  }
};

export default Viewer;
