import React from 'react';

import styled from 'styled-components';

import ViewerSlider from './ViewerSlider';

import { subColor } from '../../styles';
import { ViewerMenuStyle } from '../../styles/viewer';

const Container = styled.div`
  ${ViewerMenuStyle}
  bottom: 0;
  border-top: 1px solid ${subColor};
`;

interface Props {
  sliderMaxValue: number;
}

const ViewerBottom: React.FunctionComponent<Props> = ({ sliderMaxValue }) => (
  <Container>
    <ViewerSlider
      maxValue={sliderMaxValue}
    />
  </Container>
);

export default ViewerBottom;
