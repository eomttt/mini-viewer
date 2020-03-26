import React, {
  useEffect, useCallback, useReducer, useRef,
} from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import * as viewerActions from '../../reducers/viewer';

import {
  viewerPagesReducerStates,
  viewerPagesReducer,
  initCount, addCount,
} from './ViewerPagesReducer';
import ViewerPage from './ViewerPage';

import { EpubSpineItem } from '../../interfaces/books';

import { ViewerButton } from '../../styles/viewer';
import { VIEWER_PAGE_GAP } from '../../constants/viewer';

interface Props {
  isAnalyzedBook: boolean;
  viewerWidth: number;
  viewerHeight: number;
  spines: EpubSpineItem[];
  spineIndex: number;
  pageOffset: number;
  viewers: string[];
  isFirstPage: boolean;
  isLastPage: boolean;
}

const Container = styled.div`
  width: ${(props) => props.styleProps.width}px;
  height:  ${(props) => props.styleProps.height}px;
  white-space: nowrap;
  text-align: initial;
  overflow: hidden;
`;

const RightButton = styled(ViewerButton)`
  right: 2em;
`;

const LeftButton = styled(ViewerButton)`
  left: 2em;
`;

const ViewerPages: React.FunctionComponent<Props> = ({
  isAnalyzedBook,
  viewerWidth, viewerHeight,
  spines, spineIndex, pageOffset,
  viewers,
  isFirstPage, isLastPage,
}) => {
  const dispatch = useDispatch();

  const [privateStates, privateDispatch] = useReducer(viewerPagesReducer, viewerPagesReducerStates);

  const containerRef = useRef(null);

  const setCountCallback = useCallback((count: number, index: number) => {
    const spine = spines[index];
    privateDispatch(addCount({
      index,
      count,
      spineId: spine.id,
    }));
  }, [spines]);

  useEffect(() => {
    if (!isAnalyzedBook) {
      privateDispatch(initCount());
    }
  }, [isAnalyzedBook]);

  useEffect(() => {
    const { countItems } = privateStates;
    if (countItems.length >= viewers.length) {
      dispatch(viewerActions.setViewerCountList(countItems));
    }
  }, [dispatch, privateStates, viewers]);

  useEffect(() => {
    const { current: containerCurrent } = containerRef;
    containerCurrent.scrollLeft = spineIndex * (viewerWidth + VIEWER_PAGE_GAP);
  }, [viewerWidth, spineIndex, pageOffset]);

  const clickLeft = useCallback(() => {
    dispatch(viewerActions.setCountDownViewerPageCount());
  }, [dispatch]);

  const clickRight = useCallback(() => {
    dispatch(viewerActions.setCountUpViewerPageCount());
  }, [dispatch]);

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
        viewers.map((viewer, index) => (
          <ViewerPage
            key={viewer}
            isAnalyzedBook={isAnalyzedBook}
            viewerWidth={viewerWidth}
            viewerOffset={pageOffset}
            viewer={viewer}
            setCountCallback={(count) => setCountCallback(count, index)}
          />
        ))
      }
      </Container>
      {!isFirstPage && <LeftButton onClick={clickLeft}>Left</LeftButton>}
      {!isLastPage && <RightButton onClick={clickRight}>Right</RightButton>}
    </>
  );
};

export default ViewerPages;
