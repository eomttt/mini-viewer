import { ReducerAction } from '../interfaces';
import { ViewerState, ViewerCount } from '../interfaces/viewer';

export const initialState: ViewerState = {
  viewerCountList: [],
  viewerPageCount: 0,
};

// Action types
export const INIT_VIEWER_STATE = 'viewer/INIT_VIEWER_STATE';
export const SET_VIEWER_COLUMN_COUNT_LIST = 'viewer/SET_VIEWER_COLUMN_COUNT_LIST';

export const SET_VIEWER_PAGE_COUNT = 'viewer/SET_VIEWER_PAGE_COUNT';
export const SET_COUNT_UP_VIEWER_PAGE_COUNT = 'viewer/SET_COUNT_UP_VIEWER_PAGE_COUNT';
export const SET_COUNT_DOWN_VIEWER_PAGE_COUNT = 'viewer/SET_COUNT_DOWN_VIEWER_PAGE_COUNT';

// Action creators
export const initViewerState = () => ({
  type: INIT_VIEWER_STATE,
});

export const setViewerCountList = (countList: ViewerCount[]) => ({
  type: SET_VIEWER_COLUMN_COUNT_LIST,
  payload: {
    countList,
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
    case INIT_VIEWER_STATE: {
      return {
        ...state,
        viewerCountList: [],
        viewerPageCount: 0,
      };
    }
    case SET_VIEWER_COLUMN_COUNT_LIST: {
      const { countList } = payload;
      return {
        ...state,
        viewerCountList: [...countList],
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
