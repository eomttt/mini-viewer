import React, {
  useCallback,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as Styled from '../../../styles/viewer/page';

import ViewerPages from './ViewerPages';

import * as viewerActions from '../../../reducers/viewer';

import { ReducerStates } from '../../../interfaces';
import {
  ViewerState,
  ViewerSettingState,
} from '../../../interfaces/viewer';
import {
  ViewerPageControllerProps
} from '../../../interfaces/viewer/page';

import {
  usePageWithWithRatio,
  useIsFirstPage,
  useIsLastPage,
} from '../../../hooks';

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

  const isFirstPage: boolean = useIsFirstPage(viewerPageCount);
  const isLastPage: boolean = useIsLastPage(viewerPageCount, viewerWholePageCount);
  const widthWithRatio: number = usePageWithWithRatio(viewerWidth, widthRatio);

  const clickLeft = useCallback((): void => {
    if (!isOpenSettingMenu) {
      dispatch(viewerActions.setCountDownViewerPageCount());
    }
  }, [isOpenSettingMenu]);

  const clickRight = useCallback((): void => {
    if (!isOpenSettingMenu) {
      dispatch(viewerActions.setCountUpViewerPageCount());
    }
  }, [isOpenSettingMenu]);

  return (
    <Styled.ViewerControllerContainer
      backgroundColor={backgroundColor}
    >
      <Styled.ViewerControllerContent
        width={widthWithRatio}
        height={viewerHeight}
        menuHeight={menuHeight}
      >
        <ViewerPages
          spines={book.spines}
          spineViewers={book.spineViewers}
        />
        {!isFirstPage &&
          <Styled.ViewerControllerLeftButton onClick={clickLeft}>
            Left
          </Styled.ViewerControllerLeftButton>
        }
        {!isLastPage &&
          <Styled.ViewerControllerRightButton onClick={clickRight}>
            Right
          </Styled.ViewerControllerRightButton>
        }
      </Styled.ViewerControllerContent>
    </Styled.ViewerControllerContainer>
  );
};

export default ViewerPagesController;
