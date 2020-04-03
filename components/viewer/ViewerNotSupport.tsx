import React from 'react';
import styled from 'styled-components';

import { DEFAULT_IMAGE } from '../../constants/books';

const Container = styled.div`
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

const ViewerNotSupport: React.FunctionComponent = () => (
  <Container>
    <img src={DEFAULT_IMAGE} alt="Not support book" />
    <div>
      지원하지 않은 책입니다. 다른책을 선택해주세요.
    </div>
    <a href="/">다른책 선택하기</a>
  </Container>
);

export default ViewerNotSupport;
