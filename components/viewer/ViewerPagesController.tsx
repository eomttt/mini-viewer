import React, {
  useMemo, useEffect, useCallback,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import Loading from '../common/Loading';
import ViewerPages from './ViewerPages';

import * as viewerActions from '../../reducers/viewer';

import { ReducerStates } from '../../interfaces';
import { EpubBookViewer } from '../../interfaces/books';
import { ViewerState, ViewerSettingState } from '../../interfaces/viewer';

import { ViewerButton } from '../../styles/viewer';

import { usePageWithWithRatio, useViewerSpineId } from '../../hooks';

const Container = styled.div`
  background-color: ${(props) => props.styleProps.backgroundColor};
`;

const Content = styled.div`
  width: ${(props) => props.styleProps.width}px;
  height: ${(props) => props.styleProps.height}px;
  margin: 0 calc((100% - ${(props) => props.styleProps.width}px) / 2);
  padding: ${(props) => props.styleProps.menuHeight}px 0;
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
  book: EpubBookViewer;
}

const ViewerPagesController: React.FunctionComponent<Props> = ({
  menuHeight, book,
}) => {
  const dispatch = useDispatch();

  const {
    viewerWidth, viewerHeight,
    viewerCountList, viewerPageCount, viewerWholePageCount,
  }: ViewerState = useSelector((state: ReducerStates) => state.viewer);
  const {
    widthRatio, backgroundColor, settingChangeToggle,
  }: ViewerSettingState = useSelector((state: ReducerStates) => state.viewerSetting);

  const isAnalyzedBook = useMemo(() => viewerCountList.length >= book.spineViewers.length,
    [viewerCountList, book.spineViewers]);
  const isFirstPage = useMemo(() => viewerPageCount === 0, [viewerPageCount]);
  const isLastPage = useMemo(() => viewerPageCount === viewerWholePageCount,
    [viewerPageCount, viewerWholePageCount]);

  const widthWithRatio = usePageWithWithRatio(viewerWidth, widthRatio);
  const nowSpineId = useViewerSpineId(viewerCountList, viewerPageCount);

  useEffect(() => {
    if (isAnalyzedBook) {
      const pageCount = viewerCountList.reduce((acc, cur) => acc + cur.count, 0);
      dispatch(viewerActions.setViewerPageWholeCount(pageCount > 0 ? pageCount - 1 : 0));
    }
  }, [dispatch, viewerCountList, isAnalyzedBook]);

  useEffect(() => {
    dispatch(viewerActions.initViewerState());
  }, [dispatch, settingChangeToggle]);

  useEffect(() => {
    dispatch(viewerActions.setViewerSpineId(nowSpineId));
  }, [dispatch, nowSpineId]);

  const clickLeft = useCallback(() => {
    dispatch(viewerActions.setCountDownViewerPageCount());
  }, [dispatch]);

  const clickRight = useCallback(() => {
    dispatch(viewerActions.setCountUpViewerPageCount());
  }, [dispatch]);

  return (
    <Container
      styleProps={{
        backgroundColor,
      }}
    >
      <Content
        styleProps={{
          width: widthWithRatio,
          height: viewerHeight,
          menuHeight,
        }}
      >
        {!isAnalyzedBook && <Loading text="로딩 중..." />}
        <ViewerPages
          isAnalyzedBook={isAnalyzedBook}
          spines={book.spines}
          spineViewers={book.spineViewers}
        />
        {!isFirstPage && <LeftButton onClick={clickLeft}>Left</LeftButton>}
        {!isLastPage && <RightButton onClick={clickRight}>Right</RightButton>}
      </Content>
    </Container>
  );
};

export default ViewerPagesController;
