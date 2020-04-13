import styled from 'styled-components';

import { ViewerMenu } from '.';

import { ViewerBottomStyleProps } from '../../interfaces/viewer/style';

import { VIEWER_SLIDER_LEN_RATIO } from '../../constants/viewer';

export const Container = styled(ViewerMenu)`
  height: ${(props: ViewerBottomStyleProps): number => props.height - 10}px;
  bottom: 0;
`;

export const SliderContainer = styled.div`
  width: 100%;
  margin: auto 5%;
  flex-direction: column;
  display: flex;
`;

export const SliderMarker = styled.div`
  margin-left: ${(100 - VIEWER_SLIDER_LEN_RATIO) / 2}%;
`;

export const SliderInput = styled.input`
  margin-left: ${(100 - VIEWER_SLIDER_LEN_RATIO) / 2}%;
  width: ${VIEWER_SLIDER_LEN_RATIO}%;
  cursor: grab;
`;
