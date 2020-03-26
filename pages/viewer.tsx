import React, {
  useState, useEffect,
} from 'react';
import { useSelector } from 'react-redux';
import { NextPageContext, NextPage } from 'next';

import styled from 'styled-components';


import Layout from '../components/Layout';
import ViewerPagesController from '../components/viewer/ViewerPagesController';
import ViewerBottom from '../components/viewer/ViewerBottom';
import ViewerHeader from '../components/viewer/ViewerHeader';
import ViewerNotSupport from '../components/viewer/ViewerNotSupport';

import { getBookInfo } from '../lib/util';

import { VIEWER_WIDTH_RATIO, VIEWER_HEIGHT_RATIO } from '../constants/viewer';

import { ReducerState } from '../interfaces';
import { EpubBook, BookInfo, BooksState } from '../interfaces/books';

const Container = styled.div`
  padding: ${(props) => props.styleProps.menuHeight}px ${(100 - VIEWER_WIDTH_RATIO) / 2}%;
  background-color: ${(props) => props.styleProps.backgroundColor};
  text-align: center;
`;

interface Props {
  book: EpubBook;
  viewers: string[];
  styleText: string;
}

const Viewer: NextPage<Props> = ({ book, viewers = [], styleText = '' }) => {
  const [menuHeight, setMenuHeight] = useState(0);
  const { backgroundColor } = useSelector((state: ReducerState) => state.viewerSetting);

  useEffect(() => {
    const windowHeight = window.innerHeight;
    setMenuHeight((windowHeight - (windowHeight * (VIEWER_HEIGHT_RATIO / 100))) / 2);
  }, []);

  if (!book) {
    return (
      <ViewerNotSupport />
    );
  }

  return (
    <Layout
      styleText={styleText}
    >
      <ViewerHeader
        menuHeight={menuHeight}
        titles={book.titles}
        authors={book.contributors}
        ncxItem={book.ncx}
      />
      <Container
        styleProps={{
          menuHeight,
          backgroundColor,
        }}
      >
        <ViewerPagesController
          spines={book.spines}
          viewers={viewers}
        />
      </Container>
      <ViewerBottom
        menuHeight={menuHeight}
      />
    </Layout>
  );
};

const parsingBook = async (fileName: string): Promise<BookInfo> => {
  // Server side render
  const fs = require('fs');
  const { EpubParser } = require('@ridi/epub-parser');

  try {
    const bookInfo = await getBookInfo({
      EpubParser,
      FileSystem: fs,
      dirPath: 'public',
      fileName,
    });

    return {
      ...bookInfo,
    };
  } catch (error) {
    console.log('Error', error);
  }

  return null;
};

const getBookInfoInStore = (books: BooksState, fileName: string) => {
  const { list } = books;

  let selectedBookInfo = list[0];
  list.some((bookInfo) => {
    if (bookInfo.fileName === fileName) {
      selectedBookInfo = bookInfo;
      return true;
    }
    return false;
  });

  return {
    ...selectedBookInfo,
  };
};

// eslint-disable-next-line @typescript-eslint/unbound-method
Viewer.getInitialProps = async (context: NextPageContext<any>): Promise<any> => {
  const { req, store, query } = context;
  const { books }: ReducerState = store.getState();
  const { fileName } = query;
  const queryName = decodeURI(String(fileName || 'jikji'));

  if (req) {
    const bookInfo = await parsingBook(queryName);
    return bookInfo;
  }

  // Client side render
  return getBookInfoInStore(books, queryName);
};

export default Viewer;
