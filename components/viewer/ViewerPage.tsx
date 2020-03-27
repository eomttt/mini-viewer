import React, { useRef, useEffect } from 'react';

import styled from 'styled-components';

import {
  ViewerArticle,
  ViewerSection,
  ViewerContents,
} from '../../styles/viewer';

import { VIEWER_PAGE_GAP } from '../../constants/viewer';

const Article = styled(ViewerArticle)`
  overflow: scroll;
  text-align: initial;
`;

interface Props {
  isAnalyzedBook: boolean;
  viewerWidth: number;
  viewerOffset: number;
  viewer: string;
  viewerIndex: number;
  fontSize: number;
  lineHeight: number;
  setCountCallback: (count: number) => void;
}

const ViewerPage: React.FunctionComponent<Props> = ({
  isAnalyzedBook,
  viewerWidth,
  viewerOffset, viewer, viewerIndex,
  fontSize, lineHeight,
  setCountCallback,
}) => {
  const viewArticleRef = useRef(null);

  /**
   * viewer padding 도 offsetLeft 에 포함된다.
   * viewerWidth 를 통해서 몇번째 페이지에 있는지 계산 할 수 있을듯
   * viewerIndex 도 알아야할듯
   */
  useEffect(() => {
    const { current: viewArticleRefCurrent } = viewArticleRef;
    if (viewArticleRefCurrent.querySelector('#fnref-319f4450fc8db72330a2ed9f1f218f4e53f716eb')) {
      console.log('Offset left', document.getElementById('fnref-319f4450fc8db72330a2ed9f1f218f4e53f716eb').offsetLeft);
      console.log('viewerIndex', viewerIndex);
      console.log('viewer width', viewerWidth);


      // const tagScroll = document.getElementById('fnref-319f4450fc8db72330a2ed9f1f218f4e53f716eb').offsetLeft - (viewerIndex * viewerWidth);
      // const pageCount = Math.floor(tagScroll / viewerWidth);
      // console.log("viewerIndex", pageCount);
    }
  }, [viewerIndex, viewerWidth]);

  /**
   * Calculate: Column count
   */
  useEffect(() => {
    const { current: viewArticleRefCurrent } = viewArticleRef;
    if (viewArticleRefCurrent) {
      setTimeout(() => {
        if (viewerWidth > 0 && !isAnalyzedBook) {
          const count = viewArticleRefCurrent.scrollWidth / (viewerWidth + VIEWER_PAGE_GAP);
          setCountCallback(count);
        }
      });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [viewArticleRef, viewerWidth, isAnalyzedBook]);

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
