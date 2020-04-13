import React, {
  useEffect, useCallback, useReducer, useRef, useState,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as Styled from '../../../styles/viewer/page';
import * as viewerActions from '../../../reducers/viewer';

import * as privateReducer from './ViewerPagesReducer';
import ViewerPage from './ViewerPage';

import { ReducerStates } from '../../../interfaces';
import {
  ViewerState,
  ViewerSettingState,
} from '../../../interfaces/viewer';
import {
  ViewerPagesProps
} from '../../../interfaces/viewer/page';

import {
  getPageCountBySpineIndex,
  getSpinePosition,
} from '../../../lib/util';

import {
  usePageWithWithRatio,
  useIsSetViewerSize,
  useIsSetAllViewerCountList,
  useSpineIndex,
  useSpinePosition,
  useScrollLeft,
} from '../../../hooks';

const ViewerPages: React.FunctionComponent<ViewerPagesProps> = ({
  spines, spineViewers,
}) => {
  const dispatch = useDispatch();
  const [privateStates, privateDispatch] = useReducer(privateReducer.reducer, privateReducer.initialState);

  const [toggleCalculateCount, setToggleCalculateCount] = useState<boolean>(false);

  const {
    viewerCountList, viewerPageCount,
    viewerSpineIndex, viewerSpinePosition,
  }: ViewerState = useSelector((state: ReducerStates) => state.viewer);
  const {
    viewerWidth, viewerHeight,
    widthRatio,
  }: ViewerSettingState = useSelector((state: ReducerStates) => state.viewerSetting);

  const containerRef = useRef<HTMLDivElement>(null);

  const widthWithRatio: number = usePageWithWithRatio(viewerWidth, widthRatio);
  const isSetViewerSize: boolean = useIsSetViewerSize(viewerWidth, viewerHeight);

  const isSetAllViewerCountList: boolean = useIsSetAllViewerCountList(viewerCountList, spines);
  const isSetAllPrivateCountList: boolean = useIsSetAllViewerCountList(privateStates.countItems, spines);

  const nowSpineIndex: number = useSpineIndex(viewerCountList, viewerPageCount);
  const nowSpinePosition: number = useSpinePosition(viewerCountList, viewerPageCount, viewerSpineIndex);
  const scrollLeft: number = useScrollLeft(viewerSpineIndex, widthWithRatio);

  const initPrivatePageCount = useCallback((): void => {
    privateDispatch(privateReducer.initCount());
    setToggleCalculateCount(!toggleCalculateCount);
  }, [toggleCalculateCount]);

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
    if (nowSpinePosition > -1) {
      dispatch(viewerActions.setViewerSpinePosition(nowSpinePosition));
    }
  }, [nowSpinePosition]);

  useEffect(() => {
    if (scrollLeft > -1) {
      const { current: containerCurrent } = containerRef;
      containerCurrent.scrollLeft = scrollLeft;
    }
  }, [isSetAllViewerCountList, scrollLeft]);

  return (
    <Styled.ViewerPagesContainer
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
    </Styled.ViewerPagesContainer>
  );
};

export default ViewerPages;
