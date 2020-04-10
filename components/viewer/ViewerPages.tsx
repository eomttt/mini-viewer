import React, {
  useEffect, useCallback, useReducer, useRef, useState,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import * as viewerActions from '../../reducers/viewer';

import * as privateReducer from './ViewerPagesReducer';
import ViewerPage from './ViewerPage';

import { ReducerStates } from '../../interfaces';
import { EpubSpineItem } from '../../interfaces/books';
import {
  ViewerState,
  ViewerSettingState,
} from '../../interfaces/viewer';

import {
  getPageCountBySpineIndex,
  getSpinePosition,
} from '../../lib/util';

import {
  usePageWithWithRatio,
  useSpineIndex,
  useIsSetAllViewerCountList,
  useScrollLeft,
  useIsSetViewerSize,
} from '../../hooks';

interface ViewerPagesProps {
  spines: EpubSpineItem[];
  spineViewers: string[];
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  white-space: nowrap;
  text-align: initial;
  overflow: hidden;
`;

const ViewerPages: React.FunctionComponent<ViewerPagesProps> = ({
  spines, spineViewers,
}) => {
  const dispatch = useDispatch();
  const [privateStates, privateDispatch] = useReducer(privateReducer.reducer, privateReducer.initialState);

  const [toggleCalculateCount, setToggleCalculateCount] = useState(false);

  const {
    viewerCountList, viewerPageCount,
    viewerSpineIndex, viewerSpinePosition,
  }: ViewerState = useSelector((state: ReducerStates) => state.viewer);
  const {
    viewerWidth, viewerHeight, widthRatio,
  }: ViewerSettingState = useSelector((state: ReducerStates) => state.viewerSetting);

  const containerRef = useRef(null);

  const widthWithRatio = usePageWithWithRatio(viewerWidth, widthRatio);
  const isSetViewerSize = useIsSetViewerSize(viewerWidth, viewerHeight);

  const isSetAllViewerCountList = useIsSetAllViewerCountList(viewerCountList, spines);
  const spineIndexByPageCount = useSpineIndex(viewerCountList, viewerPageCount);
  const scrollLeft = useScrollLeft(viewerSpineIndex, widthWithRatio);

  const setCountCallback = useCallback((count: number, index: number) => {
    const { href, id } = spines[index];
    privateDispatch(privateReducer.addCount({
      index,
      count,
      href,
      spineId: id,
    }));
  }, [spines]);

  const isSetAllPrivateCountList = useCallback((countItems) => countItems.length >= spineViewers.length,
    [spineViewers]);

  const setPageCount = useCallback(() => {
    const pageCount = getPageCountBySpineIndex(viewerCountList, viewerSpineIndex);
    const position = getSpinePosition(viewerCountList, viewerSpineIndex, viewerSpinePosition);
    dispatch(viewerActions.setViewerPageCount(pageCount + position));
  }, [viewerCountList, viewerSpineIndex, viewerSpinePosition]);

  useEffect(() => {
    if (isSetViewerSize) {
      if (isSetAllViewerCountList) {
        setPageCount();
      } else {
        privateDispatch(privateReducer.initCount());
        setToggleCalculateCount(!toggleCalculateCount);
      }
    }
  }, [isSetAllViewerCountList, isSetViewerSize]);

  useEffect(() => {
    const { countItems } = privateStates;
    if (isSetAllPrivateCountList(countItems)) {
      dispatch(viewerActions.setViewerCountList(countItems));
    }
  }, [privateStates]);

  useEffect(() => {
    if (spineIndexByPageCount > -1) {
      dispatch(viewerActions.setViewerSpineIndex(spineIndexByPageCount));
    }
  }, [spineIndexByPageCount]);

  useEffect(() => {
    if (scrollLeft > -1) {
      const { current: containerCurrent } = containerRef;
      containerCurrent.scrollLeft = scrollLeft;
    }
  }, [scrollLeft]);

  return (
    <Container
      ref={containerRef}
    >
      {
        spineViewers.map((spineViewer, index) => (
          <ViewerPage
            key={spineViewer}
            spineIndex={index}
            spineViewer={spineViewer}
            spine={spines[index]}
            isSetAllViewerCountList={isSetAllViewerCountList}
            toggleCalculateCount={toggleCalculateCount}
            setCountCallback={setCountCallback}
          />
        ))
    }
    </Container>
  );
};

export default ViewerPages;
