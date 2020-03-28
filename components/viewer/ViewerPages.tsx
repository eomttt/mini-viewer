import React, {
  useEffect, useCallback, useReducer, useRef, useMemo,
} from 'react';
import styled from 'styled-components';

import {
  viewerPagesReducerStates,
  viewerPagesReducer,
  initCount, addCount,
} from './ViewerPagesReducer';
import ViewerPage from './ViewerPage';

import { EpubSpineItem } from '../../interfaces/books';
import { ViewerCount } from '../../interfaces/viewer';

import {
  VIEWER_PAGE_GAP, FONT_SIZE_RANGE, LINE_HEIGHT_RANGE,
} from '../../constants/viewer';

const Container = styled.div`
  width: ${(props) => props.styleProps.width}px;
  height:  ${(props) => props.styleProps.height}px;
  white-space: nowrap;
  text-align: initial;
  overflow: scroll;
`;

interface Props {
  viewerWidth: number;
  viewerHeight: number;
  isAnalyzedBook: boolean;
  spineViewers: string[];
  spines: EpubSpineItem[];
  pagesOffset: number;
  pageOffset: number;
  setViewerCountList: (countItems: ViewerCount[]) => void;
  clickLink: (spineHref: string, hashTag: string) => void;
  viewerFontSize?: number;
  viewerLineHeihgt?: number;
}

const ViewerPages: React.FunctionComponent<Props> = ({
  viewerWidth, viewerHeight,
  isAnalyzedBook,
  spineViewers, spines,
  pagesOffset, pageOffset,
  clickLink, setViewerCountList,
  viewerFontSize, viewerLineHeihgt,
}) => {
  const [privateStates, privateDispatch] = useReducer(viewerPagesReducer, viewerPagesReducerStates);
  const containerRef = useRef(null);
  const isAllCountItemsSet = useMemo(() => {
    const { countItems } = privateStates;
    return countItems.length >= spineViewers.length;
  }, [privateStates, spineViewers]);

  /**
   * Calculate: Callback from single page, Set count in private store,
   * Set count in public store when calculated all in private store
   */
  const setCountCallback = useCallback((count: number, index: number) => {
    // console.log("AAAA", ref);
    const spine = spines[index];
    privateDispatch(addCount({
      index,
      count,
      spineId: spine.id,
    }));
  }, [spines]);

  useEffect(() => {
    const { countItems } = privateStates;
    if (isAllCountItemsSet) {
      setViewerCountList(countItems);
    }
  }, [setViewerCountList, isAllCountItemsSet, privateStates]);

  useEffect(() => {
    if (!isAnalyzedBook) {
      privateDispatch(initCount());
    }
  }, [isAnalyzedBook]);

  /**
   * Viewer: Set offset spine index, Click left or right
   */
  useEffect(() => {
    const { current: containerCurrent } = containerRef;
    containerCurrent.scrollLeft = pagesOffset * (viewerWidth + VIEWER_PAGE_GAP);
  }, [viewerWidth, pagesOffset, pageOffset]);

  return (
    <>
      <Container
        ref={containerRef}
        styleProps={{
          width: viewerWidth,
          height: viewerHeight,
        }}
      >
        {
        spineViewers.map((spineViewer, index) => (
          <ViewerPage
            key={spineViewer}
            isAnalyzedBook={isAnalyzedBook}
            viewerWidth={viewerWidth}
            pageOffset={pageOffset}
            spineViewer={spineViewer}
            spine={spines[index]}
            fontSize={viewerFontSize || FONT_SIZE_RANGE.MIN}
            lineHeight={viewerLineHeihgt || LINE_HEIGHT_RANGE.MIN}
            setCountCallback={(count) => setCountCallback(count, index)}
            clickLink={clickLink}
          />
        ))
      }
      </Container>
    </>
  );
};

export default ViewerPages;
