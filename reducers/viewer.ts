import { ReducerAction } from '../interfaces';
import {
  ViewerState, ViewerCount,
  ViewerLink, ViewerLinkPageOffset,
} from '../interfaces/viewer';

export const initialState: ViewerState = {
  viewerCountList: [],
  viewerSpineId: '',
  viewerSpineOffset: 0,
  viewerPageCount: 0,
  viewerWholePageCount: 0,
};

// Action types
export const INIT_VIEWER_STATE = 'viewer/INIT_VIEWER_STATE';
export const RESIZE_VIEWER_STATE = 'viewer/RESIZE_VIEWER_STATE';
export const SET_VIEWER_COUNT_LIST = 'viewer/SET_VIEWER_COUNT_LIST';

export const SET_VIEWER_SPINE_ID = 'viewer/SET_VIEWER_SPINE_ID';
export const SET_VIEWER_SPINE_OFFSET = 'viewer/SET_VIEWER_SPINE_OFFSET';

export const SET_VIEWER_PAGE_WHOLE_COUNT = 'viewer/SET_VIEWER_PAGE_WHOLE_COUNT';
export const SET_VIEWER_PAGE_COUNT = 'viewer/SET_VIEWER_PAGE_COUNT';
export const SET_COUNT_UP_VIEWER_PAGE_COUNT = 'viewer/SET_COUNT_UP_VIEWER_PAGE_COUNT';
export const SET_COUNT_DOWN_VIEWER_PAGE_COUNT = 'viewer/SET_COUNT_DOWN_VIEWER_PAGE_COUNT';

export const SET_VIEWER_LINK = 'viewer/SET_VIEWER_LINK';
export const SET_VIEWER_PAGE_OFFSET_INFO = 'viewer/SET_VIEWR_PAGE_OFFSET_INFO';

// Action creators
export const initViewerState = () => ({
  type: INIT_VIEWER_STATE,
});

export const resizeViewerState = () => ({
  type: RESIZE_VIEWER_STATE,
});

export const setViewerCountList = (countList: ViewerCount[]) => ({
  type: SET_VIEWER_COUNT_LIST,
  payload: {
    countList,
  },
});

export const setViewerSpineId = (spineId: string) => ({
  type: SET_VIEWER_SPINE_ID,
  payload: {
    spineId,
  },
});

export const setViewerSpineOffset = (spineOffset: number) => ({
  type: SET_VIEWER_SPINE_OFFSET,
  payload: {
    spineOffset,
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

export const setViewerLink = (params: ViewerLink) => ({
  type: SET_VIEWER_LINK,
  payload: {
    ...params,
  },
});

export const setViewerLinkPageOffset = (params: ViewerLinkPageOffset) => ({
  type: SET_VIEWER_PAGE_OFFSET_INFO,
  payload: {
    ...params,
  },
});

export default (state = initialState, action: ReducerAction): ViewerState => {
  const { type, payload } = action;
  switch (type) {
    case INIT_VIEWER_STATE: {
      return {
        ...initialState,
      };
    }
    case RESIZE_VIEWER_STATE: {
      return {
        ...state,
        viewerCountList: [],
        viewerWholePageCount: 0,
        viewerLink: null,
        viewerLinkPageOffset: null,
      };
    }
    case SET_VIEWER_COUNT_LIST: {
      const { countList } = payload;
      return {
        ...state,
        viewerCountList: [...countList],
      };
    }
    case SET_VIEWER_SPINE_ID: {
      const { spineId } = payload;
      return {
        ...state,
        viewerSpineId: spineId,
      };
    }
    case SET_VIEWER_SPINE_OFFSET: {
      const { spineOffset } = payload;
      return {
        ...state,
        viewerSpineOffset: spineOffset,
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
    case SET_VIEWER_LINK: {
      const { spineId, tag } = payload;
      return {
        ...state,
        viewerLink: {
          spineId,
          tag,
        },
      };
    }
    case SET_VIEWER_PAGE_OFFSET_INFO: {
      const { spineId, offset, tag } = payload;
      return {
        ...state,
        viewerLinkPageOffset: {
          spineId,
          tag,
          offset,
        },
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};
