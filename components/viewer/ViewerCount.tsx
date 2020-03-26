import React, { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';

import styled from 'styled-components';

import {
  ViewerArticle,
  ViewerSection,
  ViewerContents,
} from '../../styles/viewer';

import { VIEWER_PAGE_GAP } from '../../constants/viewer';

import { ReducerState } from '../../interfaces';

const HiddenArticle = styled(ViewerArticle)`
  overflow: scroll;
`;

const HiddenSection = styled(ViewerSection)`
  visibility: hidden;
`;

interface Props {
  isAnalyzedBook: boolean;
  viewerWidth: number;
  viewerHeight: number;
  viewer: string;
  setCountCallback: (count: number) => void;
}

const ViewerCount: React.FunctionComponent<Props> = ({
  isAnalyzedBook,
  viewerWidth, viewerHeight,
  viewer,
  setCountCallback,
}) => {
  const {
    fontSize, lineHeight,
  } = useSelector((state: ReducerState) => state.viewerSetting);

  const hiddenViewContainerRef = useRef(null);
  const hiddenViewSectionRef = useRef(null);

  useEffect(() => {
    if (viewerWidth || !isAnalyzedBook) {
      const { current: hiddenViewContainerCurrent } = hiddenViewContainerRef;
      const count = hiddenViewContainerCurrent.scrollWidth / (viewerWidth + VIEWER_PAGE_GAP);

      setCountCallback(count);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [viewerWidth, isAnalyzedBook]);

  return (
    <HiddenArticle
      styleProps={{
        fontSize,
        lineHeight,
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
        <ViewerContents dangerouslySetInnerHTML={{ __html: viewer }} />
      </HiddenSection>
    </HiddenArticle>
  );
};

export default ViewerCount;
