import React, { useCallback, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import styled from 'styled-components';

import ViewerSettingCountItem from './ViewerSettingCountItem';
import ViewerSettingColorItem from './ViewerSettingColorItem';

import * as settingActions from '../../reducers/viewerSetting';

import { subColor, defaultColor } from '../../styles';

import {
  SETTING_ITEM_KEY,
  SETTING_ITEM_LABEL,
  SETTING_ITEM_UNIT,
  FONT_SIZE_RANGE, PADDING_RANGE, LINE_HEIGHT_RANGE, BACKGROUND_COLORS,
} from '../../constants/viewer';

import { ReducerState } from '../../interfaces';
import { SettingItem } from '../../interfaces/viewer';

const Container = styled.div`
  position: relative;
`;

const ToggleButton = styled.div`
  cursor: pointer;
`;

const SettingItems = styled.ul`
  position: absolute;
  width: 15em;
  left: 50%;
  transform: translateX(-50%);
  overflow: scroll;
  list-style-type: none;
  margin: 0;
  padding: 0;
  border: 1px solid ${subColor};
  background-color: ${defaultColor};
`;

const ViewerSetting: React.FunctionComponent = () => {
  const {
    fontSize, padding, lineHeight, backgroundColor,
  } = useSelector((state: ReducerState) => state.viewerSetting);
  const dispatch = useDispatch();

  const [isShowSetting, setIsShowSetting] = useState(false);
  const [settingItems, setSettingItems] = useState<SettingItem[]>([]);

  useEffect(() => {
    setSettingItems([
      {
        label: SETTING_ITEM_LABEL.FONT_SIZE,
        key: SETTING_ITEM_KEY.FONT_SIZE,
        value: fontSize,
        valueUnit: SETTING_ITEM_UNIT.FONT_SIZE,
        minValue: FONT_SIZE_RANGE.MIN,
        maxValue: FONT_SIZE_RANGE.MAX,
        action: (value: number) => {
          dispatch(settingActions.setViewerSettingFontSize(value));
        },
      }, {
        label: SETTING_ITEM_LABEL.PADDING,
        key: SETTING_ITEM_KEY.PADDING,
        value: padding,
        valueUnit: SETTING_ITEM_UNIT.PADDING,
        minValue: PADDING_RANGE.MIN,
        maxValue: PADDING_RANGE.MAX,
        action: (value: number) => {
          dispatch(settingActions.setViewerSettingPadding(value));
        },
      }, {
        label: SETTING_ITEM_LABEL.LINE_HEIGHT,
        key: SETTING_ITEM_KEY.LINE_HEIGHT,
        value: lineHeight,
        valueUnit: SETTING_ITEM_UNIT.LINE_HEIGHT,
        minValue: LINE_HEIGHT_RANGE.MIN,
        maxValue: LINE_HEIGHT_RANGE.MAX,
        action: (value: number) => {
          dispatch(settingActions.setViewerSettingLineHeight(value));
        },
      }, {
        label: SETTING_ITEM_LABEL.BACKGROUND_COLOR,
        key: SETTING_ITEM_KEY.BACKGROUND_COLOR,
        value: backgroundColor,
        colors: BACKGROUND_COLORS,
        action: (value: string) => {
          dispatch(settingActions.setViewerSettingBackgroundColor(value));
        },
      },
    ]);
  }, [dispatch, fontSize, padding, lineHeight, backgroundColor]);

  const toggleShowNcs = useCallback(() => {
    setIsShowSetting(!isShowSetting);
  }, [isShowSetting]);

  const renderSettingItem = useCallback((settingItem: SettingItem) => {
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
    <Container>
      <ToggleButton onClick={toggleShowNcs}>
        설정
      </ToggleButton>
      {
        isShowSetting
        && (
        <SettingItems>
          {
            settingItems.map((settingItem) => renderSettingItem(settingItem))
          }
        </SettingItems>
        )
      }
    </Container>
  );
};

export default ViewerSetting;
