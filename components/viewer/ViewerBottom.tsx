import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { ViewerMenu } from '../../styles/viewer';

import ViewerSlider from './ViewerSlider';

import { ReducerState } from '../../interfaces';

const Container = styled(ViewerMenu)`
  height: ${(props) => props.styleProps.height - 10}px;
  bottom: 0;
`;

interface Props {
  menuHeight: number;
}

const ViewerBottom: React.FunctionComponent<Props> = ({ menuHeight }) => {
  const {
    viewerWholePageCount,
  } = useSelector((state: ReducerState) => state.viewer);

  return (
    <>
      {
      menuHeight > 0
      && (
      <Container
        styleProps={{
          height: menuHeight,
        }}
      >
        <ViewerSlider
          maxValue={viewerWholePageCount}
        />
      </Container>
      )
    }
    </>
  );
};

export default ViewerBottom;
