import React, {
  useEffect, useCallback, useReducer, useRef, useMemo,
} from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import {
  viewerPagesReducerStates,
  viewerPagesReducer,
  initCount, addCount,
} from './ViewerPagesReducer';
import ViewerPage from './ViewerPage';

import { ReducerStates } from '../../interfaces';
import { EpubSpineItem } from '../../interfaces/books';
import { ViewerCount, ViewerState, ViewerSettingState } from '../../interfaces/viewer';

import {
  VIEWER_PAGE_GAP,
} from '../../constants/viewer';

import { usePageWithWithRatio, usePagesOffset } from '../../hooks';

const Container = styled.div`
  width: 100%;
  height: 100%;
  white-space: nowrap;
  text-align: initial;
  overflow: hidden;
`;

interface Props {
  isAnalyzedBook: boolean;
  spines: EpubSpineItem[];
  spineViewers: string[];
  setViewerCountList: (countItems: ViewerCount[]) => void;
  clickLink: (spineHref: string, hashTag: string) => void;
}

const ViewerPages: React.FunctionComponent<Props> = ({
  isAnalyzedBook,
  spines, spineViewers,
  clickLink, setViewerCountList,
}) => {
  const [privateStates, privateDispatch] = useReducer(viewerPagesReducer, viewerPagesReducerStates);

  const {
    viewerWidth, viewerCountList, viewerPageCount,
  }: ViewerState = useSelector((state: ReducerStates) => state.viewer);
  const {
    widthRatio,
  }: ViewerSettingState = useSelector((state: ReducerStates) => state.viewerSetting);

  const containerRef = useRef(null);

  const isAllCountItemsSet = useMemo(() => {
    const { countItems } = privateStates;
    return countItems.length >= spineViewers.length;
  }, [privateStates, spineViewers]);

  const pagesOffset = usePagesOffset(viewerCountList, viewerPageCount);
  const widthWithRatio = usePageWithWithRatio(viewerWidth, widthRatio);

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
            isAnalyzedBook={isAnalyzedBook}
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
