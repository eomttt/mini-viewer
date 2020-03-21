import { ReducerAction } from '../interfaces';
import { ViewerSettingState } from '../interfaces/viewer';

import { defaultColor } from '../styles';

export const initialState: ViewerSettingState = {
  fontSize: 1,
  padding: 0,
  lineHeight: 1,
  backgroundColor: defaultColor,
};

// Action types
export const SET_FONT_SIZE = 'viewerSetting/SET_FONT_SIZE';
export const SET_PADDING = 'viewerSetting/SET_PADDING';
export const SET_LINE_HEIGHT = 'viewerSetting/SET_LINE_HEIGHT';
export const SET_BACKGROUND_COLOR = 'viewerSetting/SET_VIEWER_SETTING_BACKGROUND_COLOR';

// Action creators
export const setViewerSettingFontSize = (fontSize: number) => ({
  type: SET_FONT_SIZE,
  payload: {
    fontSize,
  },
});

export const setViewerSettingPadding = (padding: number) => ({
  type: SET_PADDING,
  payload: {
    padding,
  },
});

export const setViewerSettingLineHeight = (lineHeight: number) => ({
  type: SET_LINE_HEIGHT,
  payload: {
    lineHeight,
  },
});

export const setViewerSettingBackgroundColor = (color: number) => ({
  type: SET_BACKGROUND_COLOR,
  payload: {
    backgroundColor: color,
  },
});

export default (state = initialState, action: ReducerAction): ViewerSettingState => {
  const { type, payload } = action;
  switch (type) {
    case SET_FONT_SIZE: {
      const { fontSize } = payload;
      return {
        ...state,
        fontSize,
      };
    }
    case SET_PADDING: {
      const { padding } = payload;
      return {
        ...state,
        padding,
      };
    }
    case SET_LINE_HEIGHT: {
      const { lineHeight } = payload;
      return {
        ...state,
        lineHeight,
      };
    }
    case SET_BACKGROUND_COLOR: {
      const { backgroundColor } = payload;
      return {
        ...state,
        backgroundColor,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};
