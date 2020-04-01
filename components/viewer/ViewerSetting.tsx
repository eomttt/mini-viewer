import React, {
  useCallback, useState, useEffect, useMemo,
} from 'react';
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
  FONT_SIZE_RANGE, WIDTH_RATIO_RANGE, LINE_HEIGHT_RANGE, BACKGROUND_COLORS,
} from '../../constants/viewer';

import { ReducerStates } from '../../interfaces';
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
  right: 0;
  overflow: scroll;
  list-style-type: none;
  margin: 0;
  padding: 0;
  border: 1px solid ${subColor};
  background-color: ${defaultColor};
`;

const ViewerSetting: React.FunctionComponent = () => {
  const {
    fontSize, widthRatio, lineHeight, backgroundColor,
  } = useSelector((state: ReducerStates) => state.viewerSetting);
  const dispatch = useDispatch();

  const [isShow, setIsShow] = useState(false);
  const [beforeValue, setBeforeValue] = useState({
    fontSize,
    widthRatio,
    lineHeight,
  });
  const [settingItems, setSettingItems] = useState<SettingItem[]>([]);

  const isSettingChange = useMemo(() => {
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
        action: (value: number) => {
          dispatch(settingActions.setViewerSettingFontSize(value));
        },
      }, {
        label: SETTING_ITEM_LABEL.WIDTH_RATIO,
        key: SETTING_ITEM_KEY.WIDTH_RATIO,
        value: widthRatio,
        valueUnit: SETTING_ITEM_UNIT.WIDTH,
        minValue: WIDTH_RATIO_RANGE.MIN,
        maxValue: WIDTH_RATIO_RANGE.MAX,
        action: (value: number) => {
          dispatch(settingActions.setViewerSettingWidthRatio(value));
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
  }, [fontSize, widthRatio, lineHeight, backgroundColor]);

  useEffect(() => {
    if (!isShow && isSettingChange) {
      dispatch(settingActions.toggleSettingChanged());
      setBeforeValue({
        fontSize,
        lineHeight,
        widthRatio,
      });
    }
  }, [isShow, isSettingChange, fontSize, lineHeight, widthRatio]);

  const toggleShowNcs = useCallback(() => {
    setIsShow(!isShow);
  }, [isShow]);

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
        isShow
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
