import React, { useCallback, useState } from 'react';

import styled from 'styled-components';

import { subColor } from '../../styles';

import { EpubBook } from '../../interfaces/books';

import { DEFAULT_IMAGE } from '../../constants/books';

const Container = styled.ul``;

const CoverImage = styled.li`
  width: 10em;
  min-height: 13em;
  border: 1px solid ${subColor};
  display: inline-block;
  margin: 1em;
  vertical-align: bottom;
  & img {
    width: 100%;
  }
`;

interface Props {
  books: EpubBook[];
}

const BookList: React.FunctionComponent<Props> = ({ books }) => {
  const [bookList, setBookList] = useState(books);
  const [draggedItem, setDraggedItem] = useState<EpubBook>(null);

  const dragStart = useCallback((e, index) => {
    setDraggedItem(bookList[index]);
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', e.target.parentNode);
    e.dataTransfer.setDragImage(e.target.parentNode, 20, 20);
  }, [bookList]);

  const dragOver = useCallback((index) => {
    const draggedOverItem = bookList[index];

    if (draggedItem.publicPath === draggedOverItem.publicPath) {
      return;
    }

    const newSortedBooks = bookList.filter((book) => book.publicPath !== draggedItem.publicPath);
    newSortedBooks.splice(index, 0, draggedItem);
    setBookList(newSortedBooks);
  }, [bookList, draggedItem]);

  const dragEnd = useCallback((e) => {
    e.preventDefault();
  }, []);

  return (
    <Container>
      {
        bookList.map(({ cover, publicPath }, index) => (
          <CoverImage
            onDragOver={() => dragOver(index)}
            key={publicPath}
          >
            <img
              src={cover ? `${publicPath}/${cover.href}` : DEFAULT_IMAGE}
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
