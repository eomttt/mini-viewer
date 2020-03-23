import React, { useCallback, useState } from 'react';
import Router from 'next/router';

import styled from 'styled-components';

import { subColor } from '../../styles';

import { BookInfo } from '../../interfaces/books';

import { DEFAULT_IMAGE } from '../../constants/books';
import { VIEWER_PATH_NAME } from '../../constants/viewer';

const Container = styled.ul``;

const CoverImage = styled.li`
  width: 10em;
  min-height: 13em;
  border: 1px solid ${subColor};
  display: inline-block;
  margin: 1em;
  vertical-align: bottom;
  cursor: grab;
  & img {
    width: 100%;
    user-select: none;
  }
`;

interface Props {
  books: BookInfo[];
}

const BookList: React.FunctionComponent<Props> = ({ books }) => {
  const [bookList, setBookList] = useState(books);
  const [draggedItem, setDraggedItem] = useState<BookInfo>(null);

  const openBook = useCallback((bookIndex: number) => {
    const selectedBook = bookList[bookIndex];

    Router.push({
      pathname: VIEWER_PATH_NAME,
      query: {
        bookPath: encodeURI(selectedBook.publicPath),
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

    if (draggedItem.publicPath === draggedOverItem.publicPath) {
      return;
    }

    const newSortedBooks = bookList.filter((item) => item.publicPath !== draggedItem.publicPath);
    newSortedBooks.splice(index, 0, draggedItem);
    setBookList(newSortedBooks);
  }, [bookList, draggedItem]);

  const dragEnd = useCallback((e) => {
    e.preventDefault();
  }, []);

  return (
    <Container>
      {
        bookList.map(({ book, publicPath }, index) => (
          <CoverImage
            onClick={() => openBook(index)}
            onDragOver={(e) => dragOver(e, index)}
            key={publicPath}
          >
            <img
              src={book.cover ? `${publicPath}/${book.cover.href}` : DEFAULT_IMAGE}
              draggable
              onDragStart={(e) => dragStart(e, index)}
              onDragEnd={dragEnd}
              alt="Cover"
            />
          </CoverImage>
        ))
      }
    </Container>
  );
};

export default BookList;
