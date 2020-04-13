import React, {
  useRef, useEffect, useCallback, useMemo, useState,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import {
  ViewerArticle,
  ViewerSection,
  ViewerContents,
} from '../../styles/viewer';

import * as viewerActions from '../../reducers/viewer';

import { ReducerStates } from '../../interfaces';
import { EpubSpineItem } from '../../interfaces/books';
import {
  ViewerState,
  ViewerSettingState,
} from '../../interfaces/viewer';

import {
  getSpineViewerCount,
  getTagPostion,
} from '../../lib/calculate';
import {
  getPageCountBySpineIndex,
  getTagElement,
} from '../../lib/util';

import {
  usePageWithWithRatio,
  useSpinePosition,
  useSpineLinkInfo,
  useScrollLeft,
} from '../../hooks';

interface ViewerPageProps {
  spineIndex: number;
  spineViewer: string;
  spine: EpubSpineItem;
  isSetAllViewerCountList: boolean;
  toggleCalculateCount: boolean;
  setCountCallback: (count: number, index: number) => void;
}

interface ViewerStyle {
  fontSize: number;
  lineHeight: number;
}

interface LinkInfo {
  href: string;
  tag: string;
}

const Article = styled(ViewerArticle)`
  overflow: hidden;
`;

const ViewerPage: React.FunctionComponent<ViewerPageProps> = ({
  spineIndex, spineViewer, spine,
  isSetAllViewerCountList,
  toggleCalculateCount,
  setCountCallback,
}) => {
  const dispatch = useDispatch();

  const {
    viewerCountList, viewerPageCount,
    viewerSpineIndex, viewerSpinePosition,
  }: ViewerState = useSelector((state: ReducerStates) => state.viewer);
  const {
    viewerWidth,
    fontSize, lineHeight, widthRatio,
    isOpenSettingMenu,
  }: ViewerSettingState = useSelector((state: ReducerStates) => state.viewerSetting);

  const viewArticleRef = useRef(null);

  const [viewerStyle, setViewerStyle] = useState<ViewerStyle>({
    fontSize,
    lineHeight,
  });
  const [selectedLink, setSelectedLink] = useState<LinkInfo>({
    href: '',
    tag: '',
  });

  const widthWithRatio = usePageWithWithRatio(viewerWidth, widthRatio);

  const selectedSpineLink = useSpineLinkInfo(viewerCountList, selectedLink);
  const nowSpinePosition = useSpinePosition(viewerCountList, viewerPageCount, viewerSpineIndex);
  const scrollLeft = useScrollLeft(viewerSpinePosition, widthWithRatio);

  const isShowNowSpineIndex = useMemo(() => viewerSpineIndex === spineIndex,
    [viewerSpineIndex, spineIndex]);

  const setPageCount = useCallback((index: number, position = 0): void => {
    const pageCount = getPageCountBySpineIndex(viewerCountList, index);
    dispatch(viewerActions.setViewerPageCount(pageCount + position));
  }, [viewerCountList]);

  const getLinkPosition = useCallback((index: number, tag: string): number => {
    const tagElement = getTagElement(index, tag);
    return tagElement ? getTagPostion(tagElement.offsetLeft, index, widthWithRatio) : 0;
  }, [widthWithRatio]);

  const getLinkInfo = useCallback((e: React.MouseEvent<HTMLDivElement, MouseEvent>): LinkInfo | null => {
    let node = e.target as HTMLElement;
    while (node && node.localName !== 'a') {
      node = node.parentNode as HTMLElement;
    }
    if (node) {
      e.preventDefault();
      const [href, tag] = node.getAttribute('href').split('#');
      return {
        href,
        tag,
      };
    }
    return null;
  }, []);

  const setLinkInfo = useCallback((linkInfo: LinkInfo): void => {
    const { href, tag } = linkInfo;
    setSelectedLink({
      href: href || spine.href,
      tag,
    });
  }, [spine]);

  const clickPage = useCallback((e: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
    const linkInfo = getLinkInfo(e);
    if (linkInfo) {
      setLinkInfo(linkInfo);
    }
  }, [setLinkInfo]);

  useEffect(() => {
    const { current: viewArticleRefCurrent } = viewArticleRef;
    if (viewArticleRefCurrent) {
      const count = getSpineViewerCount(viewArticleRefCurrent.scrollWidth, widthWithRatio);
      setCountCallback(count, spineIndex);
    }
  }, [toggleCalculateCount]);

  useEffect(() => {
    const { index, tag } = selectedSpineLink;
    if (index > -1) {
      setPageCount(
        index,
        getLinkPosition(index, tag),
      );
    }
  }, [selectedSpineLink]);

  useEffect(() => {
    if (!isOpenSettingMenu || isShowNowSpineIndex) {
      setViewerStyle({
        fontSize,
        lineHeight,
      });
    }
  }, [isOpenSettingMenu, fontSize, lineHeight]);

  useEffect(() => {
    if (isShowNowSpineIndex && nowSpinePosition > -1) {
      dispatch(viewerActions.setViewerSpinePosition(nowSpinePosition));
    }
  }, [nowSpinePosition]);

  useEffect(() => {
    if (isShowNowSpineIndex && scrollLeft > -1) {
      const { current: viewArticleRefCurrent } = viewArticleRef;
      viewArticleRefCurrent.scrollLeft = scrollLeft;
    }
  }, [isSetAllViewerCountList, scrollLeft]);

  return (
    <Article
      data-spineindex={spineIndex}
      ref={viewArticleRef}
      onClickCapture={clickPage}
      fontSize={viewerStyle.fontSize}
      lineHeight={viewerStyle.lineHeight}
    >
      <ViewerSection
        width={widthWithRatio}
      >
        <ViewerContents
          dangerouslySetInnerHTML={{ __html: spineViewer }}
        />
      </ViewerSection>
    </Article>
  );
};

export default ViewerPage;
