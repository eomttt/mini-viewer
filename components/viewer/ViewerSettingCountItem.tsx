import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import styled from 'styled-components';

import { subColor } from '../../styles';
import {
  ViewerSettingItemStyle,
  ViewerSettingValueStyle,
  ViewerSettingLabelStyle,
} from '../../styles/viewer';

const Container = styled.div`
  ${ViewerSettingItemStyle}
`;

const Label = styled.div`
  ${ViewerSettingLabelStyle}
`;

const Value = styled.div`
  ${ViewerSettingValueStyle}
`;

const Controller = styled.div`
  display: flex;
  width: 30%;
  margin: auto 0 auto auto;
  border: 1px solid ${subColor};
  border-radius: 1em;
  padding-left: .3em;
  padding-right: .3em;
`;

const MinusButton = styled.div`
  width: 50%;
  cursor: pointer;
  border-right: 1px solid ${subColor}
`;

const PlusButton = styled.div`
  width: 50%;
  cursor: pointer;
`;

interface Props {
  label: string;
  value: string | number;
  minValue: number;
  maxValue: number;
  action: (param: string | number) => void;
}

const ViewerSettingCountItem: React.FunctionComponent<Props> = ({
  label, value, minValue, maxValue, action,
}) => {
  const dispatch = useDispatch();

  const countUpValue = useCallback(() => {
    if (Number(value) + 1 <= maxValue) {
      dispatch(action(Number(value) + 1));
    }
  }, [dispatch, action, value, maxValue]);

  const countDownValue = useCallback(() => {
    if (Number(value) - 1 >= minValue) {
      dispatch(action(Number(value) - 1));
    }
  }, [dispatch, action, value, minValue]);

  return (
    <Container>
      <Label>
        {label}
      </Label>
      <Value>
        {value}
      </Value>
      <Controller>
        <MinusButton onClick={countDownValue}>
          -
        </MinusButton>
        <PlusButton onClick={countUpValue}>
          +
        </PlusButton>
      </Controller>
    </Container>
  );
};

export default ViewerSettingCountItem;
