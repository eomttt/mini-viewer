/* eslint-disable react/no-danger */
import React, {
  useState, useRef, useCallback, useMemo, useEffect,
} from 'react';

import { EpubSpineItem } from '../../interfaces/books';

import {
  ViewArticle, ViewSection, Contents,
  LeftButton, RightButton,
} from '../../styles/viewer';

import { VIEWER_PAGE_GAP } from '../../constants/viewer';

interface Props {
  viewerWidth: number;
  viewerHeight: number;
  isShowPrevViewer: boolean;
  wholeColumnCount: number;
  spine: EpubSpineItem;
  viewerSpine: string;
  setNextSpine: () => void;
  setPrevSpine: () => void;
}

const Viewer: React.FunctionComponent<Props> = ({
  viewerWidth, viewerHeight,
  isShowPrevViewer, wholeColumnCount,
  spine, viewerSpine,
  setNextSpine, setPrevSpine,
}) => {
  const [nowViewerCount, setNowViewerCount] = useState(0);

  const hasNextViewer = useMemo(() => nowViewerCount < wholeColumnCount, [nowViewerCount, wholeColumnCount]);
  const hasPrevViewer = useMemo(() => nowViewerCount > 0, [nowViewerCount]);

  const viewArticleRef = useRef(null);

  useEffect(() => {
    if (isShowPrevViewer) {
      const { current: viewArticleRefCurrent } = viewArticleRef;

      viewArticleRefCurrent.scrollLeft = wholeColumnCount * (viewerWidth + VIEWER_PAGE_GAP);
      setNowViewerCount(wholeColumnCount);
    }
  }, [isShowPrevViewer, viewerWidth, wholeColumnCount]);

  const clickRight = useCallback(() => {
    const { current: viewArticleRefCurrent } = viewArticleRef;
    if (hasNextViewer) {
      setNowViewerCount(nowViewerCount + 1);
      viewArticleRefCurrent.scrollLeft += (viewerWidth + VIEWER_PAGE_GAP);
    } else {
      viewArticleRefCurrent.scrollLeft = 0;
      setNowViewerCount(0);
      setNextSpine();
    }
  }, [hasNextViewer, nowViewerCount, viewerWidth, setNextSpine]);

  const clickLeft = useCallback(() => {
    const { current: viewArticleRefCurrent } = viewArticleRef;

    if (hasPrevViewer) {
      setNowViewerCount(nowViewerCount - 1);
      viewArticleRefCurrent.scrollLeft -= (viewerWidth + VIEWER_PAGE_GAP);
    } else {
      viewArticleRefCurrent.scrollLeft = 0;
      setNowViewerCount(0);
      setPrevSpine();
    }
  }, [hasPrevViewer, nowViewerCount, viewerWidth, setPrevSpine]);

  return (
    <>
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
      </ViewArticle>
      <LeftButton onClick={clickLeft}>Left</LeftButton>
      <RightButton onClick={clickRight}>Right</RightButton>
    </>
  );
};

export default Viewer;
