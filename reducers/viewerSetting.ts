import { ViewerSettingReducerAction } from '../interfaces/index';
import { ViewerSettingState } from '../interfaces/viewer';

import { defaultColor } from '../styles';
import { FONT_SIZE_RANGE, WIDTH_RATIO_RANGE, LINE_HEIGHT_RANGE } from '../constants/viewer';

export const initialState: ViewerSettingState = {
  viewerWidth: 0,
  viewerHeight: 0,
  fontSize: FONT_SIZE_RANGE.MIN,
  widthRatio: WIDTH_RATIO_RANGE.MAX,
  lineHeight: LINE_HEIGHT_RANGE.MIN,
  backgroundColor: defaultColor,
  isOpenSettingMenu: false,
  settingChangeToggle: false,
};

// Action types
export const SET_VIEWER_WIDTH = 'viewerSetting/SET_VIEWER_WIDTH';
export const SET_VIEWER_HEIGHT = 'viewerSetting/SET_VIEWER_HEIGHT';

export const SET_FONT_SIZE = 'viewerSetting/SET_FONT_SIZE';
export const SET_WIDTH_RATIO = 'viewerSetting/SET_WIDTH_RATIO';
export const SET_LINE_HEIGHT = 'viewerSetting/SET_LINE_HEIGHT';
export const SET_BACKGROUND_COLOR = 'viewerSetting/SET_VIEWER_SETTING_BACKGROUND_COLOR';

export const OPEN_SETTING_MENU = 'viewerSetting/OPEN_SETTING_MENU';
export const CLOSE_SETTING_MEUN = 'viewerSetting/CLOSE_SETTING_MENU';
export const TOGGLE_SETTING_CHANGED = 'viewerSetting/TOGGLE_SETTING_CHANGED';

// Action creators
export const setViewerWidth = (
  width: number,
): ViewerSettingReducerAction => ({
  type: SET_VIEWER_WIDTH,
  payload: {
    width,
  },
});

export const setViewerHeight = (
  height: number,
): ViewerSettingReducerAction => ({
  type: SET_VIEWER_HEIGHT,
  payload: {
    height,
  },
});

export const setViewerSettingFontSize = (
  fontSize: number,
): ViewerSettingReducerAction => ({
  type: SET_FONT_SIZE,
  payload: {
    fontSize,
  },
});

export const setViewerSettingWidthRatio = (
  widthRatio: number,
): ViewerSettingReducerAction => ({
  type: SET_WIDTH_RATIO,
  payload: {
    widthRatio,
  },
});

export const setViewerSettingLineHeight = (
  lineHeight: number,
): ViewerSettingReducerAction => ({
  type: SET_LINE_HEIGHT,
  payload: {
    lineHeight,
  },
});

export const setViewerSettingBackgroundColor = (
  color: string,
): ViewerSettingReducerAction => ({
  type: SET_BACKGROUND_COLOR,
  payload: {
    backgroundColor: color,
  },
});

export const openSettingMenu = (): ViewerSettingReducerAction => ({
  type: OPEN_SETTING_MENU,
});

export const closeSettingMenu = (): ViewerSettingReducerAction => ({
  type: CLOSE_SETTING_MEUN,
});

export const toggleSettingChanged = (): ViewerSettingReducerAction => ({
  type: TOGGLE_SETTING_CHANGED,
});


export default (
  state = initialState,
  action: ViewerSettingReducerAction,
): ViewerSettingState => {
  const { type, payload } = action;
  switch (type) {
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
    case OPEN_SETTING_MENU: {
      return {
        ...state,
        isOpenSettingMenu: true,
      };
    }
    case CLOSE_SETTING_MEUN: {
      return {
        ...state,
        isOpenSettingMenu: false,
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
