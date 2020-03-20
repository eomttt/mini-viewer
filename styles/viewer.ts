import styled from 'styled-components';

import { VIEWER_WIDTH_RATIO, VIEWER_HEIGHT_RATIO, VIEWER_PAGE_GAP } from '../constants/viewer';

export const Container = styled.div`
  margin: ${(100 - VIEWER_HEIGHT_RATIO) / 2}% ${(100 - VIEWER_WIDTH_RATIO) / 2}%;
  height: ${(props) => props.styleProps.height}px;
  overflow: hidden;
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

const ViewArticleStyle = `
  box-sizing: border-box;
  visibility: visible;
  vertical-align: top;
  white-space: initial;
  display: inline-block;
  font-family: kopup_dotum !important;
`;

const ViewSectionStyle = `
  height: 100%;
  column-gap: ${VIEWER_PAGE_GAP}px;
  column-fill: auto;
`;

export const ViewArticle = styled.article`
  ${ViewArticleStyle}
  width: ${(props) => props.styleProps.width}px;
  height: ${(props) => props.styleProps.height}px;
  overflow: hidden;
`;

export const ViewSection = styled.section`
  ${ViewSectionStyle}
  column-width: ${(props) => props.styleProps.width}px;
`;

export const HiddenViewArticle = styled.article`
  ${ViewArticleStyle}
  width: ${(props) => props.styleProps.width}px;
  height: ${(props) => props.styleProps.height}px;
  overflow: scroll;
`;

export const HiddenViewSection = styled.section`
  ${ViewSectionStyle}
  column-width: ${(props) => props.styleProps.width}px;
  visibility: hidden;
`;

export const Contents = styled.div`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
`;
