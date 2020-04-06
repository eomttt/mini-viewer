import React from 'react';
import styled from 'styled-components';

import { DEFAULT_IMAGE } from '../../constants/books';

const Container = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 6;
`;

const Content = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const Wrapper = styled.div`
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

interface Props {
  text: string;
}

const Error: React.FunctionComponent<Props> = ({ text }) => (
  <Container>
    <Content>
      <Wrapper>
        <img src={DEFAULT_IMAGE} alt="Not support book" />
        <div>
          {text}
        </div>
      </Wrapper>
    </Content>
  </Container>
);

export default Error;
