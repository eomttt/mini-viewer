import React, {
  useState, useMemo, useEffect,
} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NextPageContext, NextPage } from 'next';

import styled from 'styled-components';

import Layout from '../components/Layout';
import ViewerBottom from '../components/viewer/ViewerBottom';
import ViewerCount from '../components/viewer/ViewerCount';
import ViewerHeader from '../components/viewer/ViewerHeader';
import ViewerPage from '../components/viewer/ViewerPage';

import * as viewerActions from '../reducers/viewer';

import { VIEWER_WIDTH_RATIO, VIEWER_HEIGHT_RATIO } from '../constants/viewer';

import { ReducerState } from '../interfaces';
import { EpubBook } from '../interfaces/books';

const Container = styled.div`
  padding: ${(100 - VIEWER_HEIGHT_RATIO) / 2}% ${(100 - VIEWER_WIDTH_RATIO) / 2}%;
  height: ${(props) => props.styleProps.height}px;
  background-color: ${(props) => props.styleProps.backgroundColor};
  text-align: center;
  overflow: hidden;
`;

interface Props {
  book: EpubBook;
  viewerSpines: string[];
  styleLinks: string[];
}

const Viewer: NextPage<Props> = ({ book, viewerSpines, styleLinks }) => {
  const {
    spines, titles, ncx, contributors,
  } = book;

  console.log('Book', book);

  const dispatch = useDispatch();

  const [viewerWidth, setViewerWidth] = useState(0);
  const [viewerHeight, setViewerHeight] = useState(0);
  const [nowSpineIndex, setNowSpineIndex] = useState(0);
  const [wholePageCount, setWholePageCount] = useState(0);

  const { viewerCountList, viewerPageCount } = useSelector((state: ReducerState) => state.viewer);
  const {
    fontSize, widthRatio, lineHeight, backgroundColor,
  } = useSelector((state: ReducerState) => state.viewerSetting);

  const isAnalyzedSpine = useMemo(() => viewerCountList.length >= viewerSpines.length, [viewerCountList, viewerSpines]);
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
  }, []);

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

  return (
    <Layout
      styleLinks={styleLinks}
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
          viewerWidth={Math.floor(Number(viewerWidth) * (Number(widthRatio) / 100))}
          viewerHeight={viewerHeight}
          pageColumnOffset={pageColumnOffset}
          viewerSpine={viewerSpines[nowSpineIndex]}
          isFirstPage={isFirstPage}
          isLastPage={isLastPage}
          viewerStyle={{
            widthRatio,
            fontSize,
            lineHeight,
          }}
        />
        )}
        {!isAnalyzedSpine
        && viewerSpines.map((viewerSpine, index) => (
          <ViewerCount
            key={viewerSpine}
            viewerWidth={Math.floor(Number(viewerWidth) * (Number(widthRatio) / 100))}
            viewerHeight={viewerHeight}
            spine={spines[index]}
            viewerSpine={viewerSpine}
            viewerSpineIndex={index}
            viewerStyle={{
              widthRatio,
              fontSize,
              lineHeight,
            }}
          />
        ))}
      </Container>
      <ViewerBottom
        sliderMaxValue={wholePageCount}
      />
    </Layout>
  );
};

// eslint-disable-next-line @typescript-eslint/unbound-method
Viewer.getInitialProps = async (context: NextPageContext<any>): Promise<any> => {
  const { req } = context;
  if (req) {
    const { EpubParser } = require('@ridi/epub-parser');
    try {
      const parser = new EpubParser('public/jikji.epub');
      const book: EpubBook = await parser.parse({
        validatePackage: true,
        parseStyle: false,
        unzipPath: 'public/epub/jikji',
      });
      const viewerSpines = await parser.readItems(book.spines, {
        force: true,
        extractBody: true,
        serializedAnchor: true,
        ignoreScript: true,
        basePath: 'epub/jikji',
      });

      return {
        book,
        viewerSpines,
        styleLinks: book.styles.map((style) => `epub/jikji/${style.href}`),
      };
    } catch (error) {
      console.log('Error', error);
    }
  }


  return {};
};

export default Viewer;
