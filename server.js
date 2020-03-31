const express = require('express');
const next = require('next');
const path = require('path');


const { getBooks, getBook } = require('./server.util');

const dev = process.env.NODE_ENV !== 'production';
const prod = process.env.NODE_ENV === 'production';

const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.use('/', express.static(path.join(__dirname, 'public')));
  server.use(express.json());
  server.use(express.urlencoded({ extended: true }));

  server.get('/books', async (req, res) => {
    try {
      const booksInfo = await getBooks();
      res.send({
        books: booksInfo,
      });
    } catch (error) {
      res.status(500).send(error);
    }
  });

  server.get('/book', async (req, res) => {
    try {
      const { query } = req;
      const { fileName } = query;

      const bookInfo = await getBook(fileName);
      res.send({
        book: bookInfo,
      });
    } catch (error) {
      res.status(500).send(error);
    }
  });

  server.get('*', (req, res) => handle(req, res));

  server.listen(prod ? process.env.PORT : 3000, () => {
    console.log(`Next+Express running on port ${prod ? process.env.PORT : 3000}`);
  });
});
