import { defaultColor, subColor } from './index';
import { VIEWER_HEIGHT_RATIO, VIEWER_PAGE_GAP } from '../constants/viewer';


export const ButtonStyle = `
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
`;

export const ViewArticleStyle = `
  box-sizing: border-box;
  visibility: visible;
  vertical-align: top;
  white-space: initial;
  display: inline-block;
  font-family: kopup_dotum !important;
`;

export const ViewSectionStyle = `
  height: 100%;
  column-gap: ${VIEWER_PAGE_GAP}px;
  column-fill: auto;
`;

export const ViewerMenuStyle = `
  width: 100%;
  height: ${(100 - VIEWER_HEIGHT_RATIO) / 2 - 1}%;
  position: fixed;
  display: flex;
  border-bottom: 1px solid ${subColor};
  background-color: ${defaultColor};
  z-index: 5;
`;

export const ViewerContentsStyle = `
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
`;

export const ViewerSettingItemStyle = `
  height: 3em;
  text-align: center;
  padding: .5em;
  border-bottom: 1px solid ${subColor};
  margin: 0;
  display: flex;
  &:nth-last-child(1) {
    border-bottom: initial;
  }
`;

export const ViewerSettingLabelStyle = `
  margin: auto .5em auto 0;
`;

export const ViewerSettingValueStyle = `
  margin: auto auto auto 0;
`;
