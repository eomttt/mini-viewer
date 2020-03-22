import React, { useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import styled from 'styled-components';

import {
  ViewerArticle,
  ViewerSection,
  ViewerContents,
} from '../../styles/viewer';

import * as viewerActions from '../../reducers/viewer';

import { VIEWER_PAGE_GAP } from '../../constants/viewer';

import { EpubSpineItem } from '../../interfaces/books';
import { ViewerStyle } from '../../interfaces/viewer';

const HiddenArticle = styled(ViewerArticle)`
  overflow: scroll;
`;

const HiddenSection = styled(ViewerSection)`
  visibility: hidden;
`;

interface Props {
  viewerWidth: number;
  viewerHeight: number;
  viewerSpineIndex: number;
  viewerSpine: string;
  spine: EpubSpineItem;
  viewerStyle: ViewerStyle;
}

const ViewerCount: React.FunctionComponent<Props> = ({
  viewerWidth, viewerHeight,
  viewerSpineIndex, viewerSpine, spine,
  viewerStyle,
}) => {
  const dispatch = useDispatch();
  const hiddenViewContainerRef = useRef(null);
  const hiddenViewSectionRef = useRef(null);

  useEffect(() => {
    if (viewerWidth) {
      const { current: hiddenViewContainerCurrent } = hiddenViewContainerRef;
      const count = hiddenViewContainerCurrent.scrollWidth / (viewerWidth + VIEWER_PAGE_GAP);

      dispatch(viewerActions.setViewerColumnCount({
        count,
        index: viewerSpineIndex,
        spineId: spine.id,
      }));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [viewerWidth]);

  return (
    <HiddenArticle
      styleProps={{
        ...viewerStyle,
        width: viewerWidth,
        height: viewerHeight,
      }}
      ref={hiddenViewContainerRef}
    >
      <HiddenSection
        styleProps={{
          width: viewerWidth,
        }}
        ref={hiddenViewSectionRef}
      >
        <ViewerContents dangerouslySetInnerHTML={{ __html: viewerSpine }} />
      </HiddenSection>
    </HiddenArticle>
  );
};

export default ViewerCount;
