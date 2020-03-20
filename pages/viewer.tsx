import React, {
  useState, useMemo, useEffect, useCallback,
} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NextPageContext, NextPage } from 'next';

import Layout from '../components/Layout';
import ViewerCount from '../components/viewer/ViewerCount';
import ViewerHeader from '../components/viewer/ViewerHeader';
import ViewerPage from '../components/viewer/ViewerPage';

import * as actions from '../reducers/viewer';

import { VIEWER_WIDTH_RATIO, VIEWER_HEIGHT_RATIO } from '../constants/viewer';

import { ReducerState } from '../interfaces';
import { EpubBook } from '../interfaces/books';

import { Container } from '../styles/viewer';

interface Props {
  book: EpubBook;
  viewerSpines: string[];
  styleLinks: string[];
}

const Viewer: NextPage<Props> = ({ book, viewerSpines, styleLinks }) => {
  const { spines, titles, ncx } = book;

  console.log('Book', book);

  const dispatch = useDispatch();

  const [viewerWidth, setViewerWidth] = useState(0);
  const [viewerHeight, setViewerHeight] = useState(0);
  const [nowSpineIndex, setNowSpineIndex] = useState(0);
  const [isClickedPrev, setIsClickedPrev] = useState(false);
  const [toggleNewViewer, setToggleNewViewr] = useState(false);

  const { viewerCountList, selectedSpineId } = useSelector((state: ReducerState) => state.viewer);

  const isAnalizedSpine = useMemo(() => viewerCountList.length === viewerSpines.length, [viewerCountList, viewerSpines]);
  const selectedSpineIndex = useMemo(() => {
    let spineIndex = -1;
    spines.some((spine, index) => {
      if (spine.id === selectedSpineId) {
        spineIndex = index;
        return true;
      }
      return false;
    });
    return spineIndex;
  }, [spines, selectedSpineId]);

  useEffect(() => {
    setViewerWidth(Math.floor(window.innerWidth * (VIEWER_WIDTH_RATIO / 100)));
    setViewerHeight(Math.floor(window.innerHeight * (VIEWER_HEIGHT_RATIO / 100)));
  }, []);

  useEffect(() => {
    if (selectedSpineIndex >= 0) {
      setIsClickedPrev(false);
      setNowSpineIndex(selectedSpineIndex);
      setToggleNewViewr(!toggleNewViewer);

      dispatch(actions.setSpineId(''));
    }
  }, [dispatch, toggleNewViewer, selectedSpineIndex]);

  const setNextSpine = useCallback(() => {
    if (nowSpineIndex + 1 >= viewerSpines.length) {
      alert('마지막 페이지 입니다.');
    } else {
      setIsClickedPrev(false);
      setNowSpineIndex(nowSpineIndex + 1);
      setToggleNewViewr(!toggleNewViewer);
    }
  }, [nowSpineIndex, toggleNewViewer, viewerSpines]);

  const setPrevSpine = useCallback(() => {
    if (nowSpineIndex - 1 < 0) {
      alert('첫번째 페이지 입니다');
    } else {
      setIsClickedPrev(true);
      setNowSpineIndex(nowSpineIndex - 1);
      setToggleNewViewr(!toggleNewViewer);
    }
  }, [nowSpineIndex, toggleNewViewer]);

  return (
    <Layout
      styleLinks={styleLinks}
    >
      <ViewerHeader
        titles={titles}
        ncxItem={ncx}
      />
      <Container
        styleProps={{
          height: viewerHeight,
        }}
      >
        {
        isAnalizedSpine
        && (
          <ViewerPage
            viewerWidth={viewerWidth}
            viewerHeight={viewerHeight}
            isShowPrevViewer={isClickedPrev}
            wholeColumnCount={viewerCountList[nowSpineIndex].count}
            viewerSpine={viewerSpines[nowSpineIndex]}
            toggleNewViewer={toggleNewViewer}
            setNextSpine={setNextSpine}
            setPrevSpine={setPrevSpine}
          />
        )
      }
        <section>
          {
          viewerSpines.map((viewerSpine, index) => (
            <ViewerCount
              key={viewerSpine}
              viewerWidth={viewerWidth}
              viewerHeight={viewerHeight}
              viewerSpine={viewerSpine}
              viewerSpineIndex={index}
            />
          ))
        }
        </section>
      </Container>
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
