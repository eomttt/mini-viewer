import React from 'react';
import { useSelector } from 'react-redux';

import ViewerSlider from './ViewerSlider';

import * as Styled from '../../../styles/viewer/bottom';

import { ReducerStates } from '../../../interfaces';
import { ViewerState } from '../../../interfaces/viewer';
import { ViewerBottomProps } from '../../../interfaces/viewer/bottom';

const ViewerBottom: React.FunctionComponent<ViewerBottomProps> = ({ menuHeight }) => {
  const {
    viewerWholePageCount,
  }: ViewerState = useSelector((state: ReducerStates) => state.viewer);

  return (
    <>
      {
      menuHeight > 0
      && (
      <Styled.Container
        height={menuHeight}
      >
        <ViewerSlider
          maxValue={viewerWholePageCount}
        />
      </Styled.Container>
      )
    }
    </>
  );
};

export default ViewerBottom;
