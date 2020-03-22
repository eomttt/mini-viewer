import styled from 'styled-components';

import { defaultColor, subColor } from './index';
import { VIEWER_HEIGHT_RATIO, VIEWER_PAGE_GAP } from '../constants/viewer';

export const ViewerMenu = styled.div`
  width: 100%;
  height: ${(100 - VIEWER_HEIGHT_RATIO) / 2 - 1}%;
  position: fixed;
  display: flex;
  border-top: 1px solid ${subColor};
  border-bottom: 1px solid ${subColor};
  background-color: ${defaultColor};
  z-index: 5;
`;

export const ViewerArticle = styled.article`
  box-sizing: border-box;
  visibility: visible;
  vertical-align: top;
  white-space: initial;
  display: inline-block;
  width: ${(props) => props.styleProps.width}px;
  height: ${(props) => props.styleProps.height}px;
  font-size: ${(props) => props.styleProps.fontSize}em;
  line-height: ${(props) => props.styleProps.lineHeight}em;
`;

export const ViewerSection = styled.section`
  height: 100%;
  column-gap: ${VIEWER_PAGE_GAP}px;
  column-fill: auto;
  column-width: ${(props) => props.styleProps.width}px;
`;

export const ViewerContents = styled.div`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
`;

export const ViewerButton = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
`;

export const ViewerSettingItem = styled.div`
  height: 3em;
  text-align: center;
  padding: .4em;
  border-bottom: 1px solid ${subColor};
  margin: 0;
  display: flex;
  &:nth-last-child(1) {
    border-bottom: initial;
  }
`;

export const ViewerSettingLabel = styled.div`
  margin: auto .5em auto 0;
`;

export const ViewerSettingValue = styled.div`
  margin: auto auto auto 0;
`;
