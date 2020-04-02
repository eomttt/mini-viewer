import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  margin-top: 10em;
  margin-bottom: 5em;
  text-align: center;
  font-size: 2em;
  & a {
    font-size: 16px;
  }
`;

const NoBookList = () => (
  <>
    <Container>
      <div>
        구매한 책이 없습니다.
      </div>
      <a href="https://ridibooks.com" rel="noreferrer noopener" target="_blank">책 구매하기</a>
    </Container>
  </>
);

export default NoBookList;
