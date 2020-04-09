import React, {
  useCallback,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import ViewerPages from './ViewerPages';

import * as viewerActions from '../../reducers/viewer';

import { ReducerStates } from '../../interfaces';
import { EpubBookViewer } from '../../interfaces/books';
import { ViewerState, ViewerSettingState } from '../../interfaces/viewer';

import {
  ViewerPageControllerStyleProps,
  ViewerButton,
} from '../../styles/viewer';

import {
  usePageWithWithRatio,
  useIsFirstPage,
  useIsLastPage,
} from '../../hooks';

interface ViewerPageControllerProps {
  menuHeight: number;
  book: EpubBookViewer;
}

const Container = styled.div`
  background-color: ${(props: ViewerPageControllerStyleProps): string => props.backgroundColor};
`;

const Content = styled.div`
  width: ${(props: ViewerPageControllerStyleProps): number => props.width}px;
  height: ${(props: ViewerPageControllerStyleProps): number => props.height}px;
  margin: 0 calc((100% - ${(props: ViewerPageControllerStyleProps): number => props.width}px) / 2);
  padding: ${(props: ViewerPageControllerStyleProps): number => props.menuHeight}px 0;
  text-align: center;
`;

const RightButton = styled(ViewerButton)`
  right: 1em;
`;

const LeftButton = styled(ViewerButton)`
  left: 1em;
`;

const ViewerPagesController: React.FunctionComponent<ViewerPageControllerProps> = ({
  menuHeight, book,
}) => {
  const dispatch = useDispatch();
  const {
    viewerPageCount, viewerWholePageCount,
  }: ViewerState = useSelector((state: ReducerStates) => state.viewer);
  const {
    viewerWidth, viewerHeight,
    widthRatio, backgroundColor,
    isOpenSettingMenu,
  }: ViewerSettingState = useSelector((state: ReducerStates) => state.viewerSetting);

  const isFirstPage = useIsFirstPage(viewerPageCount);
  const isLastPage = useIsLastPage(viewerPageCount, viewerWholePageCount);
  const widthWithRatio = usePageWithWithRatio(viewerWidth, widthRatio);

  const clickLeft = useCallback(() => {
    if (!isOpenSettingMenu) {
      dispatch(viewerActions.setCountDownViewerPageCount());
    }
  }, [isOpenSettingMenu]);

  const clickRight = useCallback(() => {
    if (!isOpenSettingMenu) {
      dispatch(viewerActions.setCountUpViewerPageCount());
    }
  }, [isOpenSettingMenu]);

  return (
    <Container
      backgroundColor={backgroundColor}
    >
      <Content
        width={widthWithRatio}
        height={viewerHeight}
        menuHeight={menuHeight}
      >
        <ViewerPages
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
