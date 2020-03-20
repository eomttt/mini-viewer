import { ReducerAction } from '../interfaces';
import { ViewerState } from '../interfaces/viewer';

export const initialState: ViewerState = {
  viewerCountList: [],
  selectedSpineId: '',
};

// Action types
export const SET_VIEWER_COUNT = 'viewer/SET_VIEWER_COUNT';
export const SET_SPINE_ID = 'viewer/SET_SPINE_ID';

// Action creators
export const setViewerCount = ({ index, count }: {index: number; count: number}) => ({
  type: SET_VIEWER_COUNT,
  payload: {
    index,
    count,
  },
});

export const setSpineId = (spineId: string) => ({
  type: SET_SPINE_ID,
  payload: {
    spineId,
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
    case SET_SPINE_ID: {
      const { spineId } = payload;
      return {
        ...state,
        selectedSpineId: spineId,
      };
    }
    default: {
      return state;
    }
  }
};
