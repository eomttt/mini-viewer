import { ReducerAction } from '../interfaces';
import { ViewerSettingState } from '../interfaces/viewer';

import { defaultColor } from '../styles';
import { FONT_SIZE_RANGE, WIDTH_RATIO_RANGE, LINE_HEIGHT_RANGE } from '../constants/viewer';

export const initialState: ViewerSettingState = {
  fontSize: FONT_SIZE_RANGE.MIN,
  widthRatio: WIDTH_RATIO_RANGE.MAX,
  lineHeight: LINE_HEIGHT_RANGE.MIN,
  backgroundColor: defaultColor,
  settingChangeToggle: false,
};

// Action types
export const SET_FONT_SIZE = 'viewerSetting/SET_FONT_SIZE';
export const SET_WIDTH_RATIO = 'viewerSetting/SET_WIDTH_RATIO';
export const SET_LINE_HEIGHT = 'viewerSetting/SET_LINE_HEIGHT';
export const SET_BACKGROUND_COLOR = 'viewerSetting/SET_VIEWER_SETTING_BACKGROUND_COLOR';

export const TOGGLE_SETTING_CHANGED = 'viewerSetting/TOGGLE_SETTING_CHANGED';

// Action creators
export const setViewerSettingFontSize = (fontSize: number) => ({
  type: SET_FONT_SIZE,
  payload: {
    fontSize,
  },
});

export const setViewerSettingWidthRatio = (widthRatio: number) => ({
  type: SET_WIDTH_RATIO,
  payload: {
    widthRatio,
  },
});

export const setViewerSettingLineHeight = (lineHeight: number) => ({
  type: SET_LINE_HEIGHT,
  payload: {
    lineHeight,
  },
});

export const setViewerSettingBackgroundColor = (color: string) => ({
  type: SET_BACKGROUND_COLOR,
  payload: {
    backgroundColor: color,
  },
});

export const toggleSettingChanged = () => ({
  type: TOGGLE_SETTING_CHANGED,
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
    case SET_WIDTH_RATIO: {
      const { widthRatio } = payload;
      return {
        ...state,
        widthRatio,
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
    case TOGGLE_SETTING_CHANGED: {
      return {
        ...state,
        settingChangeToggle: !state.settingChangeToggle,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};
