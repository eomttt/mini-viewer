import React from 'react';
import { NextPageContext, NextPage } from 'next';

import styled from 'styled-components';

import Layout from '../components/Layout';
import BookList from '../components/books/BookList';

import { EpubBook } from '../interfaces/books';

interface Props {
  books: EpubBook[];
}

const Home: NextPage<Props> = ({ books }) => {
  console.log('AAAA', books);

  return (
    <Layout>
      <BookList books={books} />
    </Layout>
  );
};
// eslint-disable-next-line @typescript-eslint/unbound-method
Home.getInitialProps = async (context: NextPageContext<any>): Promise<any> => {
  const { req } = context;
  if (req) {
    const fs = require('fs');
    const { EpubParser } = require('@ridi/epub-parser');
    const books: EpubBook[] = [];

    const files = fs.readdirSync('public/');
    try {
      // eslint-disable-next-line no-restricted-syntax
      for (const file of files) {
        if (file.includes('.epub')) {
          const fileName = file.split('.epub')[0];
          const parser = new EpubParser(`public/${file}`);
          // eslint-disable-next-line no-await-in-loop
          const book: EpubBook = await parser.parse({
            validatePackage: true,
            parseStyle: false,
            unzipPath: `public/epub/${fileName}`,
          });

          books.push({
            ...book,
            publicPath: `epub/${fileName}`,
          });
        }
      }
      return {
        books,
      };
    } catch (error) {
      console.log('Error', error);
    }
  }
  return {};
};

export default Home;
