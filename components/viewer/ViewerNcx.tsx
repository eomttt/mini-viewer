import React, { useState, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styled from 'styled-components';

import { subColor, defaultColor } from '../../styles';

import * as viewerActions from '../../reducers/viewer';

import { ReducerStates } from '../../interfaces';
import { EpubNcxItem, EpubNavPoint } from '../../interfaces/books';

import { getPageCountBySpineId } from '../../lib/util';

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
  background-color: ${defaultColor};
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

  const { viewerCountList } = useSelector((state: ReducerStates) => state.viewer);

  const setPageCountBySpineId = useCallback((selectedSpineId) => {
    const pageCountBySpineId = getPageCountBySpineId(viewerCountList, selectedSpineId);
    if (pageCountBySpineId > -1) {
      dispatch(viewerActions.setViewerPageCount(pageCountBySpineId));
    }
  }, [viewerCountList]);

  const toggleShowNcs = useCallback(() => {
    setIsShowNcx(!isShowNcx);
  }, [isShowNcx]);

  const selectNavPoint = useCallback((point: EpubNavPoint) => {
    setIsShowNcx(false);
    setPageCountBySpineId(point.spine.id);
  }, [setPageCountBySpineId]);

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
