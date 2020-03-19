import React, { useEffect, useState } from 'react';
import { NextPageContext, NextPage } from 'next';

import ViewerPageComponent from '../components/viewer/ViewerPage';

import { EpubBook } from '../interfaces/books';

interface Props {
  book: EpubBook;
  viewerSpines: string[];
  basePath: string;
}

const Viewer: NextPage<Props> = (bookInfo) => {
  const [styleTags, setStyleTags] = useState([]);

  const {
    viewerSpines, book, basePath,
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
      <ViewerPageComponent
        spines={book.spines}
        viewerSpines={viewerSpines}
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
      const viewerSpines = await parser.readItems(book.spines, {
        force: true,
        extractBody: true,
        serializedAnchor: true,
        ignoreScript: true,
        basePath: 'epub/jikji',
      });

      return {
        book,
        viewerSpines,
        basePath: 'epub/jikji',
      };
    } catch (error) {
      console.log('Error', error);
    }
  }


  return {};
};

export default Viewer;
