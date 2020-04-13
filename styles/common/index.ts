import styled from 'styled-components';
import { LoadingStyleProps } from '../../interfaces/common/style';
import { defaultColor, subColor } from '..';

export const ErrorContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 6;
`;

export const ErrorContent = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const ErrorWrapper = styled.div`
  width: 100%;
  position: absolute;
  top: 40%;
  text-align: center;
  transform: translateY(-50%);
  & div {
    text-align: center;
    font-size: 1.4em;
    font-weight: bold;
  }
`;

export const LoadingContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${(props: LoadingStyleProps): string => (props.backgroundColor ? props.backgroundColor : '#dedede')};
  z-index: 6;
`;

export const LoadingContent = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  & div {
    width: 100%;
    text-align: center;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    color: ${defaultColor};
    text-shadow: 1px 1px ${subColor};
    font-size: 1.5em;
    font-weight: bold;
  }
`;
