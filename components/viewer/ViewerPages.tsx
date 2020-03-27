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
  overflow: hidden;
`;

interface Props {
  viewerWidth: number;
  viewerHeight: number;
  isAnalyzedBook: boolean;
  viewers: string[];
  viewerIndex: number;
  spines: EpubSpineItem[];
  pageOffset: number;
  setViewerCountList: (countItems: ViewerCount[]) => void;
  clickLink: (viewerIndex: string, hashTag: string) => void;
  viewerFontSize?: number;
  viewerLineHeihgt?: number;
}

const ViewerPages: React.FunctionComponent<Props> = ({
  viewerWidth, viewerHeight,
  isAnalyzedBook,
  viewers, viewerIndex,
  spines, pageOffset,
  clickLink, setViewerCountList,
  viewerFontSize, viewerLineHeihgt,
}) => {
  const [privateStates, privateDispatch] = useReducer(viewerPagesReducer, viewerPagesReducerStates);
  const containerRef = useRef(null);
  const isAllCountItemsSet = useMemo(() => {
    const { countItems } = privateStates;
    return countItems.length >= viewers.length;
  }, [privateStates, viewers]);

  /**
   * Calculate: Callback from single page, Set count in private store,
   * Set count in public store when calculated all in private store
   */
  const setCountCallback = useCallback((count: number, index: number) => {
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
    containerCurrent.scrollLeft = viewerIndex * (viewerWidth + VIEWER_PAGE_GAP);
  }, [viewerWidth, viewerIndex, pageOffset]);

  const testClick = (e) => {
    e.preventDefault();

    const anchorHref = e.target.getAttribute('href');
    if (anchorHref) {
      const [hrefLink, hashId] = anchorHref.split('#');
      clickLink(hrefLink, hashId);
    }
  };

  return (
    <>
      <Container
        ref={containerRef}
        styleProps={{
          width: viewerWidth,
          height: viewerHeight,
        }}
        onClick={testClick}
      >
        {
        viewers.map((viewer, index) => (
          <ViewerPage
            key={viewer}
            isAnalyzedBook={isAnalyzedBook}
            viewerWidth={viewerWidth}
            viewerOffset={pageOffset}
            viewer={viewer}
            fontSize={viewerFontSize || FONT_SIZE_RANGE.MIN}
            lineHeight={viewerLineHeihgt || LINE_HEIGHT_RANGE.MIN}
            setCountCallback={(count) => setCountCallback(count, index)}
          />
        ))
      }
      </Container>
    </>
  );
};

export default ViewerPages;
