import React, { useRef, useEffect } from 'react';

import styled from 'styled-components';

import {
  ViewerArticle,
  ViewerSection,
  ViewerContents,
} from '../../styles/viewer';

import { VIEWER_PAGE_GAP } from '../../constants/viewer';

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
  viewer: string;
  viewerStyle: ViewerStyle;
  setCountCallback: (count: number) => void;
}

const ViewerCount: React.FunctionComponent<Props> = ({
  viewerWidth, viewerHeight,
  viewer,
  viewerStyle, setCountCallback,
}) => {
  const hiddenViewContainerRef = useRef(null);
  const hiddenViewSectionRef = useRef(null);

  useEffect(() => {
    if (viewerWidth) {
      const { current: hiddenViewContainerCurrent } = hiddenViewContainerRef;
      const count = hiddenViewContainerCurrent.scrollWidth / (viewerWidth + VIEWER_PAGE_GAP);

      setCountCallback(count);
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
        <ViewerContents dangerouslySetInnerHTML={{ __html: viewer }} />
      </HiddenSection>
    </HiddenArticle>
  );
};

export default ViewerCount;
