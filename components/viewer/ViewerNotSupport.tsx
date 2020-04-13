import React from 'react';

import * as Styled from '../../styles/viewer';

import { DEFAULT_IMAGE } from '../../constants/books';

const ViewerNotSupport: React.FunctionComponent = () => (
  <Styled.ViewerNotSupportContainer>
    <img src={DEFAULT_IMAGE} alt="Not support book" />
    <div>
      지원하지 않은 책입니다. 다른책을 선택해주세요.
    </div>
    <a href="/">다른책 선택하기</a>
  </Styled.ViewerNotSupportContainer>
);

export default ViewerNotSupport;
