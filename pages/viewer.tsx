import React, { useEffect, useState } from 'react';
import { NextPageContext, NextPage } from 'next';

import styled from 'styled-components';

import ViewerComponent from '../components/viewer/Viewer';

import { EpubBook } from '../interfaces/books';

interface Props {
  book: EpubBook;
  readSpines: string[];
  basePath: string;
}

const Container = styled.div`
`;

const Viewer: NextPage<Props> = (bookInfo) => {
  const [styleTags, setStyleTags] = useState([]);

  const {
    readSpines, book, basePath,
  } = bookInfo;

  useEffect(() => {
    const {
      styles,
    } = book;

    setStyleTags(styles.map((style) => <link rel="stylesheet" href={`${basePath}/${style.href}`} key={style.href} />));
  }, [basePath, book]);

  return (
    <>
      {
        styleTags.map((styleTag) => styleTag)
      }
      <ViewerComponent
        spines={book.spines}
        viewerSpines={readSpines}
      />
    </>
  );
};

// eslint-disable-next-line @typescript-eslint/unbound-method
Viewer.getInitialProps = async (context: NextPageContext<any>): Promise<any> => {
  const { req } = context;
  if (req) {
    const { EpubParser } = require('@ridi/epub-parser');
    try {
      const parser = new EpubParser('public/jikji.epub');
      const book: EpubBook = await parser.parse({
        validatePackage: true,
        parseStyle: false,
        unzipPath: 'public/epub/jikji',
      });
      const readSpines = await parser.readItems(book.spines, {
        force: true,
        extractBody: true,
        serializedAnchor: true,
        ignoreScript: true,
        basePath: 'epub/jikji',
      });

      return {
        book,
        readSpines,
        basePath: 'epub/jikji',
      };
    } catch (error) {
      console.log('Error', error);
    }
  }


  return {};
};

export default Viewer;
