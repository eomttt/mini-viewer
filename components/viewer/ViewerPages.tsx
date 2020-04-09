import React, {
  useEffect, useCallback, useReducer, useRef, useMemo,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import * as viewerActions from '../../reducers/viewer';

import * as privateReducer from './ViewerPagesReducer';
import ViewerPage from './ViewerPage';

import { ReducerStates } from '../../interfaces';
import { EpubSpineItem } from '../../interfaces/books';
import { ViewerState, ViewerSettingState } from '../../interfaces/viewer';

import {
  VIEWER_PAGE_GAP,
} from '../../constants/viewer';

import {
  getPageCountBySpineIndex,
  getSpinePosition,
  getSpineIndexByHref,
} from '../../lib/util';

import {
  usePageWithWithRatio,
  useSpineIndex,
  useIsSetViewerCountList,
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

  const {
    viewerCountList, viewerPageCount,
    viewerLinkPosition,
    viewerSpineIndex, viewerSpinePosition,
  }: ViewerState = useSelector((state: ReducerStates) => state.viewer);
  const {
    viewerWidth, widthRatio, isOpenSettingMenu,
  }: ViewerSettingState = useSelector((state: ReducerStates) => state.viewerSetting);

  const containerRef = useRef(null);

  const isAllPrivateCountItemsSet = useMemo(() => {
    const { countItems } = privateStates;
    return countItems.length >= spineViewers.length;
  }, [privateStates, spineViewers]);

  const nowSpineIndex = useSpineIndex(viewerCountList, viewerPageCount);
  const widthWithRatio = usePageWithWithRatio(viewerWidth, widthRatio);
  const isSetViewerCountList = useIsSetViewerCountList(viewerCountList, spines);

  const setViewerCountList = useCallback(() => {
    const { countItems } = privateStates;
    dispatch(viewerActions.setViewerCountList(countItems));
  }, [privateStates]);

  const setPageCount = useCallback((spineIndex: number, position = 0) => {
    const pageCount = getPageCountBySpineIndex(viewerCountList, spineIndex);
    dispatch(viewerActions.setViewerPageCount(pageCount + position));
  }, [viewerCountList]);

  useEffect(() => {
    // Resize or Style 변경시 적용
    if (isSetViewerCountList) {
      const position = getSpinePosition(viewerCountList, viewerSpinePosition, viewerSpineIndex);
      setPageCount(viewerSpineIndex, position);
    }
  }, [isSetViewerCountList]);

  useEffect(() => {
    if (viewerLinkPosition) {
      const { spineIndex: linkSpineIndex, position } = viewerLinkPosition;
      setPageCount(linkSpineIndex, position);
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
    const { href, id } = spine;
    privateDispatch(privateReducer.addCount({
      index,
      count,
      href,
      spineId: id,
    }));
  }, [spines]);

  useEffect(() => {
    if (!isSetViewerCountList) {
      privateDispatch(privateReducer.initCount());
    }
  }, [isSetViewerCountList]);

  useEffect(() => {
    if (isAllPrivateCountItemsSet) {
      setViewerCountList();
    }
  }, [isAllPrivateCountItemsSet, setViewerCountList]);

  /**
   * Viewer: Set offset spine index, Click left or right, link
   */
  useEffect(() => {
    const { current: containerCurrent } = containerRef;
    containerCurrent.scrollLeft = nowSpineIndex * (widthWithRatio + VIEWER_PAGE_GAP);
  }, [widthWithRatio, nowSpineIndex]);

  const clickLink = useCallback((spineHref: string, hashTag: string) => {
    if (!isOpenSettingMenu) {
      const spineIndex = getSpineIndexByHref(viewerCountList, spineHref);
      if (spineIndex > -1) {
        if (hashTag) {
          dispatch(viewerActions.setViewerLink({
            spineIndex,
            tag: hashTag,
          }));
        } else {
          setPageCount(spineIndex);
        }
      }
    }
  }, [viewerCountList, isOpenSettingMenu, setPageCount]);

  return (
    <Container
      ref={containerRef}
    >
      {
        spineViewers.map((spineViewer, index) => (
          <ViewerPage
            key={spineViewer}
            isSetViewerCountList={isSetViewerCountList}
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
