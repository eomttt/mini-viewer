import React from 'react';
import { NextPageContext } from 'next';
import styled from 'styled-components';

const Container = styled.div`
`;

const Home = (bookInfo) => {
  console.log('RRR', bookInfo);
  const { items, book } = bookInfo;

  const {
    items: bookItems, images, styles, ncx,
  } = book;

  const imagesId = images.map((image) => image.id);
  const stylesId = styles.map((style) => style.id);

  const renderItems = (): JSX.Element => bookItems.map((bookItem, idx) => {
    if (imagesId.includes(bookItem.id)) {
      return <img src={`data:image/jpeg;base64,${items[idx].toString('base64')}`} alt="test" key={idx} />;
    }
    if (stylesId.includes(bookItem.id)) {
      return <style key={idx}>{items[idx]}</style>;
    }
    if (ncx.id === bookItem.id) {
      return <div key={idx}>NCX</div>;
    }
    // eslint-disable-next-line react/no-danger
    return <div dangerouslySetInnerHTML={{ __html: items[idx] }} key={idx} />;
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
        parseStyle: false,
      });
      const spines = await parser.readItems(book.spines);
      const items = await parser.readItems(book.items, {
        force: true,
        extractBody: true,
        serializedAnchor: true,
        ignoreScript: true,
        basePath: 'http://www.gutenberg.org/files/61625/61625-h/images',
      });

      return {
        book,
        spines,
        items,
      };
    } catch (error) {
      console.log('Error', error);
    }
  }


  return {};
};

export default Home;
