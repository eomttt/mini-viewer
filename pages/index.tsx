import React, { useCallback, useState, useEffect } from 'react';
import { useQuery } from 'react-apollo';
import { gql } from 'apollo-boost';
import { NextPage } from 'next';

import { setLibraryOrder, getLibraryOrder } from '../lib/localStorage';

import Layout from '../components/Layout';
import Loading from '../components/common/Loading';
import Error from '../components/common/Error';
import NoBookList from '../components/books/NoBookList';
import BookList from '../components/books/BookList';
import UploadBook from '../components/books/UploadBook';

import { subTransparentColor } from '../styles';

import { REFETCH_NETWORK_STATUS } from '../constants';

import { BookListItem } from '../interfaces/books';

const GET_BOOK_LIST_QUERY = gql`
  query {
    bookList {
      fileName
      coverImage
      title
    }
  }
`;

const Home: NextPage = () => {
  const {
    loading, error, data: queryData, networkStatus, refetch,
  } = useQuery(GET_BOOK_LIST_QUERY, {
    notifyOnNetworkStatusChange: true,
  });

  const [bookList, setBookList] = useState<BookListItem[]>([]);
  const [refetchingText, setRefetchingText] = useState('');

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

    bookListItems.forEach((bookListItem) => {
      if (!newOrderedItems.includes(bookListItem)) {
        newOrderedItems.push(bookListItem);
      }
    });

    return newOrderedItems;
  }, []);

  const getOrderedBookListItems = useCallback((bookListItems) => {
    const orderedItems = getLibraryOrder();
    let sortedBooksInfo = [...bookListItems];
    if (bookListItems && orderedItems) {
      sortedBooksInfo = getByOrderedItems(orderedItems, bookListItems);
    }
    return [...sortedBooksInfo];
  }, []);

  useEffect(() => {
    if (queryData && queryData.bookList) {
      const orderedBookList = getOrderedBookListItems(queryData.bookList);
      setLibraryOrder(orderedBookList.map((orderedBook) => orderedBook.fileName));
      setBookList([...orderedBookList]);
    }
  }, [queryData]);

  if (loading && networkStatus !== REFETCH_NETWORK_STATUS) {
    return <Loading text="책을 가져오고 있습니다. 잠시만 기다려주세요." />;
  }
  if (error) {
    return <Error text="책을 가져오는데 에러가 발생하였습니다. 잠시 후 다시 시도해주세요" />;
  }

  return (
    <Layout>
      {
        networkStatus === REFETCH_NETWORK_STATUS
        && (
        <Loading
          text={refetchingText}
          backgroundColor={subTransparentColor}
        />
        )
      }
      {
        bookList.length > 0
          ? (
            <BookList
              bookListItem={bookList}
              refetchBookList={() => {
                setRefetchingText('책을 삭제하고 있습니다...');
                refetch();
              }}
            />
          )
          : <NoBookList />
      }
      <UploadBook
        bookListItem={bookList}
        refetchBookList={() => {
          setRefetchingText('책을 추가하고 있습니다...');
          refetch();
        }}
      />
    </Layout>
  );
};

export default Home;
