import React from 'react';
import { NextPageContext } from 'next';
import styled from 'styled-components';

const Container = styled.div`
`;

const Home = (bookInfo) => {
  console.log('RRR', bookInfo);
  const { readItems, book, basePath } = bookInfo;

  const {
    items, images, styles, ncx,
  } = book;

  const imagesId = images.map((image) => image.id);
  const stylesId = styles.map((style) => style.id);

  const renderBookItem = (bookItem, readItem): JSX.Element => {
    if (imagesId.includes(bookItem.id)) {
      return <img src={`${basePath}/${bookItem.href}`} alt="Cover" />;
    }
    if (stylesId.includes(bookItem.id)) {
      return <link rel="stylesheet" href={`${basePath}/${bookItem.href}`} />;
    }
    if (ncx.id === bookItem.id) {
      return <div>NCX</div>;
    }
    // eslint-disable-next-line react/no-danger
    return <div dangerouslySetInnerHTML={{ __html: readItem }} />;
  };

  const renderItems = (): JSX.Element => items.map((item, idx) => {
    return (
      <section key={idx}>
        {renderBookItem(item, readItems[idx])}
      </section>
    );
  });

  return (
    <Container>
      {renderItems()}
    </Container>
  );
};

Home.getInitialProps = async (context: NextPageContext): Promise<any> => {
  const { req } = context;
  if (req) {
    const { EpubParser } = require('@ridi/epub-parser');
    try {
      const parser = new EpubParser('public/pg61625-images.epub');
      const book = await parser.parse({
        validatePackage: true,
        parseStyle: false,
        unzipPath: 'public/epub/pg61625-images',
      });
      const readSpines = await parser.readItems(book.spines);
      const readItems = await parser.readItems(book.items, {
        force: true,
        extractBody: true,
        serializedAnchor: true,
        ignoreScript: true,
        basePath: 'epub/pg61625-images',
      });

      return {
        book,
        readSpines,
        readItems,
        basePath: 'epub/pg61625-images',
      };
    } catch (error) {
      console.log('Error', error);
    }
  }


  return {};
};

export default Home;
