import React, { useRef, useEffect } from 'react';

import styled from 'styled-components';

import {
  ViewerArticle,
  ViewerSection,
  ViewerContents,
} from '../../styles/viewer';

import { VIEWER_PAGE_GAP } from '../../constants/viewer';

const Article = styled(ViewerArticle)`
  overflow: hidden;
  text-align: initial;
`;

interface Props {
  isAnalyzedBook: boolean;
  viewerWidth: number;
  viewerOffset: number;
  viewer: string;
  fontSize: number;
  lineHeight: number;
  setCountCallback: (count: number) => void;
}

const ViewerPage: React.FunctionComponent<Props> = ({
  isAnalyzedBook,
  viewerWidth,
  viewerOffset, viewer,
  fontSize, lineHeight,
  setCountCallback,
}) => {
  const viewArticleRef = useRef(null);

  /**
   * Calculate: Column count
   */
  useEffect(() => {
    setTimeout(() => {
      if (viewerWidth > 0 && !isAnalyzedBook) {
        const { current: viewArticleRefCurrent } = viewArticleRef;
        const count = viewArticleRefCurrent.scrollWidth / (viewerWidth + VIEWER_PAGE_GAP);
        setCountCallback(count);
      }
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [viewerWidth, isAnalyzedBook]);

  /**
   * Viewer: Set offset scroll value
   */
  useEffect(() => {
    const { current: viewArticleRefCurrent } = viewArticleRef;
    viewArticleRefCurrent.scrollLeft = viewerOffset * (viewerWidth + VIEWER_PAGE_GAP);
  }, [viewerOffset, viewerWidth]);

  return (
    <Article
      ref={viewArticleRef}
      styleProps={{
        fontSize,
        lineHeight,
      }}
    >
      <ViewerSection
        styleProps={{
          fontSize,
          lineHeight,
          width: viewerWidth,
        }}
      >
        <ViewerContents
          dangerouslySetInnerHTML={{ __html: viewer }}
        />
      </ViewerSection>
    </Article>
  );
};

export default ViewerPage;
