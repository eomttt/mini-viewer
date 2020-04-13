import React, { useCallback, useState } from 'react';

import debounce from 'lodash.debounce';

import * as Styled from '../../../styles/viewer/header';

import { ViewerSettingCountItemProps } from '../../../interfaces/viewer/header';

const ViewerSettingCountItem: React.FunctionComponent<ViewerSettingCountItemProps> = ({
  label, value, valueUnit,
  minValue, maxValue, action,
}) => {
  const [showValue, setShowValue] = useState(value);

  const isIntegerNumber = useCallback((number) => number % 1 === 0, []);
  const debounceAction = useCallback(debounce(action, 400), [action]);

  const countUpValue = useCallback((): void => {
    const expectedValue = Number(showValue) + valueUnit;

    if (expectedValue <= maxValue) {
      const newValue = isIntegerNumber(expectedValue) ? expectedValue : expectedValue.toFixed(1);
      setShowValue(+newValue);
      debounceAction(+newValue);
    } else {
      alert('변경 할 수 있는 최대값 입니다.');
    }
  }, [debounceAction, showValue, maxValue, valueUnit, isIntegerNumber]);

  const countDownValue = useCallback((): void => {
    const expectedValue = Number(showValue) - valueUnit;

    if (expectedValue >= minValue) {
      const newValue = isIntegerNumber(expectedValue) ? expectedValue : expectedValue.toFixed(1);

      setShowValue(+newValue);
      debounceAction(+newValue);
    } else {
      alert('변경 할 수 있는 최소값 입니다.');
    }
  }, [debounceAction, showValue, minValue, valueUnit, isIntegerNumber]);

  return (
    <Styled.SettingHeaderItem>
      <Styled.SettingHeaderLabel>
        {label}
      </Styled.SettingHeaderLabel>
      <Styled.SettingHeaderValue>
        {showValue}
      </Styled.SettingHeaderValue>
      <Styled.SettingCountItem>
        <Styled.SettingCountItemMinusButton onClick={countDownValue}>
          -
        </Styled.SettingCountItemMinusButton>
        <Styled.SettingCountItemPlusButton onClick={countUpValue}>
          +
        </Styled.SettingCountItemPlusButton>
      </Styled.SettingCountItem>
    </Styled.SettingHeaderItem>
  );
};

export default ViewerSettingCountItem;
