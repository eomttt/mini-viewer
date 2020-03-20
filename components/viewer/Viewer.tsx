/* eslint-disable react/no-danger */
import React, {
  useState, useRef, useCallback, useMemo,
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
  wholeColumnCount: number;
  spine: EpubSpineItem;
  viewerSpine: string;
  setNextSpine: () => void;
  setPrevSpine: () => void;
}

const Viewer: React.FunctionComponent<Props> = ({
  viewerWidth, viewerHeight, wholeColumnCount,
  spine, viewerSpine,
  setNextSpine, setPrevSpine,
}) => {
  const [nowViewerCount, setNowViewerCount] = useState(0);

  const hasNextViewer = useMemo(() => nowViewerCount + 1 < wholeColumnCount, [nowViewerCount, wholeColumnCount]);
  const hasPrevViewer = useMemo(() => nowViewerCount > 0, [nowViewerCount]);

  const viewArticleRef = useRef(null);

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
