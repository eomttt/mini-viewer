import React from 'react';

import styled from 'styled-components';

import ViewerSlider from './ViewerSlider';

import { ViewerMenu } from '../../styles/viewer';

const Container = styled(ViewerMenu)`
  bottom: 0;
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
