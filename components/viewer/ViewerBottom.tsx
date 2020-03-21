import React from 'react';

import styled from 'styled-components';

import ViewrSlider from './ViewrSlider';

import { subColor } from '../../styles';
import { ViewrMenuStyle } from '../../styles/viewer';

const Container = styled.div`
  ${ViewrMenuStyle}
  bottom: 0;
  border-top: 1px solid ${subColor};
`;

interface Props {
  sliderMaxValue: number;
}

const ViewerBottom: React.FunctionComponent<Props> = ({ sliderMaxValue }) => (
  <Container>
    <ViewrSlider
      maxValue={sliderMaxValue}
    />
  </Container>
);

export default ViewerBottom;
