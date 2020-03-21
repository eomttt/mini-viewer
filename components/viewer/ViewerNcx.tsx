import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import styled from 'styled-components';

import { subColor } from '../../styles';

import * as actions from '../../reducers/viewer';

import { EpubNcxItem, EpubNavPoint } from '../../interfaces/books';

const Container = styled.div`
  position: relative;
`;

const ToggleButton = styled.div`
  cursor: pointer;
`;

const NavPointItems = styled.ul`
  position: absolute;
  width: 10em;
  height: 30em;
  left: 50%;
  transform: translateX(-50%);
  overflow: scroll;
  list-style-type: none;
  margin: 0;
  padding: 0;
  border: 1px solid ${subColor};
  background-color: white;
`;

const NavPointItem = styled.li`
  text-align: center;
  padding: 2px;
  border-bottom: 1px solid ${subColor};
  cursor: pointer;
  margin: 0;
  &:nth-last-child(1) {
    border-bottom: initial;
  }
`;

interface Props {
  ncxItem?: EpubNcxItem;
}

const ViewerNcx: React.FunctionComponent<Props> = ({ ncxItem }) => {
  const { navPoints } = ncxItem;
  const dispatch = useDispatch();
  const [isShowNcx, setIsShowNcx] = useState(false);

  const toggleShowNcs = useCallback(() => {
    setIsShowNcx(!isShowNcx);
  }, [isShowNcx]);

  const selectNavPoint = useCallback((point: EpubNavPoint) => {
    setIsShowNcx(false);
    dispatch(actions.setViewerSpineId(point.spine.id));
  }, [dispatch]);

  return (
    <Container>
      <ToggleButton onClick={toggleShowNcs}>
        목차
      </ToggleButton>
      {
        isShowNcx
        && (
        <NavPointItems>
          {
            navPoints.map((navPoint) => (
              <NavPointItem
                onClick={() => selectNavPoint(navPoint)}
                key={navPoint.label}
              >
                {navPoint.label}
              </NavPointItem>
            ))
          }
        </NavPointItems>
        )
      }
    </Container>
  );
};

export default ViewerNcx;
