import React, { useRef, useEffect, useCallback } from 'react';

import styled from 'styled-components';

import {
  ViewerArticle,
  ViewerSection,
  ViewerContents,
} from '../../styles/viewer';

import { VIEWER_PAGE_GAP } from '../../constants/viewer';

import { EpubSpineItem } from '../../interfaces/books';

const Article = styled(ViewerArticle)`
  overflow: scroll;
  text-align: initial;
`;

interface Props {
  isAnalyzedBook: boolean;
  viewerWidth: number;
  pageOffset: number;
  spineViewer: string;
  spine: EpubSpineItem;
  fontSize: number;
  lineHeight: number;
  setCountCallback: (count: number) => void;
  clickLink: (spineHref: string, hashId: string) => void;
}

const ViewerPage: React.FunctionComponent<Props> = ({
  isAnalyzedBook,
  viewerWidth,
  pageOffset, spineViewer,
  spine,
  fontSize, lineHeight,
  setCountCallback,
  clickLink,
}) => {
  const viewArticleRef = useRef(null);

  useEffect(() => {
    const { current: viewArticleRefCurrent } = viewArticleRef;
    if (viewerWidth > 0) {
      const selectedIdEleInPage = viewArticleRefCurrent.querySelector('#fnref-319f4450fc8db72330a2ed9f1f218f4e53f716eb');

      if (selectedIdEleInPage) {
        console.log('selectedIdEleInPage.offsetLeft', selectedIdEleInPage.offsetLeft);
        // const pageScroll = Math.floor(selectedIdEleInPage.offsetLeft - (viewerIndex * viewerWidth));
        // const pageCount = Math.floor(pageScroll / viewerWidth);
        // console.log('pageCount', viewerIndex, pageCount);
      }
    }
  }, [viewerWidth]);

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
    viewArticleRefCurrent.scrollLeft = pageOffset * (viewerWidth + VIEWER_PAGE_GAP);
  }, [pageOffset, viewerWidth]);

  const clickPage = useCallback((e) => {
    e.preventDefault();

    const anchorHref = e.target.getAttribute('href');
    if (anchorHref) {
      const [spineHref, hashId] = anchorHref.split('#');

      if (spineHref) {
        clickLink(spineHref, hashId);
      } else {
        clickLink(spine.href, hashId);
      }
    }
  }, [clickLink, spine]);

  return (
    <Article
      ref={viewArticleRef}
      styleProps={{
        fontSize,
        lineHeight,
      }}
      onClick={clickPage}
    >
      <ViewerSection
        styleProps={{
          fontSize,
          lineHeight,
          width: viewerWidth,
        }}
      >
        <ViewerContents
          dangerouslySetInnerHTML={{ __html: spineViewer }}
        />
      </ViewerSection>
    </Article>
  );
};

export default ViewerPage;
