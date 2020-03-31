import React from 'react';
import { useSelector } from 'react-redux';
import { NextPageContext, NextPage } from 'next';

import { fetchGetBooks } from '../lib/fetch';

import Layout from '../components/Layout';
import BookList from '../components/books/BookList';

import * as booksActions from '../reducers/books';

import { ReducerStates } from '../interfaces';

const Home: NextPage = () => {
  const { list } = useSelector((state: ReducerStates) => state.books);

  return (
    <Layout>
      {
        list
        && <BookList books={list} />
      }
    </Layout>
  );
};

// eslint-disable-next-line @typescript-eslint/unbound-method
Home.getInitialProps = async (context: NextPageContext<any>): Promise<any> => {
  const { req, store } = context;
  let booksInfo = null;

  if (req) {
    const { getBooks } = require('../server.util');
    booksInfo = await getBooks();
  } else {
    booksInfo = await fetchGetBooks();
  }
  store.dispatch(booksActions.setBookList([...booksInfo]));
};

export default Home;
