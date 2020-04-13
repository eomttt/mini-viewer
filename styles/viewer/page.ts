import styled from 'styled-components';

import {
  ViewerArticleStyleProps,
  ViewerSectionStyleProps,
  ViewerPageControllerStyleProps,
} from '../../interfaces/viewer/style';
import { VIEWER_PAGE_GAP } from '../../constants/viewer';

export const ViewerControllerContainer = styled.div`
  background-color: ${(props: ViewerPageControllerStyleProps): string => props.backgroundColor};
`;

export const ViewerControllerContent = styled.div`
  width: ${(props: ViewerPageControllerStyleProps): number => props.width}px;
  height: ${(props: ViewerPageControllerStyleProps): number => props.height}px;
  margin: 0 calc((100% - ${(props: ViewerPageControllerStyleProps): number => props.width}px) / 2);
  padding: ${(props: ViewerPageControllerStyleProps): number => props.menuHeight}px 0;
  text-align: center;
`;

export const ViewerPagesContainer = styled.div`
  width: 100%;
  height: 100%;
  white-space: nowrap;
  text-align: initial;
  overflow: hidden;
`;

export const ViewerButton = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
`;

export const ViewerControllerRightButton = styled(ViewerButton)`
  right: 1em;
`;

export const ViewerControllerLeftButton = styled(ViewerButton)`
  left: 1em;
`;

export const ViewerArticle = styled.div`
  box-sizing: border-box;
  visibility: visible;
  vertical-align: top;
  white-space: initial;
  display: inline-block;
  width: 100%;
  height: 100%;
  overflow: hidden;
  font-size: ${(props: ViewerArticleStyleProps): number => props.fontSize}em;
  line-height: ${(props: ViewerArticleStyleProps): number => props.lineHeight}em;
`;

export const ViewerSection = styled.div`
  height: 100%;
  column-gap: ${VIEWER_PAGE_GAP}px;
  column-fill: auto;
  column-width: ${(props: ViewerSectionStyleProps): number => props.width}px;
`;

export const ViewerContents = styled.div`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
`;