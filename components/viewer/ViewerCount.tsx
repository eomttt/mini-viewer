import React, { useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import styled from 'styled-components';

import {
  ViewArticleStyle, ViewSectionStyle, ViewerContentsStyle,
} from '../../styles/viewer';

import * as viewerActions from '../../reducers/viewer';

import { VIEWER_PAGE_GAP } from '../../constants/viewer';

import { EpubSpineItem } from '../../interfaces/books';
import { ViewerStyle } from '../../interfaces/viewer';

const HiddenViewArticle = styled.article`
  ${ViewArticleStyle}
  width: ${(props) => props.styleProps.width}px;
  height: ${(props) => props.styleProps.height}px;
  overflow: scroll;
  font-size: ${(props) => props.styleProps.fontSize}em;
  line-height: ${(props) => props.styleProps.lineHeight}em;
`;

const HiddenViewSection = styled.section`
  ${ViewSectionStyle}
  column-width: ${(props) => props.styleProps.width}px;
  visibility: hidden;
`;

const Contents = styled.div`
  ${ViewerContentsStyle}
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
    <HiddenViewArticle
      styleProps={{
        ...viewerStyle,
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
