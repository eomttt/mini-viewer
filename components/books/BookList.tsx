import React, { useCallback, useState } from 'react';
import Router from 'next/router';

import styled from 'styled-components';

import { setLibraryOrder } from '../../lib/localStorage';

import { subColor } from '../../styles';

import { BookListItem } from '../../interfaces/books';

import { VIEWER_PATH_NAME } from '../../constants/viewer';

const Container = styled.ul``;

const CoverImage = styled.li`
  width: 10em;
  display: inline-block;
  margin: 1em;
  vertical-align: bottom;
  cursor: grab;
  padding: 0;
  & img {
    width: 100%;
    user-select: none;
    box-shadow: 1px 1px 5px ${subColor};
  }
  & div {
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: center;
  }
`;

interface Props {
  bookListItems: BookListItem[];
}

const BookList: React.FunctionComponent<Props> = ({ bookListItems }) => {
  const [bookList, setBookList] = useState(bookListItems);
  const [draggedItem, setDraggedItem] = useState<BookListItem>(null);

  const openBook = useCallback((bookIndex: number) => {
    const selectedBook = bookList[bookIndex];

    Router.push({
      pathname: VIEWER_PATH_NAME,
      query: {
        fileName: encodeURI(selectedBook.fileName),
      },
    });
  }, [bookList]);

  const dragStart = useCallback((e, index) => {
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
    setBookList(newSortedBooks);
    setLibraryOrder(newSortedBooks.map((item) => item.fileName));
  }, [bookList, draggedItem]);

  const dragEnd = useCallback((e) => {
    e.preventDefault();
  }, []);

  return (
    <Container>
      {
        bookListItems.map(({ fileName, coverImage, title }, index) => (
          <CoverImage
            onClick={() => openBook(index)}
            onDragOver={(e) => dragOver(e, index)}
            key={fileName}
          >
            <img
              src={coverImage}
              draggable
              onDragStart={(e) => dragStart(e, index)}
              onDragEnd={dragEnd}
              alt="Cover"
            />
            <div>
              {title}
            </div>
          </CoverImage>
        ))
      }
    </Container>
  );
};

export default BookList;
