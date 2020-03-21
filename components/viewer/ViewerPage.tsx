
/* eslint-disable react/no-danger */
import React, {
  useState, useRef, useCallback, useEffect,
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
  pageColumnOffset: number;
  viewerSpine: string;
  isFirstPage: boolean;
  isLastPage: boolean;
}

const ViewerPage: React.FunctionComponent<Props> = ({
  viewerWidth, viewerHeight,
  pageColumnOffset,
  viewerSpine,
  isFirstPage, isLastPage,
}) => {
  const dispatch = useDispatch();
  const [nowViewerCount, setNowViewerCount] = useState(0);

  const viewArticleRef = useRef(null);

  useEffect(() => {
    const { current: viewArticleRefCurrent } = viewArticleRef;
    viewArticleRefCurrent.scrollLeft = pageColumnOffset * (viewerWidth + VIEWER_PAGE_GAP);
    setNowViewerCount(pageColumnOffset);
  }, [viewerSpine, pageColumnOffset, viewerWidth]);

  const clickRight = useCallback(() => {
    const { current: viewArticleRefCurrent } = viewArticleRef;

    setNowViewerCount(nowViewerCount + 1);
    viewArticleRefCurrent.scrollLeft += (viewerWidth + VIEWER_PAGE_GAP);
    dispatch(actions.setCountUpViewerPageCount());
  }, [dispatch, nowViewerCount, viewerWidth]);

  const clickLeft = useCallback(() => {
    const { current: viewArticleRefCurrent } = viewArticleRef;
    setNowViewerCount(nowViewerCount - 1);
    viewArticleRefCurrent.scrollLeft -= (viewerWidth + VIEWER_PAGE_GAP);
    dispatch(actions.setCountDownViewerPageCount());
  }, [dispatch, nowViewerCount, viewerWidth]);

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
      {!isFirstPage && <LeftButton onClick={clickLeft}>Left</LeftButton>}
      {!isLastPage && <RightButton onClick={clickRight}>Right</RightButton>}
    </>
  );
};

export default ViewerPage;
