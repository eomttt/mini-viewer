import React from 'react';
import { NextPageContext, NextPage } from 'next';

import styled from 'styled-components';

const Container = styled.div`
  color: blue
`;

const Home: NextPage = () => {
  return (
    <Container>
      HOME
    </Container>
  );
};

// eslint-disable-next-line @typescript-eslint/unbound-method
Home.getInitialProps = async (context: NextPageContext<any>): Promise<any> => {

};

export default Home;
