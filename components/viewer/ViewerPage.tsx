import React, { useRef, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styled from 'styled-components';

import {
  ViewerArticle,
  ViewerSection,
  ViewerContents,
} from '../../styles/viewer';

import * as viewerActions from '../../reducers/viewer';

import { VIEWER_PAGE_GAP } from '../../constants/viewer';

import { EpubSpineItem } from '../../interfaces/books';
import { ReducerStates } from '../../interfaces';
import { ViewerState } from '../../interfaces/viewer';

const Article = styled(ViewerArticle)`
  overflow: hidden;
  text-align: initial;
`;

interface Props {
  isAnalyzedBook: boolean;
  viewerWidth: number;
  pageOffset: number;
  spineIndex: number;
  spineViewer: string;
  spine: EpubSpineItem;
  fontSize: number;
  lineHeight: number;
  setCountCallback: (count: number, index: number) => void;
  clickLink: (spineHref: string, hashId: string) => void;
}

const ViewerPage: React.FunctionComponent<Props> = ({
  isAnalyzedBook,
  viewerWidth,
  pageOffset,
  spineIndex, spineViewer, spine,
  fontSize, lineHeight,
  setCountCallback,
  clickLink,
}) => {
  const dispatch = useDispatch();

  const {
    viewerLink, viewerPageCount,
  }: ViewerState = useSelector((state: ReducerStates) => state.viewer);

  const viewArticleRef = useRef(null);

  useEffect(() => {
    if (viewerWidth > 0 && viewerLink) {
      const { spineId, tag } = viewerLink;
      if (spineId === spine.id) {
        const { current: viewArticleRefCurrent } = viewArticleRef;
        const selectedIdEleInPage = viewArticleRefCurrent.querySelector(`#${tag}`);
        if (selectedIdEleInPage) {
          const pageScroll = Math.floor(
            selectedIdEleInPage.offsetLeft - (spineIndex * viewerWidth),
          );
          const pageCount = Math.floor(pageScroll / viewerWidth);
          dispatch(viewerActions.setViewerPageCount(viewerPageCount + pageCount));
        }
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, viewerWidth, spineIndex, spine, viewerLink]);

  /**
   * Calculate: Column count
   */
  useEffect(() => {
    const { current: viewArticleRefCurrent } = viewArticleRef;
    if (viewArticleRefCurrent) {
      setTimeout(() => {
        if (viewerWidth > 0 && !isAnalyzedBook) {
          const count = viewArticleRefCurrent.scrollWidth / (viewerWidth + VIEWER_PAGE_GAP);
          setCountCallback(count, spineIndex);
        }
      });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [viewArticleRef, viewerWidth, isAnalyzedBook, spineIndex]);

  /**
   * Viewer: Set offset scroll value
   */
  useEffect(() => {
    const { current: viewArticleRefCurrent } = viewArticleRef;
    viewArticleRefCurrent.scrollLeft = pageOffset * (viewerWidth + VIEWER_PAGE_GAP);
  }, [pageOffset, viewerWidth]);

  const clickPage = useCallback((e) => {
    let node = e.target;
    while (node && node.localName !== 'a') {
      node = node.parentNode;
    }
    if (node) {
      e.preventDefault();
      const [spineHref, hashId] = node.href.split('#');
      clickLink(spineHref || spine.href, hashId);
      return false; // stop handling the click
    }
    return true; // handle other clicks
  }, [clickLink, spine]);

  return (
    <Article
      ref={viewArticleRef}
      styleProps={{
        fontSize,
        lineHeight,
      }}
      onClickCapture={clickPage}
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
