import React from 'react';
import Error from 'next/error';

import styled from 'styled-components';

import { DEFAULT_IMAGE } from '../constants/books';

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

class MyError extends Error {
  public render(): JSX.Element {
    return (
      <Container>
        <img src={DEFAULT_IMAGE} alt="Not support book" />
        <div>
          페이지를 찾지 못했습니다. ㅠㅠ
        </div>
      </Container>
    );
  }
}

export default MyError;
