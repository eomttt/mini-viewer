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
    viewerWidth, viewerHeight,
    widthRatio,
  }: ViewerSettingState = useSelector((state: ReducerStates) => state.viewerSetting);

  const containerRef = useRef(null);

  const widthWithRatio = usePageWithWithRatio(viewerWidth, widthRatio);
  const isSetViewerSize = useIsSetViewerSize(viewerWidth, viewerHeight);

  const isSetAllViewerCountList = useIsSetAllViewerCountList(viewerCountList, spines);
  const isSetAllPrivateCountList = useIsSetAllViewerCountList(privateStates.countItems, spines);

  const nowSpineIndex = useSpineIndex(viewerCountList, viewerPageCount);
  const scrollLeft = useScrollLeft(viewerSpineIndex, widthWithRatio);

  const initPrivatePageCount = useCallback((): void => {
    privateDispatch(privateReducer.initCount());
    setToggleCalculateCount(!toggleCalculateCount);
  }, []);

  const setPrivatePageCount = useCallback((count: number, index: number): void => {
    const { href, id } = spines[index];
    privateDispatch(privateReducer.addCount({
      index,
      count,
      href,
      spineId: id,
    }));
  }, [spines]);

  const setViewerCountList = useCallback((): void => {
    const { countItems } = privateStates;
    dispatch(viewerActions.setViewerCountList(countItems));
  }, [privateStates]);

  const setPageCount = useCallback((): void => {
    const pageCount = getPageCountBySpineIndex(viewerCountList, viewerSpineIndex);
    const position = getSpinePosition(viewerCountList, viewerSpineIndex, viewerSpinePosition);
    dispatch(viewerActions.setViewerPageCount(pageCount + position));
  }, [viewerCountList, viewerSpineIndex, viewerSpinePosition]);

  useEffect(() => {
    if (isSetViewerSize) {
      if (isSetAllViewerCountList) {
        setPageCount();
      } else {
        initPrivatePageCount();
      }
    }
  }, [isSetViewerSize, isSetAllViewerCountList]);

  useEffect(() => {
    if (isSetAllPrivateCountList) {
      setViewerCountList();
    }
  }, [isSetAllPrivateCountList, setViewerCountList]);

  useEffect(() => {
    if (nowSpineIndex > -1) {
      dispatch(viewerActions.setViewerSpineIndex(nowSpineIndex));
    }
  }, [nowSpineIndex]);

  useEffect(() => {
    if (scrollLeft > -1) {
      const { current: containerCurrent } = containerRef;
      containerCurrent.scrollLeft = scrollLeft;
    }
  }, [isSetAllViewerCountList, scrollLeft]);

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
            setCountCallback={setPrivatePageCount}
          />
        ))
    }
    </Container>
  );
};

export default ViewerPages;
