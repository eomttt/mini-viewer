import { ReducerAction } from '../interfaces';
import { ViewerState } from '../interfaces/viewer';

export const initialState: ViewerState = {
  viewerCountList: [],
};

// Action types
export const SET_VIEWER_COUNT = 'viewer/SET_VIEWER_COUNT';

// Action creators
export const setViewerCount = ({ index, count }: {index: number; count: number}) => ({
  type: SET_VIEWER_COUNT,
  payload: {
    index,
    count,
  },
});

export default (state = initialState, action: ReducerAction): ViewerState => {
  const { type, payload } = action;
  switch (type) {
    case SET_VIEWER_COUNT: {
      const { index, count } = payload;
      return {
        ...state,
        viewerCountList: [...state.viewerCountList, { index, count }],
      };
    }
    default: {
      return state;
    }
  }
};
