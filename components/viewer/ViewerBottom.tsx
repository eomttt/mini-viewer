import React from 'react';

import styled from 'styled-components';

import ViewerSlider from './ViewerSlider';

import { ViewerMenu } from '../../styles/viewer';

const Container = styled(ViewerMenu)`
  height: ${(props) => props.styleProps.height - 10}px;
  bottom: 0;
`;

interface Props {
  menuHeight: number;
  sliderMaxValue: number;
}

const ViewerBottom: React.FunctionComponent<Props> = ({ menuHeight, sliderMaxValue }) => (
  <Container
    styleProps={{
      height: menuHeight,
    }}
  >
    <ViewerSlider
      maxValue={sliderMaxValue}
    />
  </Container>
);

export default ViewerBottom;
