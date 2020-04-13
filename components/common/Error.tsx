import React from 'react';

import * as Styled from '../../styles/common';
import { ErrorProps } from '../../interfaces/common';
import { DEFAULT_IMAGE } from '../../constants/books';

const Error: React.FunctionComponent<ErrorProps> = ({ text }) => (
  <Styled.ErrorContainer>
    <Styled.ErrorContent>
      <Styled.ErrorWrapper>
        <img src={DEFAULT_IMAGE} alt="Not support book" />
        <div>
          {text}
        </div>
      </Styled.ErrorWrapper>
    </Styled.ErrorContent>
  </Styled.ErrorContainer>
);

export default Error;
