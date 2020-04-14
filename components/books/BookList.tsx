import React, { useCallback, useState, useEffect } from 'react';
import Router from 'next/router';

import * as Styled from '../../styles/books';

import { setLibraryOrder } from '../../lib/localStorage';

import { BookListItem } from '../../interfaces/books';
import { BookListProps } from '../../interfaces/books/props';

import { VIEWER_PATH_NAME } from '../../constants/viewer';

const BookList: React.FunctionComponent<BookListProps> = ({ bookListItem, deleteBookListItem }) => {
  const [bookList, setBookList] = useState<BookListItem[]>([]);
  const [draggedItem, setDraggedItem] = useState<BookListItem>(null);

  const deleteBookInList = useCallback((index: number): void => {
    deleteBookListItem({
      variables: {
        fileName: bookList[index].fileName,
      },
    });
  }, [bookList]);

  const setNewBookList = useCallback((newBookList: BookListItem[]) => {
    setBookList([...newBookList]);
    setLibraryOrder(newBookList.map((orderedBook) => orderedBook.fileName));
  }, []);

  const sortDraggedBookList = useCallback((draggedBookIndex: number) => {
    const newSortedBooks = bookList.filter((item) => item.fileName !== draggedItem.fileName);
    newSortedBooks.splice(draggedBookIndex, 0, draggedItem);
    setNewBookList(newSortedBooks);
  }, [bookList, draggedItem]);

  const onClickDeleteBook = useCallback((
    e: React.MouseEvent<HTMLImageElement, MouseEvent>,
    index: number,
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

  const dragStart = useCallback((e: React.DragEvent<HTMLImageElement>, index: number) => {
    setDraggedItem(bookList[index]);
    const node = e.target as HTMLElement;
    const nodeImage = node.parentNode as Element;
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setDragImage(nodeImage, 20, 20);
  }, [bookList]);

  const dragOver = useCallback((e: React.DragEvent<HTMLLIElement>, index: number) => {
    e.preventDefault();
    const draggedOverItem = bookList[index];

    if (draggedItem.fileName === draggedOverItem.fileName) {
      return;
    }
    sortDraggedBookList(index);
  }, [draggedItem, bookList, sortDraggedBookList]);

  const dragEnd = useCallback((e: React.DragEvent<HTMLImageElement>) => {
    e.preventDefault();
  }, []);

  useEffect(() => {
    setNewBookList(bookListItem);
  }, [bookListItem]);

  return (
    <ul>
      {
        bookList.map(({ fileName, coverImage, titles }, index) => (
          <Styled.BookListCover
            onClick={(): void => openBook(index)}
            onDragOver={(e): void => dragOver(e, index)}
            key={fileName}
          >
            <Styled.BookListCoverImage
              src={coverImage}
              draggable
              onDragStart={(e): void => dragStart(e, index)}
              onDragEnd={dragEnd}
              alt="Cover"
            />
            <div>
              {titles}
            </div>
            <Styled.BookListCancelIcon
              src="close-icon.svg"
              alt="Close"
              onClick={(e): void => onClickDeleteBook(e, index)}
            />
          </Styled.BookListCover>
        ))
      }
    </ul>
  );
};

export default BookList;
