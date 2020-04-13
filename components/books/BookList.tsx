import React, { useCallback, useState, useEffect } from 'react';
import Router from 'next/router';
import styled from 'styled-components';

import { subColor } from '../../styles';

import { setLibraryOrder } from '../../lib/localStorage';

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

interface Props {
  bookListItem: BookListItem[];
  deleteBookListItem: (params: {
    variables: {
      fileName: string;
    };
  }) => void;
}

const BookList: React.FunctionComponent<Props> = ({ bookListItem, deleteBookListItem }) => {
  const [bookList, setBookList] = useState<BookListItem[]>([]);
  const [draggedItem, setDraggedItem] = useState<BookListItem>(null);

  const deleteBookInList = useCallback((index: number): void => {
    deleteBookListItem({
      variables: {
        fileName: bookList[index].fileName,
      },
    });
  }, [bookList]);

  const onClickDeleteBook = useCallback((
    e, index: number,
  ): void => {
    e.stopPropagation();
    e.preventDefault();

    const res = window.confirm('삭제 하시겠습니까?');
    if (res) {
      deleteBookInList(index);
    } else {
      // Pass
    }
  }, [deleteBookInList]);

  const openBook = useCallback((bookIndex: number) => {
    Router.push({
      pathname: VIEWER_PATH_NAME,
      query: {
        fileName: encodeURI(bookList[bookIndex].fileName),
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

  useEffect(() => {
    setBookList([...bookListItem]);
    setLibraryOrder(bookListItem.map((orderedBook) => orderedBook.fileName));
  }, [bookListItem]);

  return (
    <ul>
      {
        bookList.map(({ fileName, coverImage, titles }, index) => (
          <Cover
            onClick={(): void => openBook(index)}
            onDragOver={(e): void => dragOver(e, index)}
            key={fileName}
          >
            <CoverImage
              src={coverImage}
              draggable
              onDragStart={(e): void => dragStart(e, index)}
              onDragEnd={dragEnd}
              alt="Cover"
            />
            <div>
              {titles}
            </div>
            <CancelIcon
              src="close-icon.svg"
              alt="Close"
              onClick={(e): void => onClickDeleteBook(e, index)}
            />
          </Cover>
        ))
      }
    </ul>
  );
};

export default BookList;
