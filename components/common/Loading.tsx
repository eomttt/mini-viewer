import React from 'react';
import * as Styled from '../../styles/common';
import { LoadingProps } from '../../interfaces/common';

const Loading: React.FunctionComponent<LoadingProps> = ({ text, backgroundColor }) => (
  <Styled.LoadingContainer
    backgroundColor={backgroundColor}
  >
    <Styled.LoadingContent>
      <div>
        {text}
      </div>
    </Styled.LoadingContent>
  </Styled.LoadingContainer>
);

export default Loading;
