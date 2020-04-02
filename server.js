const express = require('express');
const fileUpload = require('express-fileupload');
const next = require('next');
const path = require('path');
const bodyParser = require('body-parser');

const { getBookListItems, getBook } = require('./server.util');
const { uploadEpubFile } = require('./server.s3');

const dev = process.env.NODE_ENV !== 'production';
const prod = process.env.NODE_ENV === 'production';

const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.use('/', express.static(path.join(__dirname, 'public')));
  server.use(express.json());
  server.use(express.urlencoded({ extended: true }));
  server.use(bodyParser.urlencoded({
    extended: false,
  }));
  server.use(fileUpload());

  server.post('/upload-epub', async (req, res) => {
    try {
      const { files } = req;
      const result = await uploadEpubFile(files.file);
      res.send({
        location: result.key,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  });

  server.get('/books', async (req, res) => {
    try {
      const bookListItems = await getBookListItems();
      res.send({
        bookListItems,
      });
    } catch (error) {
      res.status(500).send(error);
    }
  });

  server.get('/book', async (req, res) => {
    try {
      const { query } = req;
      const { fileName } = query;
      const book = await getBook(fileName);

      res.send({
        book,
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
