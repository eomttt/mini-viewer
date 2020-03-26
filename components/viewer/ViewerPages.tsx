import React, {
  useEffect, useCallback, useReducer, useMemo, useRef,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import * as viewerActions from '../../reducers/viewer';

import ViewerPage from './ViewerPage';

import { ReducerState } from '../../interfaces';
import { ViewerCount } from '../../interfaces/viewer';
import { EpubSpineItem } from '../../interfaces/books';

import { ViewerButton } from '../../styles/viewer';
import { VIEWER_PAGE_GAP } from '../../constants/viewer';

interface Props {
  viewerWidth: number;
  viewerHeight: number;
  spines: EpubSpineItem[];
  spineIndex: number;
  pageOffset: number;
  viewers: string[];
  isFirstPage: boolean;
  isLastPage: boolean;
}

const Container = styled.div`
  width: ${(props) => props.styleProps.width}px;
  height:  ${(props) => props.styleProps.height}px;
  white-space: nowrap;
  text-align: initial;
  overflow: hidden;
`;

const RightButton = styled(ViewerButton)`
  right: 2em;
`;

const LeftButton = styled(ViewerButton)`
  left: 2em;
`;

const PRIVATE_ADD_COUNT_ACTION = 'AddCount';
const initialState = {
  countItems: [],
};

// countItems 중복 제거
const getNewCountItems = (wholeItem: ViewerCount[], newItem: ViewerCount): ViewerCount[] => {
  const { index } = newItem;
  let existIndex = -1;

  wholeItem.some((item) => {
    if (item.index === index) {
      existIndex = index;
      return true;
    }
    return false;
  });

  if (existIndex > -1) {
    return wholeItem.map((item) => {
      if (item.index === existIndex) {
        return newItem;
      }
      return item;
    });
  }

  return [...wholeItem, newItem];
};

const privateReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRIVATE_ADD_COUNT_ACTION: {
      const data = action.payload;
      return {
        ...state,
        countItems: getNewCountItems(state.countItems, data),
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

const ViewerPages: React.FunctionComponent<Props> = ({
  viewerWidth, viewerHeight,
  spines, spineIndex, pageOffset,
  viewers,
  isFirstPage, isLastPage,
}) => {
  const dispatch = useDispatch();

  const {
    viewerCountList,
  } = useSelector((state: ReducerState) => state.viewer);

  const [reducerState, dispatchReducer] = useReducer(privateReducer, initialState);

  const isAnalyzedBook = useMemo(() => viewerCountList.length >= viewers.length,
    [viewerCountList, viewers]);

  const containerRef = useRef(null);

  const setCountCallback = useCallback((count: number, index: number) => {
    const spine = spines[index];
    console.log("Count", count, index);
    dispatchReducer({
      type: PRIVATE_ADD_COUNT_ACTION,
      payload: {
        index,
        count,
        spineId: spine.id,
      },
    });
  }, [spines]);

  useEffect(() => {
    const { countItems } = reducerState;
    if (countItems.length >= viewers.length) {
      dispatch(viewerActions.setViewerCountList(countItems));
    }
  }, [dispatch, reducerState, viewers]);

  useEffect(() => {
    const { current: containerCurrent } = containerRef;
    containerCurrent.scrollLeft = spineIndex * (viewerWidth + VIEWER_PAGE_GAP);
  }, [viewerWidth, spineIndex, pageOffset]);

  const clickLeft = useCallback(() => {
    dispatch(viewerActions.setCountDownViewerPageCount());
  }, [dispatch]);

  const clickRight = useCallback(() => {
    dispatch(viewerActions.setCountUpViewerPageCount());
  }, [dispatch]);

  return (
    <>
      <Container
        ref={containerRef}
        styleProps={{
          width: viewerWidth,
          height: viewerHeight,
        }}
      >
        {
        viewers.map((viewer, index) => (
          <ViewerPage
            key={viewer}
            isAnalyzedBook={isAnalyzedBook}
            viewerWidth={viewerWidth}
            viewerOffset={pageOffset}
            viewer={viewer}
            setCountCallback={(count) => setCountCallback(count, index)}
          />
        ))
      }
      </Container>
      {!isFirstPage && <LeftButton onClick={clickLeft}>Left</LeftButton>}
      {!isLastPage && <RightButton onClick={clickRight}>Right</RightButton>}
    </>
  );
};

export default ViewerPages;
