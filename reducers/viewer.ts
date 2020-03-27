import { ReducerAction } from '../interfaces';
import { ViewerState, ViewerCount } from '../interfaces/viewer';
import { BookInfo } from '../interfaces/books';

export const initialState: ViewerState = {
  viewerWidth: 0,
  viewerHeight: 0,
  viewerCountList: [],
  viewerPageCount: 0,
  viewerWholePageCount: 0,
};

// Action types
export const INIT_VIEWER_STATE = 'viewer/INIT_VIEWER_STATE';
export const SET_VIEWER_COLUMN_COUNT_LIST = 'viewer/SET_VIEWER_COLUMN_COUNT_LIST';

export const SET_VIEWER_WIDTH = 'viewer/SET_VIEWER_WIDTH';
export const SET_VIEWER_HEIGHT = 'viewer/SET_VIEWER_HEIGHT';

export const SET_VIEWER_PAGE_WHOLE_COUNT = 'viewer/SET_VIEWER_PAGE_WHOLE_COUNT';
export const SET_VIEWER_PAGE_COUNT = 'viewer/SET_VIEWER_PAGE_COUNT';
export const SET_COUNT_UP_VIEWER_PAGE_COUNT = 'viewer/SET_COUNT_UP_VIEWER_PAGE_COUNT';
export const SET_COUNT_DOWN_VIEWER_PAGE_COUNT = 'viewer/SET_COUNT_DOWN_VIEWER_PAGE_COUNT';

export const SET_CURRENT_BOOK_INFO = 'viewer/SET_CURRENT_BOOK_INFO';

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

export const setViewerWidth = (width: number) => ({
  type: SET_VIEWER_WIDTH,
  payload: {
    width,
  },
});

export const setViewerHeight = (height: number) => ({
  type: SET_VIEWER_HEIGHT,
  payload: {
    height,
  },
});

export const setViewerPageWholeCount = (wholeCount: number) => ({
  type: SET_VIEWER_PAGE_WHOLE_COUNT,
  payload: {
    wholeCount,
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

export const setCurrentBookInfo = (bookInfo: BookInfo) => ({
  type: SET_CURRENT_BOOK_INFO,
  payload: {
    bookInfo,
  },
});

export default (state = initialState, action: ReducerAction): ViewerState => {
  const { type, payload } = action;
  switch (type) {
    case INIT_VIEWER_STATE: {
      return {
        ...state,
        viewerCountList: [],
        viewerPageCount: 0,
        viewerWholePageCount: 0,
      };
    }
    case SET_VIEWER_COLUMN_COUNT_LIST: {
      const { countList } = payload;
      return {
        ...state,
        viewerCountList: [...countList],
      };
    }
    case SET_VIEWER_WIDTH: {
      const { width } = payload;
      return {
        ...state,
        viewerWidth: width,
      };
    }
    case SET_VIEWER_HEIGHT: {
      const { height } = payload;
      return {
        ...state,
        viewerHeight: height,
      };
    }
    case SET_VIEWER_PAGE_COUNT: {
      const { pageCount } = payload;
      return {
        ...state,
        viewerPageCount: pageCount,
      };
    }
    case SET_VIEWER_PAGE_WHOLE_COUNT: {
      const { wholeCount } = payload;
      return {
        ...state,
        viewerWholePageCount: wholeCount,
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
    case SET_CURRENT_BOOK_INFO: {
      const { bookInfo } = payload;
      return {
        ...state,
        currentBookInfo: bookInfo,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};
