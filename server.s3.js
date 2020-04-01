const fs = require('fs');
const AWS = require('aws-sdk');

let awsConfig = {};

try {
  awsConfig = require('./config/aws-0401.config.json');
} catch (error) {
  awsConfig = {};
}

const { AWS_BUCKET_NAME, BOOKS_LIST_DIR, TEMP_EPUB_FILE } = require('./server.constant.js');

AWS.config.update({
  accessKeyId: awsConfig.accessKeyId || process.env.accessKeyId,
  secretAccessKey: awsConfig.secretAccessKey || process.env.secretAccessKey,
});
const s3 = new AWS.S3();

const isEpubFile = (fileName) => fileName.includes('.epub');

const getEpubFileKeys = () => (
  new Promise((resolve, reject) => {
    const params = {
      Bucket: AWS_BUCKET_NAME,
      Prefix: `${BOOKS_LIST_DIR}/`,
    };
    s3.listObjects(params, (error, data) => {
      if (error) {
        reject(error);
      }
      const epubFileKeys = data.Contents.filter((content) => {
        const { Key } = content;
        return isEpubFile(Key);
      }).map((content) => {
        const { Key } = content;
        return Key.split(`${BOOKS_LIST_DIR}/`)[1];
      });
      resolve(epubFileKeys);
    });
  })
);

const getEpubFile = (fileName) => (
  new Promise((resolve, reject) => {
    const params = {
      Bucket: AWS_BUCKET_NAME,
      Key: `${BOOKS_LIST_DIR}/${fileName}.epub`,
    };
    s3.getObject(params, (error, data) => {
      if (error) {
        reject(error);
      }
      fs.writeFileSync(`public/${TEMP_EPUB_FILE}.epub`, data.Body);
      resolve(TEMP_EPUB_FILE);
    });
  })
);

module.exports.getEpubFileKeys = getEpubFileKeys;
module.exports.getEpubFile = getEpubFile;
