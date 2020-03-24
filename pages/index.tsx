import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { NextPageContext, NextPage } from 'next';

import Layout from '../components/Layout';
import BookList from '../components/books/BookList';

import * as booksActions from '../reducers/books';

import { getBookInfo, isEpubFile, isProduction } from '../lib/util';

import { ReducerState } from '../interfaces';
import { BookInfo } from '../interfaces/books';

interface Props {
  test: string[];
}

const Home: NextPage<Props> = ({ test }) => {
  const { list } = useSelector((state: ReducerState) => state.books);

  useEffect(() => {
    if (!list) {
      window.location.reload();
    }
  }, [list]);

  return (
    <Layout>
      {
        list
        && <BookList books={list} />
      }
    </Layout>
  );
};

// eslint-disable-next-line @typescript-eslint/unbound-method
Home.getInitialProps = async (context: NextPageContext<any>) => {
  const { req, store } = context;
  if (req) {
    const fs = require('fs');
    const path = require('path');
    const { EpubParser } = require('@ridi/epub-parser');

    const dirPath = isProduction() ? path.join(__dirname) : 'public/';

    const files = fs.readdirSync(dirPath);
    console.log('files', files);
    const booksInfo: BookInfo[] = [];

    // eslint-disable-next-line no-restricted-syntax
    for (const file of files) {
      if (isEpubFile(file)) {
        const [fileName] = file.split('.epub');
        const epubPath = `epub/${fileName}`;
        try {
          const { book, viewers } = await getBookInfo(EpubParser, {
            epubFile: fileName,
            epubPath,
          });

          booksInfo.push({
            book,
            viewers,
            publicPath: epubPath,
          });
        } catch (error) {
          console.log('Error index.', error);
        }
      }
    }
    store.dispatch(booksActions.setBookList(booksInfo));
    return {
      test: files,
    };
  }
  return {
    test: 'WOWO',
  };
};

export default Home;
