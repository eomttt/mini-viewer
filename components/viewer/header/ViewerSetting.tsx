import React, {
  useCallback, useState, useEffect, useMemo,
} from 'react';
import { useSelector, useDispatch } from 'react-redux';

import * as Styled from '../../../styles/viewer/header';

import ViewerSettingCountItem from './ViewerSettingCountItem';
import ViewerSettingColorItem from './ViewerSettingColorItem';

import * as viewerActions from '../../../reducers/viewer';
import * as settingActions from '../../../reducers/viewerSetting';

import {
  SETTING_ITEM_KEY,
  SETTING_ITEM_LABEL,
  SETTING_ITEM_UNIT,
  FONT_SIZE_RANGE, WIDTH_RATIO_RANGE, LINE_HEIGHT_RANGE, BACKGROUND_COLORS,
} from '../../../constants/viewer';

import { ReducerStates } from '../../../interfaces';
import { ViewerSettingItem } from '../../../interfaces/viewer';

const ViewerSetting: React.FunctionComponent = () => {
  const {
    fontSize, widthRatio, lineHeight, backgroundColor,
    isOpenSettingMenu,
  } = useSelector((state: ReducerStates) => state.viewerSetting);
  const dispatch = useDispatch();

  const [beforeValue, setBeforeValue] = useState({
    fontSize,
    widthRatio,
    lineHeight,
  });
  const [settingItems, setSettingItems] = useState<ViewerSettingItem[]>([]);

  const isSettingChange = useMemo((): boolean => {
    if (beforeValue.fontSize !== fontSize) {
      return true;
    }
    if (beforeValue.lineHeight !== lineHeight) {
      return true;
    }
    if (beforeValue.widthRatio !== widthRatio) {
      return true;
    }
    return false;
  }, [beforeValue, fontSize, lineHeight, widthRatio]);

  useEffect(() => {
    setSettingItems([
      {
        label: SETTING_ITEM_LABEL.FONT_SIZE,
        key: SETTING_ITEM_KEY.FONT_SIZE,
        value: fontSize,
        valueUnit: SETTING_ITEM_UNIT.FONT_SIZE,
        minValue: FONT_SIZE_RANGE.MIN,
        maxValue: FONT_SIZE_RANGE.MAX,
        action: (value: number): void => {
          dispatch(settingActions.setViewerSettingFontSize(value));
        },
      }, {
        label: SETTING_ITEM_LABEL.WIDTH_RATIO,
        key: SETTING_ITEM_KEY.WIDTH_RATIO,
        value: widthRatio,
        valueUnit: SETTING_ITEM_UNIT.WIDTH,
        minValue: WIDTH_RATIO_RANGE.MIN,
        maxValue: WIDTH_RATIO_RANGE.MAX,
        action: (value: number): void => {
          dispatch(settingActions.setViewerSettingWidthRatio(value));
        },
      }, {
        label: SETTING_ITEM_LABEL.LINE_HEIGHT,
        key: SETTING_ITEM_KEY.LINE_HEIGHT,
        value: lineHeight,
        valueUnit: SETTING_ITEM_UNIT.LINE_HEIGHT,
        minValue: LINE_HEIGHT_RANGE.MIN,
        maxValue: LINE_HEIGHT_RANGE.MAX,
        action: (value: number): void => {
          dispatch(settingActions.setViewerSettingLineHeight(value));
        },
      }, {
        label: SETTING_ITEM_LABEL.BACKGROUND_COLOR,
        key: SETTING_ITEM_KEY.BACKGROUND_COLOR,
        value: backgroundColor,
        colors: BACKGROUND_COLORS,
        action: (value: string): void => {
          dispatch(settingActions.setViewerSettingBackgroundColor(value));
        },
      },
    ]);
  }, [fontSize, widthRatio, lineHeight, backgroundColor]);

  useEffect(() => {
    if (!isOpenSettingMenu && isSettingChange) {
      setBeforeValue({
        fontSize,
        lineHeight,
        widthRatio,
      });
      dispatch(viewerActions.resizeViewerState());
    }
  }, [isOpenSettingMenu, isSettingChange]);

  const toggleShowNcs = useCallback((): void => {
    if (isOpenSettingMenu) {
      dispatch(settingActions.closeSettingMenu());
    } else {
      dispatch(settingActions.openSettingMenu());
    }
  }, [isOpenSettingMenu]);

  const renderSettingItem = useCallback((settingItem: ViewerSettingItem) => {
    const {
      key, label, value, valueUnit, action, minValue, maxValue, colors,
    } = settingItem;

    if (colors) {
      return (
        <ViewerSettingColorItem
          key={key}
          label={label}
          value={value}
          colors={colors}
          action={action}
        />
      );
    }
    return (
      <ViewerSettingCountItem
        key={key}
        label={label}
        value={value}
        valueUnit={valueUnit}
        minValue={minValue}
        maxValue={maxValue}
        action={action}
      />
    );
  }, []);

  return (
    <Styled.SettingContainer>
      <Styled.SettingToggleButton onClick={toggleShowNcs}>
        설정
      </Styled.SettingToggleButton>
      {
        isOpenSettingMenu
        && (
        <Styled.SettingItems>
          {
            settingItems.map((settingItem) => renderSettingItem(settingItem))
          }
        </Styled.SettingItems>
        )
      }
    </Styled.SettingContainer>
  );
};

export default ViewerSetting;
