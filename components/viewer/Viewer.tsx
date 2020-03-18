/* eslint-disable react/no-danger */
import React, { useEffect, useState } from 'react';

import styled from 'styled-components';

import { EpubSpineItem } from '../../interfaces/books';

const ViewArticle = styled.article`
  box-sizing: border-box;
  visibility: visible;
  width: ${(props) => props.styleProps.width}px;
  height: ${(props) => props.styleProps.height}px;
  vertical-align: top;
  white-space: initial;
  display: inline-block;
  font-size: 1em !important;
`;

const ViewSection = styled.section`
  column-fill: auto;
  column-width: ${(props) => props.styleProps.width}px;
  height: ${(props) => props.styleProps.height}px;
`;

const TestDiv = styled.div`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
`;

interface Props {
  spines: EpubSpineItem[];
  viewerSpines: string[];
}

const Viewer: React.FunctionComponent<Props> = ({ spines, viewerSpines }) => {
  const [wholeViewWidth, setWholeViewWidth] = useState(0);
  const [viewerWidth, setViewerWidth] = useState(0);
  const [viewerHeight, setViewerHeight] = useState(0);

  useEffect(() => {
    console.log(window.innerWidth, window.innerHeight);
    setViewerWidth(window.innerWidth * 0.7);
    setViewerHeight(window.innerHeight * 0.8);
    setWholeViewWidth(window.outerWidth);
  }, []);

  console.log('AAA', wholeViewWidth);

  const clickRight = () => {
    console.log('AAAA');
    window.scrollTo(viewerWidth, 0);
  };

  return (
    <ViewArticle
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
        <TestDiv dangerouslySetInnerHTML={{ __html: viewerSpines[1] }} />
      </ViewSection>
    </ViewArticle>

  );
};

export default Viewer;
