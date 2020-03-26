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

const Article = styled(ViewerArticle)`
  overflow: hidden;
  text-align: initial;
`;

interface Props {
  isAnalyzedBook: boolean;
  viewerWidth: number;
  viewerOffset: number;
  viewer: string;
  setCountCallback: (count: number) => void;
}

const ViewerPage: React.FunctionComponent<Props> = ({
  isAnalyzedBook,
  viewerWidth,
  viewerOffset, viewer,
  setCountCallback,
}) => {
  const {
    fontSize, lineHeight,
  } = useSelector((state: ReducerState) => state.viewerSetting);

  const viewArticleRef = useRef(null);

  useEffect(() => {
    if (viewerWidth || !isAnalyzedBook) {
      const { current: viewArticleRefCurrent } = viewArticleRef;
      const count = viewArticleRefCurrent.scrollWidth / (viewerWidth + VIEWER_PAGE_GAP);
      console.log("viewArticleRefCurrent.scrollWidth", viewArticleRefCurrent.scrollWidth);
      console.log('viewerWidth + VIEWER_PAGE_GAP', viewerWidth + VIEWER_PAGE_GAP)
      setCountCallback(count);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [viewerWidth, isAnalyzedBook]);

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
        <ViewerContents dangerouslySetInnerHTML={{ __html: viewer }} />
      </ViewerSection>
    </Article>
  );
};

export default ViewerPage;
