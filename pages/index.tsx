import React, { useEffect, useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { NextPageContext, NextPage } from 'next';

import { fetchGetBooks } from '../lib/fetch';
import { setLibraryOrder, getLibraryOrder } from '../lib/localStorage';

import Layout from '../components/Layout';
import BookList from '../components/books/BookList';

import * as booksActions from '../reducers/books';

import { ReducerStates } from '../interfaces';
import { BooksState } from '../interfaces/books';

const Home: NextPage = () => {
  const [orderedList, setOrderedList] = useState(null);

  const { list }: BooksState = useSelector((state: ReducerStates) => state.books);

  const getByOrderedItems = useCallback((orderedItems: string[]) => {
    const newOrderedItems = [];
    orderedItems.forEach((orderedItem) => {
      list.some((bookInfo) => {
        if (bookInfo.fileName === orderedItem) {
          newOrderedItems.push(bookInfo);
          return true;
        }
        return false;
      });
    });

    return newOrderedItems;
  }, [list]);

  useEffect(() => {
    const orderedItems = getLibraryOrder();
    if (orderedItems) {
      setOrderedList(
        getByOrderedItems(orderedItems),
      );
    } else {
      setLibraryOrder(list.map((item) => item.fileName));
      setOrderedList(list);
    }
  }, [list, getByOrderedItems]);

  return (
    <Layout>
      {
        orderedList
        && <BookList books={orderedList} />
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
