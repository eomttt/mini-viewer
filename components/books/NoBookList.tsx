import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  margin-top: 10em;
  margin-bottom: 5em;
  text-align: center;
  font-size: 2em;
`;

const NoBookList: React.FunctionComponent = () => (
  <>
    <Container>
      <div>
        업로드한 책이 없습니다. 업로드해서 사용해보세요.
      </div>
    </Container>
  </>
);

export default NoBookList;
