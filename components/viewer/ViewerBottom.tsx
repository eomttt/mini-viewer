import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { ViewerMenu } from '../../styles/viewer';

import ViewerSlider from './ViewerSlider';

import { ReducerStates } from '../../interfaces';

interface ViewerBottomStyleProps {
  height: number;
}

interface ViewerBottomProps {
  menuHeight: number;
}

const Container = styled(ViewerMenu)`
  height: ${(props: ViewerBottomStyleProps): number => props.height - 10}px;
  bottom: 0;
`;

const ViewerBottom: React.FunctionComponent<ViewerBottomProps> = ({ menuHeight }) => {
  const {
    viewerWholePageCount,
  } = useSelector((state: ReducerStates) => state.viewer);

  return (
    <>
      {
      menuHeight > 0
      && (
      <Container
        height={menuHeight}
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
