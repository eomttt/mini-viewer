import React, {
  useEffect, useCallback, useReducer, useMemo,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as viewerActions from '../../reducers/viewer';

import ViewerCountComponent from './ViewerCount';

import { ReducerState } from '../../interfaces';
import { ViewerCount } from '../../interfaces/viewer';
import { EpubSpineItem } from '../../interfaces/books';

interface Props {
  viewerWidth: number;
  viewerHeight: number;
  viewers: string[];
  spines: EpubSpineItem[];
}

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

const ViewerCalculator: React.FunctionComponent<Props> = ({
  viewerWidth, viewerHeight,
  viewers, spines,
}) => {
  const dispatch = useDispatch();

  const {
    viewerCountList,
  } = useSelector((state: ReducerState) => state.viewer);

  const [reducerState, dispatchReducer] = useReducer(privateReducer, initialState);

  const isAnalyzedBook = useMemo(() => viewerCountList.length >= viewers.length,
    [viewerCountList, viewers]);

  const setCountCallback = useCallback((count: number, index: number) => {
    const spine = spines[index];

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

  return (
    <>
      {
        viewers.map((viewer, index) => (
          <ViewerCountComponent
            key={viewer}
            isAnalyzedBook={isAnalyzedBook}
            viewerWidth={viewerWidth}
            viewerHeight={viewerHeight}
            viewer={viewer}
            setCountCallback={(count) => setCountCallback(count, index)}
          />
        ))
      }
    </>

  );
};

export default ViewerCalculator;
