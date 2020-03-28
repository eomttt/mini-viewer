import React, {
  useRef, useEffect, useCallback, useMemo,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styled from 'styled-components';

import {
  ViewerArticle,
  ViewerSection,
  ViewerContents,
} from '../../styles/viewer';

import * as viewerActions from '../../reducers/viewer';

import { VIEWER_PAGE_GAP } from '../../constants/viewer';

import { ReducerStates } from '../../interfaces';
import { EpubSpineItem } from '../../interfaces/books';
import { ViewerState, ViewerSettingState } from '../../interfaces/viewer';

import { usePageWithWithRatio, usePageOffset } from '../../hooks';

const Article = styled(ViewerArticle)`
  width: 100%;
  height: 100%;
  overflow: hidden;
  text-align: initial;
`;

interface Props {
  isAnalyzedBook: boolean;
  spineIndex: number;
  spineViewer: string;
  spine: EpubSpineItem;
  setCountCallback: (count: number, index: number) => void;
  clickLink: (spineHref: string, hashId: string) => void;
}

const ViewerPage: React.FunctionComponent<Props> = ({
  isAnalyzedBook,
  spineIndex, spineViewer, spine,
  setCountCallback,
  clickLink,
}) => {
  const dispatch = useDispatch();

  const {
    viewerWidth, viewerHeight,
    viewerLink, viewerPageCount, viewerCountList,
  }: ViewerState = useSelector((state: ReducerStates) => state.viewer);
  const {
    fontSize, lineHeight, widthRatio,
  }: ViewerSettingState = useSelector((state: ReducerStates) => state.viewerSetting);

  const viewArticleRef = useRef(null);

  const isSelectedSpineByLink = useMemo(() => viewerLink && viewerLink.spineId === spine.id,
    [viewerLink, spine]);

  const pageOffset = usePageOffset(viewerCountList, viewerPageCount, spineIndex);
  const widthWithRatio = usePageWithWithRatio(viewerWidth, widthRatio);

  /**
   * When click a tag in spine(page), Calculate new page count
   */

  const setPageCountByTag = useCallback((tagElement, tagElementPageCount) => {
    const tagElementScroll = tagElement.offsetLeft;
    const pageScroll = Math.floor(
      tagElementScroll - (spineIndex * widthWithRatio),
    );
    const pageCount = Math.floor(pageScroll / widthWithRatio);
    dispatch(viewerActions.setViewerPageCount(tagElementPageCount + pageCount));
  }, [dispatch, spineIndex, widthWithRatio]);

  useEffect(() => {
    if (widthWithRatio > 0 && isSelectedSpineByLink) {
      const { current: viewArticleRefCurrent } = viewArticleRef;
      const tagElement = viewArticleRefCurrent.querySelector(`#${viewerLink.tag}`);
      if (tagElement) {
        setPageCountByTag(tagElement, viewerPageCount);
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, widthWithRatio, viewerLink, isSelectedSpineByLink, setPageCountByTag]);

  /**
   * Calculate: Column count
   */
  useEffect(() => {
    const { current: viewArticleRefCurrent } = viewArticleRef;
    if (viewArticleRefCurrent) {
      setTimeout(() => {
        if (widthWithRatio > 0 && !isAnalyzedBook) {
          const count = viewArticleRefCurrent.scrollWidth / (widthWithRatio + VIEWER_PAGE_GAP);
          setCountCallback(count, spineIndex);
        }
      });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [viewArticleRef, widthWithRatio, isAnalyzedBook, spineIndex]);

  /**
   * Viewer: Set offset scroll value
   */
  useEffect(() => {
    if (pageOffset >= 0) {
      const { current: viewArticleRefCurrent } = viewArticleRef;
      viewArticleRefCurrent.scrollLeft = pageOffset * (widthWithRatio + VIEWER_PAGE_GAP);
    }
  }, [pageOffset, widthWithRatio]);

  const clickPage = useCallback((e) => {
    let node = e.target;
    while (node && node.localName !== 'a') {
      node = node.parentNode;
    }
    if (node) {
      e.preventDefault();
      const [spineHref, hashId] = node.getAttribute('href').split('#');
      clickLink(spineHref || spine.href, hashId);
      return false; // stop handling the click
    }
    return true; // handle other clicks
  }, [clickLink, spine]);

  return (
    <Article
      ref={viewArticleRef}
      styleProps={{
        width: widthWithRatio,
        height: viewerHeight,
        fontSize,
        lineHeight,
      }}
      onClickCapture={clickPage}
    >
      <ViewerSection
        styleProps={{
          fontSize,
          lineHeight,
          width: widthWithRatio,
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
