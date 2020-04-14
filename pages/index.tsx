import React from 'react';
import { NextPage } from 'next';

import Layout from '../components/Layout';
import Books from '../components/books';

const Home: NextPage = () => (
  <Layout>
    <Books />
  </Layout>
);

export default Home;
