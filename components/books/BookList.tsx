import React, { useCallback, useState, useEffect } from 'react';
import { Mutation } from 'react-apollo';
import { gql } from 'apollo-boost';
import Router from 'next/router';
import styled from 'styled-components';

import { setLibraryOrder } from '../../lib/localStorage';

import { subColor } from '../../styles';

import { BookListItem } from '../../interfaces/books';

import { VIEWER_PATH_NAME } from '../../constants/viewer';

const CancelIcon = styled.img`
  width: 1.5em;
  box-shadow: none;
  position: absolute;
  top: -3%;
  right: -6%;
  display: none;
`;

const Cover = styled.li`
  width: 10em;
  display: inline-block;
  margin: 1em;
  vertical-align: bottom;
  cursor: grab;
  padding: 0;
  position: relative;
  & div {
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: center;
  }

  &:hover ${CancelIcon} {
    display: initial;
  }
`;

const CoverImage = styled.img`
  width: 100%;
  user-select: none;
  box-shadow: 1px 1px 5px ${subColor};
`;

const DELETE_BOOKLIST_ITEM = gql`
  mutation DeleteBookListItem($fileName: String!) {
    deleteBookListItem(fileName: $fileName)
  }
`;

interface Props {
  list: BookListItem[];
  refetchBookList: () => void;
}

const BookList: React.FunctionComponent<Props> = ({ list, refetchBookList }) => {
  const [bookList, setBookList] = useState<BookListItem[]>(list);
  const [draggedItem, setDraggedItem] = useState<BookListItem>(null);

  useEffect(() => {
    setBookList([...list]);
  }, [list]);

  const onClickDeleteBook = useCallback((
    e, index: number,
    deleteBookListItem,
  ) => {
    e.stopPropagation();
    e.preventDefault();

    const res = window.confirm('삭제 하시겠습니까?');
    if (res) {
      const selectedFileName = bookList[index].fileName;
      deleteBookListItem({
        variables: {
          fileName: selectedFileName,
        },
      });
    } else {
      // Pass
    }
  }, [bookList]);

  const openBook = useCallback((bookIndex: number) => {
    const selectedBook = bookList[bookIndex];

    Router.push({
      pathname: VIEWER_PATH_NAME,
      query: {
        fileName: encodeURI(selectedBook.fileName),
      },
    });
  }, [bookList]);

  const dragStart = useCallback((e, index: number) => {
    setDraggedItem(bookList[index]);
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', e.target.parentNode);
    e.dataTransfer.setDragImage(e.target.parentNode, 20, 20);
  }, [bookList]);

  const dragOver = useCallback((e, index) => {
    e.preventDefault();
    const draggedOverItem = bookList[index];

    if (draggedItem.fileName === draggedOverItem.fileName) {
      return;
    }

    const newSortedBooks = bookList.filter((item) => item.fileName !== draggedItem.fileName);
    newSortedBooks.splice(index, 0, draggedItem);

    setBookList([...newSortedBooks]);
    setLibraryOrder(newSortedBooks.map((item) => item.fileName));
  }, [bookList, draggedItem]);

  const dragEnd = useCallback((e) => {
    e.preventDefault();
  }, []);

  const renderBookListItem = useCallback((listItem: BookListItem[], mutationProps) => {
    const { deleteBookListItem } = mutationProps;
    return (
      <>
        {
          listItem.map(({ fileName, coverImage, title }, index) => (
            <Cover
              onClick={() => openBook(index)}
              onDragOver={(e) => dragOver(e, index)}
              key={fileName}
            >
              <CoverImage
                src={coverImage}
                draggable
                onDragStart={(e) => dragStart(e, index)}
                onDragEnd={dragEnd}
                alt="Cover"
              />
              <div>
                {title}
              </div>
              <CancelIcon
                src="close-icon.svg"
                alt="Close"
                onClick={(e) => onClickDeleteBook(e, index, deleteBookListItem)}
              />
            </Cover>
          ))
        }
      </>

    );
  }, [onClickDeleteBook, openBook,
    dragOver, dragStart, dragEnd]);

  return (
    <ul>
      <Mutation
        mutation={DELETE_BOOKLIST_ITEM}
        update={() => {
          refetchBookList();
        }}
      >
        {(deleteBookListItem, result) => renderBookListItem(bookList, {
          deleteBookListItem,
          result,
        })}
      </Mutation>
    </ul>
  );
};

export default BookList;
