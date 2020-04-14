import React, {
  useRef, useEffect, useCallback, useMemo, useState,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as Styled from '../../../styles/viewer/page';
import * as viewerActions from '../../../reducers/viewer';

import { ReducerStates } from '../../../interfaces';
import {
  ViewerState,
  ViewerSettingState,
  ViewerStyle,
  ViewerLinkInfo,
} from '../../../interfaces/viewer';
import {
  ViewerPageProps 
} from '../../../interfaces/viewer/props';

import {
  getSpineViewerCount,
  getTagPostion,
} from '../../../lib/calculate';
import {
  getPageCountBySpineIndex,
  getTagElement,
} from '../../../lib/util';

import {
  usePageWithWithRatio,
  useSpineLinkInfo,
  useScrollLeft,
  useIsShowNowSpineIndexViewer,
} from '../../../hooks';

const ViewerPage: React.FunctionComponent<ViewerPageProps> = ({
  spineIndex, spineViewer, spine,
  isSetAllViewerCountList,
  toggleCalculateCount,
  setCountCallback,
}) => {
  const dispatch = useDispatch();

  const {
    viewerCountList, viewerSpineIndex, viewerSpinePosition,
  }: ViewerState = useSelector((state: ReducerStates) => state.viewer);
  const {
    viewerWidth,
    fontSize, lineHeight, widthRatio,
    isOpenSettingMenu,
  }: ViewerSettingState = useSelector((state: ReducerStates) => state.viewerSetting);

  const viewArticleRef = useRef<HTMLDivElement>(null);

  const [viewerStyle, setViewerStyle] = useState<ViewerStyle>({
    fontSize,
    lineHeight,
  });
  const [selectedLink, setSelectedLink] = useState<ViewerLinkInfo>({
    href: '',
    tag: '',
  });

  const widthWithRatio: number = usePageWithWithRatio(viewerWidth, widthRatio);
  const selectedSpineLink: ViewerLinkInfo = useSpineLinkInfo(viewerCountList, selectedLink);
  const scrollLeft: number = useScrollLeft(viewerSpinePosition, widthWithRatio);
  const isShowNowSpineIndex: boolean = useIsShowNowSpineIndexViewer(viewerSpineIndex, spineIndex);

  const setPageCount = useCallback((index: number, position = 0): void => {
    const pageCount = getPageCountBySpineIndex(viewerCountList, index);
    dispatch(viewerActions.setViewerPageCount(pageCount + position));
  }, [viewerCountList]);

  const getLinkPosition = useCallback((index: number, tag: string): number => {
    const tagElement = getTagElement(index, tag);
    return tagElement ? getTagPostion(tagElement.offsetLeft, index, widthWithRatio) : 0;
  }, [widthWithRatio]);

  const getLinkInfo = useCallback((e: React.MouseEvent<HTMLDivElement, MouseEvent>): ViewerLinkInfo | null => {
    let node = e.target as HTMLElement;
    while (node && node.localName !== 'a') {
      node = node.parentNode as HTMLElement;
    }
    if (node) {
      const [href, tag] = node.getAttribute('href').split('#');
      return {
        href,
        tag,
      };
    }
    return null;
  }, []);

  const setLinkInfo = useCallback((linkInfo: ViewerLinkInfo): void => {
    const { href, tag } = linkInfo;
    setSelectedLink({
      href: href || spine.href,
      tag,
    });
  }, [spine]);

  const clickPage = useCallback((e: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
    e.preventDefault();
    const linkInfo = getLinkInfo(e);
    if (linkInfo) {
      setLinkInfo(linkInfo);
    }
  }, [setLinkInfo]);

  useEffect(() => {
    const { current: viewArticleRefCurrent } = viewArticleRef;
    const count = getSpineViewerCount(viewArticleRefCurrent.scrollWidth, widthWithRatio);
    setCountCallback(count, spineIndex);
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
    if (isShowNowSpineIndex && scrollLeft > -1) {
      const { current: viewArticleRefCurrent } = viewArticleRef;
      viewArticleRefCurrent.scrollLeft = scrollLeft;
    }
  }, [isSetAllViewerCountList, viewerSpineIndex, scrollLeft]);

  return (
    <Styled.ViewerArticle
      data-spineindex={spineIndex}
      ref={viewArticleRef}
      onClickCapture={clickPage}
      fontSize={viewerStyle.fontSize}
      lineHeight={viewerStyle.lineHeight}
    >
      <Styled.ViewerSection
        width={widthWithRatio}
      >
        <Styled.ViewerContents
          dangerouslySetInnerHTML={{ __html: spineViewer }}
        />
      </Styled.ViewerSection>
    </Styled.ViewerArticle>
  );
};

export default ViewerPage;
