import { ReducerAction } from '../interfaces';
import {
  ViewerState, ViewerCount,
  ViewerLink, ViewerLinkPagePosition,
} from '../interfaces/viewer';

export const initialState: ViewerState = {
  viewerCountList: [],
  viewerSpineIndex: 0,
  viewerSpinePosition: 0,
  viewerPageCount: 0,
  viewerWholePageCount: 0,
};

// Action types
export const INIT_VIEWER_STATE = 'viewer/INIT_VIEWER_STATE';
export const RESIZE_VIEWER_STATE = 'viewer/RESIZE_VIEWER_STATE';
export const SET_VIEWER_COUNT_LIST = 'viewer/SET_VIEWER_COUNT_LIST';

export const SET_VIEWER_SPINE_INDEX = 'viewer/SET_VIEWER_SPINE_INDEX';
export const SET_VIEWER_SPINE_POSITION = 'viewer/SET_VIEWER_SPINE_POSITION';

export const SET_VIEWER_PAGE_WHOLE_COUNT = 'viewer/SET_VIEWER_PAGE_WHOLE_COUNT';
export const SET_VIEWER_PAGE_COUNT = 'viewer/SET_VIEWER_PAGE_COUNT';
export const SET_COUNT_UP_VIEWER_PAGE_COUNT = 'viewer/SET_COUNT_UP_VIEWER_PAGE_COUNT';
export const SET_COUNT_DOWN_VIEWER_PAGE_COUNT = 'viewer/SET_COUNT_DOWN_VIEWER_PAGE_COUNT';

export const SET_VIEWER_LINK = 'viewer/SET_VIEWER_LINK';
export const SET_VIEWER_LINK_PAGE_POSITION_INFO = 'viewer/SET_VIEWER_LINK_PAGE_POSITION_INFO';

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

export const setViewerSpineIndex = (spineIndex: number) => ({
  type: SET_VIEWER_SPINE_INDEX,
  payload: {
    spineIndex,
  },
});

export const setViewerSpinePosition = (spinePosition: number) => ({
  type: SET_VIEWER_SPINE_POSITION,
  payload: {
    spinePosition,
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

export const setViewerLinkPagePosition = (params: ViewerLinkPagePosition) => ({
  type: SET_VIEWER_LINK_PAGE_POSITION_INFO,
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
        viewerLinkPosition: null,
      };
    }
    case SET_VIEWER_COUNT_LIST: {
      const { countList } = payload;
      return {
        ...state,
        viewerCountList: [...countList],
      };
    }
    case SET_VIEWER_SPINE_INDEX: {
      const { spineIndex } = payload;
      return {
        ...state,
        viewerSpineIndex: spineIndex,
      };
    }
    case SET_VIEWER_SPINE_POSITION: {
      const { spinePosition } = payload;
      return {
        ...state,
        viewerSpinePosition: spinePosition,
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
      const { spineIndex, tag } = payload;
      return {
        ...state,
        viewerLink: {
          spineIndex,
          tag,
        },
      };
    }
    case SET_VIEWER_LINK_PAGE_POSITION_INFO: {
      const { spineIndex, position, tag } = payload;
      return {
        ...state,
        viewerLinkPosition: {
          spineIndex,
          tag,
          position,
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
