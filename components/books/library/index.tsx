import React, { useState } from 'react';
import { useMutation, useQuery } from 'react-apollo';

import { subTransparentColor } from '../../../styles';

import UploadBook from './UploadBook';
import BookList from './BookList';
import NoBookList from '../NoBookList';
import Loading from '../../common/Loading';
import Error from '../../common/Error';

import { REFETCH_NETWORK_STATUS } from '../../../constants';

import {
  GET_BOOK_LIST_QUERY,
  DELETE_BOOKLIST_ITEM,
} from '../../../apollo/query';

import { useOrderedBookList } from '../../../hooks';

import { BookListItem } from '../../../interfaces/books';

const Library: React.FunctionComponent = () => {
  const [deleteBookListItem] = useMutation(DELETE_BOOKLIST_ITEM, {
    update(cache, { data: mutationData }) {
      const { bookList }: {bookList: BookListItem[]} = cache.readQuery({
        query: GET_BOOK_LIST_QUERY,
      });
      cache.writeQuery({
        query: GET_BOOK_LIST_QUERY,
        data: {
          bookList:
            bookList.filter((item) => item.fileName !== mutationData.deleteBookListItem),
        },
      });
    },
  });
  const {
    loading, error, data: queryData,
    networkStatus, refetch,
  } = useQuery(GET_BOOK_LIST_QUERY, {
    notifyOnNetworkStatusChange: true,
  });

  const [refetchText, setRefetchText] = useState<string>('');
  const bookListItem: BookListItem[] = useOrderedBookList(queryData && queryData.bookList);

  if (loading && networkStatus !== REFETCH_NETWORK_STATUS) {
    return <Loading text="책을 가져오고 있습니다. 잠시만 기다려주세요." />;
  }

  if (error) {
    return <Error text="책을 가져오는데 에러가 발생하였습니다. 잠시 후 다시 시도해주세요" />;
  }

  return (
    <>
      {
        networkStatus === REFETCH_NETWORK_STATUS
        && (
        <Loading
          text={refetchText}
          backgroundColor={subTransparentColor}
        />
        )
      }
      {
        bookListItem.length > 0
          ? (
            <BookList
              bookListItem={bookListItem}
              deleteBookListItem={deleteBookListItem}
            />
          )
          : <NoBookList />
      }
      <UploadBook
        bookListItem={bookListItem}
        refetchBookList={() => {
          setRefetchText('책을 추가하고 있습니다...');
          refetch();
        }}
      />
    </>
  );
};

export default Library;
