import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as Styled from '../../styles/viewer/header';

import * as viewerActions from '../../reducers/viewer';

import { ReducerStates } from '../../interfaces';
import { ViewerNcxProps } from '../../interfaces/viewer/header';
import { EpubNavPoint } from '../../interfaces/books';
import { ViewerSettingState, ViewerState } from '../../interfaces/viewer';

import { getSpineIndexById, getPageCountBySpineIndex } from '../../lib/util';

const ViewerNcx: React.FunctionComponent<ViewerNcxProps> = ({ ncxItem }) => {
  const dispatch = useDispatch();
  const [isShowNcx, setIsShowNcx] = useState<boolean>(false);
  const {
    isOpenSettingMenu,
  }: ViewerSettingState = useSelector((state: ReducerStates) => state.viewerSetting);
  const {
    viewerCountList,
  }: ViewerState = useSelector((state: ReducerStates) => state.viewer);

  const setPageCountBySpineId = useCallback((selectedSpineId: string): void => {
    const spineIndex = getSpineIndexById(viewerCountList, selectedSpineId);
    if (spineIndex > -1) {
      const pageCount = getPageCountBySpineIndex(viewerCountList, spineIndex);
      dispatch(viewerActions.setViewerPageCount(pageCount));
    }
  }, [viewerCountList]);

  const toggleShowNcs = useCallback((): void => {
    if (!isOpenSettingMenu) {
      setIsShowNcx(!isShowNcx);
    }
  }, [isOpenSettingMenu, isShowNcx]);

  const selectNavPoint = useCallback((point: EpubNavPoint) => {
    if (!isOpenSettingMenu) {
      setIsShowNcx(false);
      setPageCountBySpineId(point.spine.id);
    }
  }, [isOpenSettingMenu, setPageCountBySpineId]);

  return (
    <Styled.NcxContainer>
      <Styled.NcxToggleButton onClick={toggleShowNcs}>
        목차
      </Styled.NcxToggleButton>
      {
        isShowNcx
        && (
        <Styled.NcxNavPointItems>
          {
            ncxItem.navPoints.map((navPoint) => (
              <Styled.NcxNavPointItem
                onClick={() => selectNavPoint(navPoint)}
                key={navPoint.label}
              >
                {navPoint.label}
              </Styled.NcxNavPointItem>
            ))
          }
        </Styled.NcxNavPointItems>
        )
      }
    </Styled.NcxContainer>
  );
};

export default ViewerNcx;
