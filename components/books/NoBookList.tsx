import React from 'react';
import * as Styled from '../../styles/books/library';

const NoBookList: React.FunctionComponent = () => (
  <Styled.NoBookListContainer>
    <div>
      업로드한 책이 없습니다. 업로드해서 사용해보세요.
    </div>
  </Styled.NoBookListContainer>
);

export default NoBookList;
