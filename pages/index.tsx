import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NextPage } from 'next';

import { fetchGetBooks } from '../lib/fetch';
import { setLibraryOrder, getLibraryOrder } from '../lib/localStorage';

import Layout from '../components/Layout';
import BookList from '../components/books/BookList';

import * as booksActions from '../reducers/books';

import { ReducerStates } from '../interfaces';
import { BooksState, BookListItem } from '../interfaces/books';

const Home: NextPage = () => {
  const dispatch = useDispatch();

  const { list }: BooksState = useSelector((state: ReducerStates) => state.books);

  const getByOrderedItems = useCallback((
    orderedItems: string[],
    bookListItems: BookListItem[],
  ): BookListItem[] => {
    const newOrderedItems = [];
    orderedItems.forEach((orderedItem) => {
      bookListItems.some((bookListItem) => {
        if (bookListItem.fileName === orderedItem) {
          newOrderedItems.push(bookListItem);
          return true;
        }
        return false;
      });
    });
    return newOrderedItems;
  }, []);

  const setBooksInfo = useCallback(async () => {
    const bookListItems = await fetchGetBooks();
    const orderedItems = getLibraryOrder();

    let sortedBooksInfo = [...bookListItems];
    if (bookListItems && orderedItems) {
      sortedBooksInfo = getByOrderedItems(orderedItems, bookListItems);
    } else {
      setLibraryOrder(bookListItems.map((bookListItem) => bookListItem.fileName));
    }
    dispatch(booksActions.setBookList([...sortedBooksInfo]));
  }, []);

  useEffect(() => {
    if (list && list.length > 0) {
      // Already exist
    } else {
      setBooksInfo();
    }
  }, []);

  return (
    <Layout>
      {
        list
        && <BookList bookListItems={list} />
      }
    </Layout>
  );
};

export default Home;
