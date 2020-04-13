import styled from 'styled-components';

import { defaultColor, subColor } from '..';

export const ViewerMenu = styled.div`
  width: 100%;
  position: fixed;
  display: flex;
  border-top: 1px solid ${subColor};
  border-bottom: 1px solid ${subColor};
  background-color: ${defaultColor};
  z-index: 5;
  font-family: initial;
`;

export const ViewerNotSupportContainer = styled.div`
  margin: 10em;
  text-align: center;
  & img {
    width: 14em;
    margin-bottom: 3em;
  }
  & div {
    width: 100%;
    font-size: 1.4em;
  }
`;
