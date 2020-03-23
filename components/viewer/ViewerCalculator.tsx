import React, { useEffect, useCallback, useReducer } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as viewerActions from '../../reducers/viewer';

import ViewerCount from './ViewerCount';

import { ReducerState } from '../../interfaces';
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

const privateReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRIVATE_ADD_COUNT_ACTION: {
      const data = action.payload;
      return {
        ...state,
        countItems: [...state.countItems, data],
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
  const [reducerState, dispatchReducer] = useReducer(privateReducer, initialState);

  const {
    fontSize, widthRatio, lineHeight,
  } = useSelector((state: ReducerState) => state.viewerSetting);

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
    if (countItems.length >= spines.length) {
      dispatch(viewerActions.setViewerCountList(countItems));
    }
  }, [dispatch, reducerState, spines]);

  return (
    <>
      {
        viewers.map((viewer, index) => (
          <ViewerCount
            key={viewer}
            viewerWidth={viewerWidth}
            viewerHeight={viewerHeight}
            viewer={viewer}
            viewerStyle={{
              fontSize,
              widthRatio,
              lineHeight,
            }}
            setCountCallback={(count) => setCountCallback(count, index)}
          />
        ))
      }
    </>

  );
};

export default ViewerCalculator;
