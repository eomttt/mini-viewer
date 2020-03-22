
/* eslint-disable react/no-danger */
import React, {
  useState, useRef, useCallback, useEffect,
} from 'react';
import { useDispatch } from 'react-redux';

import styled from 'styled-components';

import {
  ViewerButton,
  ViewerArticle,
  ViewerSection,
  ViewerContents,
} from '../../styles/viewer';

import * as viewerActions from '../../reducers/viewer';

import { VIEWER_PAGE_GAP } from '../../constants/viewer';

import { ViewerStyle } from '../../interfaces/viewer';

const Article = styled(ViewerArticle)`
  overflow: hidden;
  text-align: initial;
`;

const RightButton = styled(ViewerButton)`
  right: 2em;
`;

const LeftButton = styled(ViewerButton)`
  left: 2em;
`;

interface Props {
  viewerWidth: number;
  viewerHeight: number;
  pageColumnOffset: number;
  viewerSpine: string;
  isFirstPage: boolean;
  isLastPage: boolean;
  viewerStyle: ViewerStyle;
}

const ViewerPage: React.FunctionComponent<Props> = ({
  viewerWidth, viewerHeight,
  pageColumnOffset,
  viewerSpine,
  isFirstPage, isLastPage,
  viewerStyle,
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
    dispatch(viewerActions.setCountUpViewerPageCount());
  }, [dispatch, nowViewerCount, viewerWidth]);

  const clickLeft = useCallback(() => {
    const { current: viewArticleRefCurrent } = viewArticleRef;
    setNowViewerCount(nowViewerCount - 1);
    viewArticleRefCurrent.scrollLeft -= (viewerWidth + VIEWER_PAGE_GAP);
    dispatch(viewerActions.setCountDownViewerPageCount());
  }, [dispatch, nowViewerCount, viewerWidth]);

  return (
    <>
      <Article
        ref={viewArticleRef}
        onClick={clickRight}
        styleProps={{
          ...viewerStyle,
          width: viewerWidth,
          height: viewerHeight,
        }}
      >
        <ViewerSection
          styleProps={{
            ...viewerStyle,
            width: viewerWidth,
            height: viewerHeight,
          }}
        >
          <ViewerContents dangerouslySetInnerHTML={{ __html: viewerSpine }} />
        </ViewerSection>
      </Article>
      {!isFirstPage && <LeftButton onClick={clickLeft}>Left</LeftButton>}
      {!isLastPage && <RightButton onClick={clickRight}>Right</RightButton>}
    </>
  );
};

export default ViewerPage;
