import React, { useCallback } from 'react';

import * as Styled from '../../styles/viewer/header';

import { ViewerSettingColorItemProps } from '../../interfaces/viewer/header';

const ViewerSettingColorItem: React.FunctionComponent<ViewerSettingColorItemProps> = ({
  label, value, colors, action,
}) => {
  const selectColor = useCallback((selectedColor: string): void => {
    action(selectedColor);
  }, [action]);

  return (
    <Styled.SettingHeaderItem>
      <Styled.SettingHeaderLabel>
        {label}
      </Styled.SettingHeaderLabel>
      <Styled.SettingColorItems>
        {
        colors.map((color) => (
          <Styled.SettingColorItem
            key={color}
            onClick={(): void => selectColor(color)}
            color={color}
            isSelected={color === value}
          />
        ))
      }
      </Styled.SettingColorItems>
    </Styled.SettingHeaderItem>
  );
};

export default ViewerSettingColorItem;
