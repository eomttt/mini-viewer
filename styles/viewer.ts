import styled from 'styled-components';

import { VIEWER_WIDTH_RATIO, VIEWER_HEIGHT_RATIO, VIEWER_PAGE_GAP } from '../constants/viewer';

export const HiddenViewSection = styled.section`
  visibility: hidden;
`;

export const Container = styled.div`
  position: relative;
`;

export const Button = `
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
`;

export const RightButton = styled.div`
  ${Button}
  right: 2em;
`;

export const LeftButton = styled.div`
  ${Button}
  left: 2em;
`;

export const ViewArticle = styled.article`
  box-sizing: border-box;
  visibility: visible;
  width: ${(props) => props.styleProps.width}px;
  height: ${(props) => props.styleProps.height}px;
  vertical-align: top;
  white-space: initial;
  display: inline-block;
  font-size: 1em !important;
  line-height: 1.67em !important;
  font-family: kopup_dotum !important;
  margin: ${(100 - VIEWER_HEIGHT_RATIO) / 2}% ${(100 - VIEWER_WIDTH_RATIO) / 2}%;
  overflow: hidden;
`;

export const ViewSection = styled.section`
  height: 100%;
  column-gap: ${VIEWER_PAGE_GAP}px;
  column-fill: auto;
  column-width: ${(props) => props.styleProps.width}px;
`;

export const Contents = styled.div`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
`;
