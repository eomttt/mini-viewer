/* eslint-disable react/no-danger */
import React, {
  useEffect, useState, useRef, useCallback, useMemo,
} from 'react';

import { EpubSpineItem } from '../../interfaces/books';

import {
  Container,
  ViewArticle, ViewSection, Contents,
  HiddenViewSection,
  LeftButton, RightButton,
} from '../../styles/viewer';

import { VIEWER_WIDTH_RATIO, VIEWER_HEIGHT_RATIO, VIEWER_PAGE_GAP } from '../../constants/viewer';

interface Props {
  nowSpineIndex: number;
  spine: EpubSpineItem;
  viewerSpine: string;
  setNextSpine: () => void;
  setPrevSpine: () => void;
}

const Viewer: React.FunctionComponent<Props> = ({
  nowSpineIndex, spine, viewerSpine,
  setNextSpine, setPrevSpine,
}) => {
  const [viewerWidth, setViewerWidth] = useState(0);
  const [viewerHeight, setViewerHeight] = useState(0);

  const [nowViewerCount, setNowViewerCount] = useState(0);
  const [wholeViewerCount, setWholeViewerCount] = useState(0);

  const hasNextViewer = useMemo(() => nowViewerCount < wholeViewerCount, [nowViewerCount, wholeViewerCount]);
  const hasPrevViewer = useMemo(() => nowViewerCount > 0, [nowViewerCount]);

  const viewArticleRef = useRef(null);
  const hiddenViewSectionRef = useRef(null);

  useEffect(() => {
    setViewerWidth(Math.floor(window.innerWidth * (VIEWER_WIDTH_RATIO / 100)));
    setViewerHeight(Math.floor(window.innerHeight * (VIEWER_HEIGHT_RATIO / 100)));
  }, []);

  useEffect(() => {
    if (hiddenViewSectionRef) {
      const { current: hiddenViewSectionCurrent } = hiddenViewSectionRef;
      const count = hiddenViewSectionCurrent.clientHeight / viewerHeight;

      setNowViewerCount(0);
      setWholeViewerCount(Math.floor(count));
    }
  }, [hiddenViewSectionRef, viewerHeight, nowSpineIndex]);

  const clickRight = useCallback(() => {
    if (viewArticleRef) {
      const { current: viewArticleRefCurrent } = viewArticleRef;

      if (hasNextViewer) {
        setNowViewerCount(nowViewerCount + 1);
        viewArticleRefCurrent.scrollLeft += (viewerWidth + VIEWER_PAGE_GAP);
      } else {
        viewArticleRefCurrent.scrollLeft = 0;
        setNextSpine();
      }
    }
  }, [viewArticleRef, hasNextViewer, nowViewerCount, viewerWidth, setNextSpine]);

  const clickLeft = useCallback(() => {
    if (viewArticleRef) {
      const { current: viewArticleRefCurrent } = viewArticleRef;

      if (hasPrevViewer) {
        setNowViewerCount(nowViewerCount - 1);
        viewArticleRefCurrent.scrollLeft -= (viewerWidth + VIEWER_PAGE_GAP);
      } else {
        viewArticleRefCurrent.scrollLeft = 0;
        setPrevSpine();
      }
    }
  }, [viewArticleRef, hasPrevViewer, nowViewerCount, viewerWidth, setPrevSpine]);

  return (
    <Container>
      <ViewArticle
        ref={viewArticleRef}
        onClick={clickRight}
        styleProps={{
          width: viewerWidth,
          height: viewerHeight,
        }}
      >
        <ViewSection
          styleProps={{
            width: viewerWidth,
            height: viewerHeight,
          }}
        >
          <Contents dangerouslySetInnerHTML={{ __html: viewerSpine }} />
        </ViewSection>
        <HiddenViewSection
          ref={hiddenViewSectionRef}
        >
          <Contents dangerouslySetInnerHTML={{ __html: viewerSpine }} />
        </HiddenViewSection>
      </ViewArticle>
      <LeftButton onClick={clickLeft}>Left</LeftButton>
      <RightButton onClick={clickRight}>Right</RightButton>
    </Container>
  );
};

export default Viewer;
