import React, { useCallback, useState, useMemo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as Styled from '../../../styles/viewer/bottom';

import * as viewerActions from '../../../reducers/viewer';

import { ReducerStates } from '../../../interfaces';
import {
  ViewerSettingState,
  ViewerState,
} from '../../../interfaces/viewer';
import { ViewerSliderProps } from '../../../interfaces/viewer/bottom';


const ViewerSlider: React.FunctionComponent<ViewerSliderProps> = ({ maxValue }) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState(0);

  const {
    isOpenSettingMenu,
  }: ViewerSettingState = useSelector((state: ReducerStates) => state.viewerSetting);
  const { viewerPageCount }: ViewerState = useSelector((state: ReducerStates) => state.viewer);

  const hasMaxValue = useMemo(() => !!maxValue, [maxValue]);

  useEffect(() => {
    setValue(viewerPageCount);
  }, [viewerPageCount]);

  const onChangeSlider = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isOpenSettingMenu) {
      dispatch(viewerActions.setViewerPageCount(Number(e.target.value)));
    }
  }, [isOpenSettingMenu]);

  return (
    <Styled.SliderContainer>
      {
        hasMaxValue
        && (
        <>
          <Styled.SliderMarker>
            {`${value}/${maxValue}`}
          </Styled.SliderMarker>
          <Styled.SliderInput type="range" min="0" max={maxValue} value={value} onChange={onChangeSlider} />
        </>
        )
      }
    </Styled.SliderContainer>
  );
};

export default ViewerSlider;
