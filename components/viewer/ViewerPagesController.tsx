import React, {
  useMemo, useEffect, useCallback,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import Loading from '../common/Loading';
import ViewerPages from './ViewerPages';

import * as viewerActions from '../../reducers/viewer';

import { ReducerStates } from '../../interfaces';
import { EpubSpineItem } from '../../interfaces/books';
import { ViewerCount, ViewerState, ViewerSettingState } from '../../interfaces/viewer';

import { VIEWER_WIDTH_RATIO, VIEWER_HEIGHT_RATIO } from '../../constants/viewer';

import { ViewerButton } from '../../styles/viewer';

import { usePagesOffset, usePageOffset } from '../../hooks';
import { getPageCountBySpineId } from '../../lib/util';

const Container = styled.div`
  padding: ${(props) => props.styleProps.menuHeight}px 0;
  background-color: ${(props) => props.styleProps.backgroundColor};
  text-align: center;
`;

const RightButton = styled(ViewerButton)`
  right: 2em;
`;

const LeftButton = styled(ViewerButton)`
  left: 2em;
`;

interface Props {
  menuHeight: number;
  spines: EpubSpineItem[];
  spineViewers: string[];
}

const ViewerPagesController: React.FunctionComponent<Props> = ({
  menuHeight, spines, spineViewers,
}) => {
  const dispatch = useDispatch();

  const {
    currentBookInfo,
    viewerWidth, viewerHeight,
    viewerCountList, viewerPageCount, viewerWholePageCount,
  }: ViewerState = useSelector((state: ReducerStates) => state.viewer);
  const {
    fontSize, lineHeight, widthRatio, backgroundColor, settingChangeToggle,
  }: ViewerSettingState = useSelector((state: ReducerStates) => state.viewerSetting);

  const isAnalyzedBook = useMemo(() => viewerCountList.length >= spineViewers.length,
    [viewerCountList, spineViewers]);
  const isFirstPage = useMemo(() => viewerPageCount === 0, [viewerPageCount]);
  const isLastPage = useMemo(() => viewerPageCount === viewerWholePageCount,
    [viewerPageCount, viewerWholePageCount]);

  const pagesOffset = usePagesOffset(viewerCountList, viewerPageCount);
  const pageOffset = usePageOffset(viewerCountList, viewerPageCount, pagesOffset);

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

  const setPageCountBySpineId = useCallback((selectedSpineId) => {
    const pageCountBySpineId = getPageCountBySpineId(viewerCountList, selectedSpineId);
    if (pageCountBySpineId > -1) {
      dispatch(viewerActions.setViewerPageCount(pageCountBySpineId));
    }
  }, [dispatch, viewerCountList]);

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

  const clickLink = useCallback((spineHref, hashTag) => {
    console.log(spineHref, hashTag);

    if (currentBookInfo) {
      const { book } = currentBookInfo;
      const { items } = book;
      let selectedSpineId = null;

      items.some((item) => {
        const { href } = item;
        if (spineHref.includes(href)) {
          selectedSpineId = item.id;
          return true;
        }
        return false;
      });

      if (selectedSpineId) {
        setPageCountBySpineId(selectedSpineId);
      }
    }
  }, [currentBookInfo, setPageCountBySpineId]);

  return (
    <Container
      styleProps={{
        menuHeight,
        backgroundColor,
      }}
    >
      {/* {!isAnalyzedBook && <Loading text="로딩 중..." />} */}
      <ViewerPages
        viewerWidth={calculateViewerWidth(viewerWidth, widthRatio)}
        viewerHeight={viewerHeight}
        isAnalyzedBook={isAnalyzedBook}
        spineViewers={spineViewers}
        spines={spines}
        pagesOffset={pagesOffset}
        pageOffset={pageOffset}
        setViewerCountList={setViewerCountList}
        clickLink={clickLink}
        viewerFontSize={fontSize}
        viewerLineHeihgt={lineHeight}
      />
      {!isFirstPage && <LeftButton onClick={clickLeft}>Left</LeftButton>}
      {!isLastPage && <RightButton onClick={clickRight}>Right</RightButton>}
    </Container>
  );
};

export default ViewerPagesController;
