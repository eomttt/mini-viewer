
/* eslint-disable react/no-danger */
import React, {
  useState, useRef, useCallback, useMemo, useEffect,
} from 'react';
import { useDispatch } from 'react-redux';

import {
  ViewArticle, ViewSection, Contents,
  LeftButton, RightButton,
} from '../../styles/viewer';

import * as actions from '../../reducers/viewer';

import { VIEWER_PAGE_GAP } from '../../constants/viewer';

interface Props {
  viewerWidth: number;
  viewerHeight: number;
  wholeColumnCount: number;
  viewerSpine: string;
  setNextSpine: () => void;
  setPrevSpine: () => void;
}

const ViewerPage: React.FunctionComponent<Props> = ({
  viewerWidth, viewerHeight,
  wholeColumnCount,
  viewerSpine,
  setNextSpine, setPrevSpine,
}) => {
  const dispatch = useDispatch();
  const [nowViewerCount, setNowViewerCount] = useState(0);

  const hasNextViewer = useMemo(() => nowViewerCount < wholeColumnCount, [nowViewerCount, wholeColumnCount]);
  const hasPrevViewer = useMemo(() => nowViewerCount > 0, [nowViewerCount]);

  const viewArticleRef = useRef(null);

  useEffect(() => {
    const { current: viewArticleRefCurrent } = viewArticleRef;
    viewArticleRefCurrent.scrollLeft = 0;
    setNowViewerCount(0);
  }, [viewerSpine]);

  const clickRight = useCallback(() => {
    const { current: viewArticleRefCurrent } = viewArticleRef;
    if (hasNextViewer) {
      setNowViewerCount(nowViewerCount + 1);
      viewArticleRefCurrent.scrollLeft += (viewerWidth + VIEWER_PAGE_GAP);
      dispatch(actions.setCountUpViewerPageCount());
    } else {
      setNextSpine();
    }
  }, [dispatch, hasNextViewer, nowViewerCount, viewerWidth, setNextSpine]);

  const clickLeft = useCallback(() => {
    const { current: viewArticleRefCurrent } = viewArticleRef;

    if (hasPrevViewer) {
      setNowViewerCount(nowViewerCount - 1);
      viewArticleRefCurrent.scrollLeft -= (viewerWidth + VIEWER_PAGE_GAP);
      dispatch(actions.setCountDownViewerPageCount());
    } else {
      setPrevSpine();
    }
  }, [dispatch, hasPrevViewer, nowViewerCount, viewerWidth, setPrevSpine]);

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

export default ViewerPage;
