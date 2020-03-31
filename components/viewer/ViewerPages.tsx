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

import { getPageCountBySpineId, getMaxPageOffset } from '../../lib/util';

import {
  usePageWithWithRatio,
  usePagesOffset,
  useViewerSpineId,
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
    viewerLinkPageOffset,
    viewerSpineId, viewerSpineOffset,
  }: ViewerState = useSelector((state: ReducerStates) => state.viewer);
  const {
    viewerWidth, widthRatio,
  }: ViewerSettingState = useSelector((state: ReducerStates) => state.viewerSetting);

  const containerRef = useRef(null);

  const isAllCountItemsSet = useMemo(() => {
    const { countItems } = privateStates;
    return countItems.length >= spineViewers.length;
  }, [privateStates, spineViewers]);

  const nowSpineId = useViewerSpineId(viewerCountList, viewerPageCount);
  const pagesOffset = usePagesOffset(viewerCountList, viewerPageCount);
  const widthWithRatio = usePageWithWithRatio(viewerWidth, widthRatio);
  const isSetCountList = useSetBookCount(viewerCountList, spines);

  const getSpineId = useCallback((selectedHref: string): null | string => {
    let selectedSpineId = null;
    spines.some((spine) => {
      const { href, id } = spine;
      if (href && selectedHref.includes(href)) {
        selectedSpineId = id;
        return true;
      }
      return false;
    });

    return selectedSpineId;
  }, [spines]);

  const setPageCountBySpineId = useCallback((spineId: string, offset?: number) => {
    const pageCount = getPageCountBySpineId(viewerCountList, spineId);
    if (pageCount > -1) {
      dispatch(viewerActions.setViewerPageCount(pageCount + offset));
    }
  }, [dispatch, viewerCountList]);

  useEffect(() => {
    if (isSetCountList && viewerSpineId) {
      const maxPageOffset = getMaxPageOffset(viewerCountList, viewerSpineId);
      const pageOffset = viewerSpineOffset >= maxPageOffset ? maxPageOffset - 1 : viewerSpineOffset;
      setPageCountBySpineId(viewerSpineId, pageOffset);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, isSetCountList, setPageCountBySpineId]);

  useEffect(() => {
    if (viewerLinkPageOffset) {
      const { spineId, offset } = viewerLinkPageOffset;
      setPageCountBySpineId(spineId, offset);
    }
  }, [dispatch, viewerLinkPageOffset, setPageCountBySpineId]);

  useEffect(() => {
    if (nowSpineId) {
      dispatch(viewerActions.setViewerSpineId(nowSpineId));
    }
  }, [dispatch, nowSpineId]);

  const clickLink = useCallback((spineHref, hashTag) => {
    const spineId = getSpineId(spineHref);
    if (spineId) {
      if (hashTag) {
        dispatch(viewerActions.setViewerLink({
          spineId,
          tag: hashTag,
        }));
      } else {
        setPageCountBySpineId(spineId, 0);
      }
    }
  }, [dispatch, getSpineId, setPageCountBySpineId]);

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
      dispatch(viewerActions.setViewerCountList(countItems));
    }
  }, [dispatch, isAllCountItemsSet, privateStates]);

  useEffect(() => {
    if (!isSetCountList) {
      privateDispatch(initCount());
    }
  }, [isSetCountList]);

  /**
   * Viewer: Set offset spine index, Click left or right
   */
  useEffect(() => {
    const { current: containerCurrent } = containerRef;
    containerCurrent.scrollLeft = pagesOffset * (widthWithRatio + VIEWER_PAGE_GAP);
  }, [widthWithRatio, pagesOffset]);

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
