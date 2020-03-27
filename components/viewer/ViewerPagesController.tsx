import React, { useMemo, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import Loading from '../common/Loading';
import ViewerPages from './ViewerPages';

import * as viewerActions from '../../reducers/viewer';

import { EpubSpineItem } from '../../interfaces/books';
import { ReducerState } from '../../interfaces';

import { VIEWER_WIDTH_RATIO, VIEWER_HEIGHT_RATIO } from '../../constants/viewer';
import { ViewerCount } from '../../interfaces/viewer';
import { ViewerButton } from '../../styles/viewer';

const RightButton = styled(ViewerButton)`
  right: 2em;
`;

const LeftButton = styled(ViewerButton)`
  left: 2em;
`;

interface Props {
  spines: EpubSpineItem[];
  viewers: string[];
}

const ViewerPagesController: React.FunctionComponent<Props> = ({
  spines, viewers,
}) => {
  const dispatch = useDispatch();

  const {
    viewerWidth, viewerHeight,
    viewerCountList, viewerPageCount, viewerWholePageCount,
  } = useSelector((state: ReducerState) => state.viewer);
  const {
    fontSize, lineHeight, widthRatio, settingChangeToggle,
  } = useSelector((state: ReducerState) => state.viewerSetting);

  const isAnalyzedBook = useMemo(() => viewerCountList.length >= viewers.length,
    [viewerCountList, viewers]);
  const isFirstPage = useMemo(() => viewerPageCount === 0, [viewerPageCount]);
  const isLastPage = useMemo(() => viewerPageCount === viewerWholePageCount,
    [viewerPageCount, viewerWholePageCount]);
  const nowSpineIndex = useMemo(() => {
    let spineIndex = 0;
    let accurateCount = 0;
    viewerCountList.some((viewerCount) => {
      if (accurateCount + viewerCount.count > viewerPageCount) {
        spineIndex = viewerCount.index;
        return true;
      }
      accurateCount += viewerCount.count;
      return false;
    });
    return spineIndex;
  }, [viewerPageCount, viewerCountList]);
  const pageOffset = useMemo(() => {
    let columnOffset = viewerPageCount;
    viewerCountList.some((viewerCount, index) => {
      if (index < nowSpineIndex) {
        columnOffset -= (viewerCount.count);
        return false;
      }
      return true;
    });
    return columnOffset;
  }, [viewerCountList, viewerPageCount, nowSpineIndex]);

  const setViewerCountList = useCallback((countItems: ViewerCount[]) => {
    dispatch(viewerActions.setViewerCountList(countItems));
  }, [dispatch]);

  useEffect(() => {
    dispatch(viewerActions.setViewerWidth(
      Math.floor(window.innerWidth * (VIEWER_WIDTH_RATIO / 100)),
    ));
    dispatch(viewerActions.setViewerHeight(
      Math.floor(window.innerHeight * (VIEWER_HEIGHT_RATIO / 100)),
    ));

    return () => {
      dispatch(viewerActions.initViewerState());
    };
  }, [dispatch]);

  useEffect(() => {
    if (isAnalyzedBook) {
      const pageCount = viewerCountList.reduce((acc, cur) => acc + cur.count, 0);
      dispatch(viewerActions.setViewerPageWholeCount(pageCount > 0 ? pageCount - 1 : 0));
    }
  }, [dispatch, viewerCountList, isAnalyzedBook]);

  useEffect(() => {
    dispatch(viewerActions.initViewerState());
  }, [dispatch, settingChangeToggle]);

  const calculateViewerWidth = useCallback(
    (nowWidth, newRatio) => Math.floor(Number(nowWidth) * (Number(newRatio) / 100)),
    [],
  );

  const clickLeft = useCallback(() => {
    dispatch(viewerActions.setCountDownViewerPageCount());
  }, [dispatch]);

  const clickRight = useCallback(() => {
    dispatch(viewerActions.setCountUpViewerPageCount());
  }, [dispatch]);

  return (
    <>
      {!isAnalyzedBook && <Loading text="로딩 중..." />}
      <ViewerPages
        viewerWidth={calculateViewerWidth(viewerWidth, widthRatio)}
        viewerHeight={viewerHeight}
        isAnalyzedBook={isAnalyzedBook}
        viewers={viewers}
        spines={spines}
        spineIndex={nowSpineIndex}
        pageOffset={pageOffset}
        setViewerCountList={setViewerCountList}
        viewerFontSize={fontSize}
        viewerLineHeihgt={lineHeight}
      />
      {!isFirstPage && <LeftButton onClick={clickLeft}>Left</LeftButton>}
      {!isLastPage && <RightButton onClick={clickRight}>Right</RightButton>}
    </>
  );
};

export default ViewerPagesController;
