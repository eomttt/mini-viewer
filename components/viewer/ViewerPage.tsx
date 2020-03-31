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
  overflow: hidden;
`;

interface Props {
  isSetCountList: boolean;
  spineIndex: number;
  spineViewer: string;
  spine: EpubSpineItem;
  setCountCallback: (count: number, index: number) => void;
  clickLink: (spineHref: string, hashId: string) => void;
}

const ViewerPage: React.FunctionComponent<Props> = ({
  isSetCountList,
  spineIndex, spineViewer, spine,
  setCountCallback,
  clickLink,
}) => {
  const dispatch = useDispatch();

  const {
    viewerLink, viewerPageCount, viewerCountList,
    viewerSpineId,
  }: ViewerState = useSelector((state: ReducerStates) => state.viewer);
  const {
    viewerWidth, viewerHeight,
    fontSize, lineHeight, widthRatio,
  }: ViewerSettingState = useSelector((state: ReducerStates) => state.viewerSetting);

  const viewArticleRef = useRef(null);

  const isSelectedSpineByLink = useMemo(() => viewerLink && viewerLink.spineId === spine.id,
    [viewerLink, spine]);
  const isShowSpineViewer = useMemo(() => viewerSpineId === spine.id, [viewerSpineId, spine]);

  const pageOffset = usePageOffset(viewerCountList, viewerPageCount, spineIndex);
  const widthWithRatio = usePageWithWithRatio(viewerWidth, widthRatio);

  /**
   * When click a link in spine(page), Calculate new page offset
   */
  useEffect(() => {
    if (widthWithRatio > 0 && isSelectedSpineByLink) {
      const { current: viewArticleRefCurrent } = viewArticleRef;
      const tagElement = viewArticleRefCurrent.querySelector(`#${viewerLink.tag}`);
      if (tagElement) {
        const tagElementScroll = tagElement.offsetLeft;
        const pageMargin = (window.innerWidth - widthWithRatio) / 2;
        const pageScroll = Math.floor(
          tagElementScroll - (spineIndex * widthWithRatio) - pageMargin,
        );
        const pageCount = Math.floor(pageScroll / widthWithRatio);
        dispatch(viewerActions.setViewerLinkPageOffset({
          spineId: viewerLink.spineId,
          tag: viewerLink.tag,
          offset: pageCount,
        }));
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, viewerLink, spineIndex, isSelectedSpineByLink]);

  /**
   * Calculate: Column count
   */
  useEffect(() => {
    const { current: viewArticleRefCurrent } = viewArticleRef;
    if (viewArticleRefCurrent) {
      setTimeout(() => {
        if (widthWithRatio > 0 && !isSetCountList) {
          const count = viewArticleRefCurrent.scrollWidth / (widthWithRatio + VIEWER_PAGE_GAP);
          setCountCallback(Math.floor(count), spineIndex);
        }
      });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [viewArticleRef, widthWithRatio, isSetCountList]);

  useEffect(() => {
    // Before setting set
  }, [fontSize, lineHeight, widthRatio]);

  /**
   * Viewer: Set offset scroll value
   */
  useEffect(() => {
    if (pageOffset >= 0 && isShowSpineViewer) {
      const { current: viewArticleRefCurrent } = viewArticleRef;
      viewArticleRefCurrent.scrollLeft = pageOffset * (widthWithRatio + VIEWER_PAGE_GAP);
      dispatch(viewerActions.setViewerSpineOffset(pageOffset));
    }
  }, [dispatch, widthWithRatio, pageOffset, isShowSpineViewer]);

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
