import React, { useCallback, useState } from 'react';

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
  valueUnit: number;
  minValue: number;
  maxValue: number;
  action: (param: string | number) => void;
}

const ViewerSettingCountItem: React.FunctionComponent<Props> = ({
  label, value, valueUnit,
  minValue, maxValue, action,
}) => {
  const [showValue, setShowValue] = useState(value);

  const isIntegerNumber = useCallback((number) => number % 1 === 0, []);

  const countUpValue = useCallback(() => {
    const expectedValue = Number(showValue) + valueUnit;

    if (expectedValue <= maxValue) {
      const newValue = isIntegerNumber(expectedValue) ? expectedValue : expectedValue.toFixed(1);

      setShowValue(newValue);
      action(newValue);
    } else {
      alert('변경 할 수 있는 최대값 입니다.');
    }
  }, [action, showValue, maxValue, valueUnit, isIntegerNumber]);

  const countDownValue = useCallback(() => {
    const expectedValue = Number(showValue) - valueUnit;

    if (expectedValue >= minValue) {
      const newValue = isIntegerNumber(expectedValue) ? expectedValue : expectedValue.toFixed(1);

      setShowValue(newValue);
      action(newValue);
    } else {
      alert('변경 할 수 있는 최소값 입니다.');
    }
  }, [action, showValue, minValue, valueUnit, isIntegerNumber]);

  return (
    <Container>
      <Label>
        {label}
      </Label>
      <Value>
        {showValue}
      </Value>
      <Controller>
        <MinusButton onClick={countDownValue}>
          -
        </MinusButton>
        <PlusButton onClick={countUpValue}
        >
          +
        </PlusButton>
      </Controller>
    </Container>
  );
};

export default ViewerSettingCountItem;
