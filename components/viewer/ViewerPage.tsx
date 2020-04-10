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
import { getPageCountBySpineIndex } from '../../lib/util';

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
  toggleCalculateCount: boolean;
  setCountCallback: (count: number, index: number) => void;
}

const Article = styled(ViewerArticle)`
  overflow: hidden;
`;

const ViewerPage: React.FunctionComponent<ViewerPageProps> = ({
  spineIndex, spineViewer, spine,
  toggleCalculateCount,
  setCountCallback,
}) => {
  const dispatch = useDispatch();

  const {
    viewerPageCount, viewerCountList, viewerSpineIndex,
  }: ViewerState = useSelector((state: ReducerStates) => state.viewer);
  const {
    viewerWidth,
    fontSize, lineHeight, widthRatio,
    settingChangeToggle,
  }: ViewerSettingState = useSelector((state: ReducerStates) => state.viewerSetting);

  const viewArticleRef = useRef(null);

  const [viewerStyle, setViewerStyle] = useState({
    fontSize,
    lineHeight,
  });
  const [selectedLink, setSelectedLink] = useState({
    href: '',
    tag: '',
  });

  const widthWithRatio = usePageWithWithRatio(viewerWidth, widthRatio);
  const selectedSpineLink = useSpineLinkInfo(viewerCountList, selectedLink);
  const nowSpinePosition = useSpinePosition(viewerCountList, viewerPageCount, spineIndex);
  const scrollLeft = useScrollLeft(nowSpinePosition, widthWithRatio);

  const isShowNowSpineIndex = useMemo(() => viewerSpineIndex === spineIndex,
    [viewerSpineIndex, spineIndex]);

  const setPageCount = useCallback((index: number, position = 0) => {
    const pageCount = getPageCountBySpineIndex(viewerCountList, index);
    dispatch(viewerActions.setViewerPageCount(pageCount + position));
  }, [viewerCountList]);

  const getLinkPosition = useCallback((index: number, tag: string) => {
    if (tag) {
      const selectedLinkSpineElement = document.querySelector(`[data-spineindex='${index}']`);
      const tagElement: HTMLElement = selectedLinkSpineElement.querySelector(`#${tag}`);
      if (tagElement) {
        return getTagPostion(tagElement.offsetLeft, index, widthWithRatio);
      }
    }

    return 0;
  }, [widthWithRatio]);

  const clickPage = useCallback((e) => {
    let node = e.target;
    while (node && node.localName !== 'a') {
      node = node.parentNode;
    }
    if (node) {
      e.preventDefault();
      const [spineHref, hashId] = node.getAttribute('href').split('#');
      setSelectedLink({
        href: spineHref || spine.href,
        tag: hashId,
      });
      return false;
    }
    return true;
  }, [spine]);

  useEffect(() => {
    setViewerStyle({
      fontSize,
      lineHeight,
    });
  }, [settingChangeToggle]);

  useEffect(() => {
    if (isShowNowSpineIndex) {
      setViewerStyle({
        fontSize,
        lineHeight,
      });
    }
  }, [fontSize, lineHeight]);

  useEffect(() => {
    const { current: viewArticleRefCurrent } = viewArticleRef;
    if (viewArticleRefCurrent) {
      const count = getSpineViewerCount(viewArticleRefCurrent.scrollWidth, widthWithRatio);
      setCountCallback(count, spineIndex);
    }
  }, [toggleCalculateCount]);

  useEffect(() => {
    const {
      index: selectedSpineLinkIndex,
      tag,
    } = selectedSpineLink;
    if (selectedSpineLinkIndex > -1) {
      setPageCount(
        selectedSpineLinkIndex,
        getLinkPosition(selectedSpineLinkIndex, tag),
      );
    }
  }, [selectedSpineLink]);

  useEffect(() => {
    if (isShowNowSpineIndex && nowSpinePosition > -1) {
      dispatch(viewerActions.setViewerSpinePosition(nowSpinePosition));
    }
  }, [isShowNowSpineIndex, nowSpinePosition]);

  useEffect(() => {
    if (isShowNowSpineIndex) {
      const { current: viewArticleRefCurrent } = viewArticleRef;
      viewArticleRefCurrent.scrollLeft = scrollLeft;
    }
  }, [isShowNowSpineIndex, scrollLeft]);

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
