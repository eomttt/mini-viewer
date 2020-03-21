import React, { useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import {
  HiddenViewArticle, HiddenViewSection,
  Contents,
} from '../../styles/viewer';

import * as actions from '../../reducers/viewer';
import { VIEWER_PAGE_GAP } from '../../constants/viewer';

import { EpubSpineItem } from '../../interfaces/books';

interface Props {
  viewerWidth: number;
  viewerHeight: number;
  viewerSpineIndex: number;
  viewerSpine: string;
  spine: EpubSpineItem;
}

const ViewerCount: React.FunctionComponent<Props> = ({
  viewerWidth, viewerHeight,
  viewerSpineIndex, viewerSpine, spine,
}) => {
  const dispatch = useDispatch();
  const hiddenViewContainerRef = useRef(null);
  const hiddenViewSectionRef = useRef(null);

  useEffect(() => {
    if (viewerWidth) {
      const { current: hiddenViewContainerCurrent } = hiddenViewContainerRef;
      const count = hiddenViewContainerCurrent.scrollWidth / (viewerWidth + VIEWER_PAGE_GAP);

      dispatch(actions.setViewerColumnCount({
        count,
        index: viewerSpineIndex,
        spineId: spine.id,
      }));
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [viewerWidth]);

  return (
    <HiddenViewArticle
      styleProps={{
        width: viewerWidth,
        height: viewerHeight,
      }}
      ref={hiddenViewContainerRef}
    >
      <HiddenViewSection
        styleProps={{
          width: viewerWidth,
        }}
        ref={hiddenViewSectionRef}
      >
        <Contents dangerouslySetInnerHTML={{ __html: viewerSpine }} />
      </HiddenViewSection>
    </HiddenViewArticle>

  );
};

export default ViewerCount;
