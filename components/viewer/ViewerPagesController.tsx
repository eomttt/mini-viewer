import React, {
  useMemo, useCallback,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import ViewerPages from './ViewerPages';

import * as viewerActions from '../../reducers/viewer';

import { ReducerStates } from '../../interfaces';
import { EpubBookViewer } from '../../interfaces/books';
import { ViewerState, ViewerSettingState } from '../../interfaces/viewer';

import { ViewerButton } from '../../styles/viewer';

import { usePageWithWithRatio } from '../../hooks';

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
  right: 1em;
`;

const LeftButton = styled(ViewerButton)`
  left: 1em;
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
    viewerPageCount, viewerWholePageCount,
  }: ViewerState = useSelector((state: ReducerStates) => state.viewer);
  const {
    viewerWidth, viewerHeight,
    widthRatio, backgroundColor,
    isOpenSettingMenu,
  }: ViewerSettingState = useSelector((state: ReducerStates) => state.viewerSetting);

  const isFirstPage = useMemo(() => viewerPageCount === 0, [viewerPageCount]);
  const isLastPage = useMemo(() => viewerPageCount === viewerWholePageCount,
    [viewerPageCount, viewerWholePageCount]);

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
