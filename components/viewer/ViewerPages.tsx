import React, {
  useEffect, useCallback, useReducer, useRef, useMemo,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import * as viewerActions from '../../reducers/viewer';

import {
  viewerPagesReducerStates,
  viewerPagesReducer,
  initCount, addCount,
} from './ViewerPagesReducer';
import ViewerPage from './ViewerPage';

import { ReducerStates } from '../../interfaces';
import { EpubSpineItem } from '../../interfaces/books';
import { ViewerState, ViewerSettingState } from '../../interfaces/viewer';

import {
  VIEWER_PAGE_GAP,
} from '../../constants/viewer';

import {
  getPageCountBySpineIndex,
  getMaxSpinePosition,
  getSpineIndexByHref,
} from '../../lib/util';

import {
  usePageWithWithRatio,
  useSpineIndex,
  useSetBookCount,
} from '../../hooks';

const Container = styled.div`
  width: 100%;
  height: 100%;
  white-space: nowrap;
  text-align: initial;
  overflow: hidden;
`;

interface Props {
  spines: EpubSpineItem[];
  spineViewers: string[];
}

const ViewerPages: React.FunctionComponent<Props> = ({
  spines, spineViewers,
}) => {
  const dispatch = useDispatch();
  const [privateStates, privateDispatch] = useReducer(viewerPagesReducer, viewerPagesReducerStates);

  const {
    viewerCountList, viewerPageCount,
    viewerLinkPosition,
    viewerSpineIndex, viewerSpinePosition,
  }: ViewerState = useSelector((state: ReducerStates) => state.viewer);
  const {
    viewerWidth, widthRatio,
  }: ViewerSettingState = useSelector((state: ReducerStates) => state.viewerSetting);

  const containerRef = useRef(null);

  const isAllCountItemsSet = useMemo(() => {
    const { countItems } = privateStates;
    return countItems.length >= spineViewers.length;
  }, [privateStates, spineViewers]);

  const nowSpineIndex = useSpineIndex(viewerCountList, viewerPageCount);
  const widthWithRatio = usePageWithWithRatio(viewerWidth, widthRatio);
  const isSetCountList = useSetBookCount(viewerCountList, spines);

  useEffect(() => {
    // Resize or Style 변경시 적용
    if (isSetCountList && viewerSpineIndex > -1) {
      const maxSpinePosition = getMaxSpinePosition(viewerCountList, viewerSpineIndex);
      const pageCount = getPageCountBySpineIndex(viewerCountList, viewerSpineIndex);
      const position = viewerSpinePosition >= maxSpinePosition
        ? maxSpinePosition - 1
        : viewerSpinePosition;
      dispatch(viewerActions.setViewerPageCount(pageCount + position));
    }
  }, [isSetCountList]);

  useEffect(() => {
    if (viewerLinkPosition) {
      const { spineIndex: linkSpineIndex, position } = viewerLinkPosition;
      const pageCount = getPageCountBySpineIndex(viewerCountList, linkSpineIndex);
      dispatch(viewerActions.setViewerPageCount(pageCount + position));
    }
  }, [viewerLinkPosition]);

  useEffect(() => {
    if (nowSpineIndex > -1) {
      dispatch(viewerActions.setViewerSpineIndex(nowSpineIndex));
    }
  }, [nowSpineIndex]);

  /**
   * Calculate: Callback from single page, Set count in private store,
   * Set count in public store when calculated all in private store
   */
  const setCountCallback = useCallback((count: number, index: number) => {
    const spine = spines[index];
    privateDispatch(addCount({
      index,
      count,
      href: spine.href,
      spineId: spine.id,
    }));
  }, [spines]);

  useEffect(() => {
    if (!isSetCountList) {
      privateDispatch(initCount());
    }
  }, [isSetCountList]);

  useEffect(() => {
    const { countItems } = privateStates;
    if (isAllCountItemsSet) {
      dispatch(viewerActions.setViewerCountList(countItems));
    }
  }, [isAllCountItemsSet, privateStates]);

  /**
   * Viewer: Set offset spine index, Click left or right, link
   */
  useEffect(() => {
    const { current: containerCurrent } = containerRef;
    containerCurrent.scrollLeft = nowSpineIndex * (widthWithRatio + VIEWER_PAGE_GAP);
  }, [widthWithRatio, nowSpineIndex]);

  const clickLink = useCallback((spineHref: string, hashTag: string) => {
    const spineIndex = getSpineIndexByHref(viewerCountList, spineHref);
    if (spineIndex > -1) {
      const pageCount = getPageCountBySpineIndex(viewerCountList, spineIndex);
      if (hashTag) {
        dispatch(viewerActions.setViewerLink({
          spineIndex,
          tag: hashTag,
        }));
      } else {
        dispatch(viewerActions.setViewerPageCount(pageCount));
      }
    }
  }, [viewerCountList, spines]);

  return (
    <Container
      ref={containerRef}
    >
      {
        spineViewers.map((spineViewer, index) => (
          <ViewerPage
            key={spineViewer}
            isSetCountList={isSetCountList}
            spineIndex={index}
            spineViewer={spineViewer}
            spine={spines[index]}
            setCountCallback={setCountCallback}
            clickLink={clickLink}
          />
        ))
    }
    </Container>
  );
};

export default ViewerPages;
