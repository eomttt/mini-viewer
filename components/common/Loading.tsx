import React from 'react';
import styled from 'styled-components';
import { subColor, defaultColor } from '../../styles';

const Container = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${(props) => (props.styleProps.backgroundColor ? props.styleProps.backgroundColor : '#dedede')};
  z-index: 6;
`;

const Content = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  & div {
    width: 100%;
    text-align: center;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    color: ${defaultColor};
    text-shadow: 1px 1px ${subColor};
    font-size: 1.5em;
    font-weight: bold;
  }
`;

interface Props {
  text: string;
  backgroundColor?: string;
}

const Loading: React.FunctionComponent<Props> = ({ text, backgroundColor }) => (
  <Container
    styleProps={{
      backgroundColor,
    }}
  >
    <Content>
      <div>
        {text}
      </div>
    </Content>
  </Container>
);

export default Loading;
