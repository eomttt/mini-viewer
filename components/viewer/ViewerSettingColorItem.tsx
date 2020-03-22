import React, { useCallback } from 'react';

import styled from 'styled-components';

import { subColor } from '../../styles';
import {
  ViewerSettingItem,
  ViewerSettingLabel,
} from '../../styles/viewer';

const Controller = styled.div`
  display: flex;
  margin: auto 0 auto auto;
`;

const Content = styled.div`
  width: 1em;
  height: 1em;
  border: 1px solid ${(props) => (props.styleProps.isSelected ? 'black' : `${subColor}`)};  
  border-radius: 50%;
  background-color: ${(props) => props.styleProps.color} !important;
  cursor: pointer;
  margin: 0 .2em;
`;

interface Props {
  label: string;
  value: number | string;
  colors: string[];
  action: (param: string | number) => void;
}

const ViewerSettingColorItem: React.FunctionComponent<Props> = ({
  label, value, colors, action,
}) => {
  const selectColor = useCallback((selectedColor: string) => {
    action(selectedColor);
  }, [action]);

  return (
    <ViewerSettingItem>
      <ViewerSettingLabel>
        {label}
      </ViewerSettingLabel>
      <Controller>
        {
        colors.map((color) => (
          <Content
            key={color}
            styleProps={{
              color,
              isSelected: color === value,
            }}
            onClick={() => selectColor(color)}
          />
        ))
      }
      </Controller>
    </ViewerSettingItem>
  );
};

export default ViewerSettingColorItem;
