import { ReducerAction } from '../interfaces';
import { ViewerState } from '../interfaces/viewer';

export const initialState: ViewerState = {
  viewerCountList: [],
  viewerPageCount: 0,
};

// Action types
export const SET_VIEWER_COLUMN_COUNT = 'viewer/SET_VIEWER_COLUMN_COUNT';

export const SET_VIEWER_PAGE_COUNT = 'viewer/SET_VIEWER_PAGE_COUNT';
export const SET_COUNT_UP_VIEWER_PAGE_COUNT = 'viewer/SET_COUNT_UP_VIEWER_PAGE_COUNT';
export const SET_COUNT_DOWN_VIEWER_PAGE_COUNT = 'viewer/SET_COUNT_DOWN_VIEWER_PAGE_COUNT';

// Action creators
export const setViewerColumnCount = (
  { index, count, spineId }: {index: number; count: number; spineId: string},
) => ({
  type: SET_VIEWER_COLUMN_COUNT,
  payload: {
    index,
    count,
    spineId,
  },
});

export const setViewerPageCount = (pageCount: number) => ({
  type: SET_VIEWER_PAGE_COUNT,
  payload: {
    pageCount,
  },
});

export const setCountUpViewerPageCount = () => ({
  type: SET_COUNT_UP_VIEWER_PAGE_COUNT,
});

export const setCountDownViewerPageCount = () => ({
  type: SET_COUNT_DOWN_VIEWER_PAGE_COUNT,
});

export default (state = initialState, action: ReducerAction): ViewerState => {
  const { type, payload } = action;
  switch (type) {
    case SET_VIEWER_COLUMN_COUNT: {
      const { index, count, spineId } = payload;
      return {
        ...state,
        viewerCountList: [...state.viewerCountList, { index, count, spineId }],
      };
    }
    case SET_VIEWER_PAGE_COUNT: {
      const { pageCount } = payload;
      return {
        ...state,
        viewerPageCount: pageCount,
      };
    }
    case SET_COUNT_UP_VIEWER_PAGE_COUNT: {
      return {
        ...state,
        viewerPageCount: state.viewerPageCount + 1,
      };
    }
    case SET_COUNT_DOWN_VIEWER_PAGE_COUNT: {
      return {
        ...state,
        viewerPageCount: state.viewerPageCount - 1,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};
