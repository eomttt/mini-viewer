import React from 'react';
import { useSelector } from 'react-redux';
import Head from 'next/head';
import { ReducerStates } from '../interfaces';
import { EpubBookViewer } from '../interfaces/books';


const Layout: React.FunctionComponent = ({ children }) => {
  const book: EpubBookViewer | null = useSelector((state: ReducerStates) => state.book);

  return (
    <>
      <Head>
        <style>
          {book && book.styleText ? book.styleText : ''}
        </style>
      </Head>
      {children}
    </>
  );
};

export default Layout;
