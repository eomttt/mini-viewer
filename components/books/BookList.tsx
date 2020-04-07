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

  useEffect(() => {
    setBookList([...bookListItem]);
    setLibraryOrder(bookListItem.map((orderedBook) => orderedBook.fileName));
  }, [bookListItem]);

  const onClickDeleteBook = useCallback((
    e, index: number,
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

  return (
    <ul>
      {
        bookList.map(({ fileName, coverImage, title }, index) => (
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
              onClick={(e) => onClickDeleteBook(e, index)}
            />
          </Cover>
        ))
      }
    </ul>
  );
};

export default BookList;
