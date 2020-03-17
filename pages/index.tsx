import React from 'react';
import { NextPage } from 'next';
import styled from 'styled-components';

const Test = styled.div`
  background-color: black;
  color: white;
`

const Home: NextPage = () => {
  return (
    <Test>
      Home
    </Test>
  );
};

export default Home;
