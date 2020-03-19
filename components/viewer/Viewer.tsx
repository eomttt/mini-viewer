/* eslint-disable react/no-danger */
import React, {
  useEffect, useState, useRef, useCallback,
} from 'react';

import styled from 'styled-components';

import { EpubSpineItem } from '../../interfaces/books';

const HiddenViewSection = styled.section`
  visibility: hidden;
`;

const ViewSection = styled.section`
  height: 100%;
  column-fill: auto;
  column-gap: 46px;
  column-width: 600px;
`;

const Container = styled.div`

`;

const ViewArticle = styled.article`
  box-sizing: border-box;
  visibility: visible;
  width: 600px;
  height: ${(props) => props.styleProps.height}px;
  vertical-align: top;
  white-space: initial;
  display: inline-block;
  font-size: 1em !important;
  line-height: 1.67em !important;
  font-family: kopup_dotum !important;
  margin: 50px 139px;
  overflow: hidden;
`;

const Contents = styled.div`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
`;

interface Props {
  spines: EpubSpineItem[];
  viewerSpines: string[];
}

const Viewer: React.FunctionComponent<Props> = ({ spines, viewerSpines }) => {
  const [viewerWidth, setViewerWidth] = useState(0);
  const [viewerHeight, setViewerHeight] = useState(0);

  const [columnViewerCount, setColumnViewerCount] = useState(0);

  const viewArticleRef = useRef(null);
  const hiddenViewSectionRef = useRef(null);

  useEffect(() => {
    setViewerWidth(window.innerWidth * 0.7);
    setViewerHeight(window.innerHeight * 0.9);
  }, []);

  const clickRight = useCallback(() => {
    if (viewArticleRef && hiddenViewSectionRef) {
      const { current: viewArticleRefCurrent } = viewArticleRef;
      const { current: hiddenViewSectionCurrent } = hiddenViewSectionRef;

      const count = hiddenViewSectionCurrent.clientHeight / viewerHeight + 1;

      setColumnViewerCount(Math.floor(count));
      viewArticleRefCurrent.scrollLeft += viewerWidth;
    }
  }, [viewArticleRef, hiddenViewSectionRef,
    viewerWidth, viewerHeight]);

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
          <Contents dangerouslySetInnerHTML={{ __html: viewerSpines[1] }} />
        </ViewSection>
        <HiddenViewSection
          ref={hiddenViewSectionRef}
        >
          <Contents dangerouslySetInnerHTML={{ __html: viewerSpines[1] }} />
        </HiddenViewSection>
      </ViewArticle>
    </Container>
  );
};

export default Viewer;
