const express = require('express');
const next = require('next');
const path = require('path');

const { getBookListItems, getBook } = require('./server.util');

const dev = process.env.NODE_ENV !== 'production';
const prod = process.env.NODE_ENV === 'production';

const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.use('/', express.static(path.join(__dirname, 'public')));
  server.use(express.json());
  server.use(express.urlencoded({ extended: true }));

  server.put('/upload-epub', (req, res) => {
    // try {
    //   const { body } = req;
    //   const param = {
    //     Bucket: 'kjglass-images',
    //     Key: body.fileName,
    //     ACL: 'public-read',
    //     Body: fs.createReadStream('temp.jpg'),
    //     ContentType: 'epub',
    //   };
    //   s3.upload(param, (error, data) => {
    //     if (error) {
    //       console.log('Upload s3 error', error);
    //     }
    //     res.send({
    //       location: data.Location,
    //     });
    //   });
    // } catch (error) {
    //   res.status(500).send(error);
    // }
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
