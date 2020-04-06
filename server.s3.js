const fs = require('fs');
const AWS = require('aws-sdk');

let awsConfig = {};

try {
  awsConfig = require('./config/aws-0401.config.json');
} catch (error) {
  awsConfig = {};
}

const { AWS_BUCKET_NAME, BOOKS_LIST_DIR } = require('./server.constant.js');

AWS.config.update({
  accessKeyId: awsConfig.accessKeyId || process.env.accessKeyId,
  secretAccessKey: awsConfig.secretAccessKey || process.env.secretAccessKey,
});
const s3 = new AWS.S3();

const getRandomNumber = () => {
  return Math.floor(Math.random() * 10000);
};

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
      if (data) {
        const epubFileKeys = data.Contents.filter((content) => {
          const { Key } = content;
          return isEpubFile(Key);
        }).map((content) => {
          const { Key } = content;
          return Key.split(`${BOOKS_LIST_DIR}/`)[1];
        });
        resolve(epubFileKeys);
      }
      resolve([]);
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
      if (data) {
        const downLoadFileName = `${fileName}-${getRandomNumber()}`;

        fs.writeFileSync(`public/${downLoadFileName}.epub`, data.Body);
        resolve(downLoadFileName);
      }
      resolve(null);
    });
  })
);

const uploadEpubFile = (file) => (
  new Promise((resolve, reject) => {
    const params = {
      Bucket: AWS_BUCKET_NAME,
      Key: `${BOOKS_LIST_DIR}/${file.name}`,
      ACL: 'public-read',
      ContetnType: file.mimetype,
      Body: file.data,
    };
    s3.upload(params, (error, data) => {
      if (error) {
        reject(error);
      }
      if (data) {
        resolve(data);
      }
      resolve(null);
    });
  })
);

const uploadEpubImageFiles = (fileName, image, type) => (
  new Promise((resolve, reject) => {
    const params = {
      Bucket: AWS_BUCKET_NAME,
      Key: `${BOOKS_LIST_DIR}/${fileName}`,
      ACL: 'public-read',
      ContetnType: type,
      Body: fs.createReadStream(image),
    };
    s3.upload(params, (error, data) => {
      if (error) {
        reject(error);
      }
      if (data) {
        resolve(data);
      }
      resolve(null);
    });
  })
);

const deleteEpubFile = (fileName) => (
  new Promise((resolve, reject) => {
    const params = {
      Bucket: AWS_BUCKET_NAME,
      Key: `${BOOKS_LIST_DIR}/${fileName}.epub`,
    };
    s3.deleteObject(params, (error, data) => {
      if (error) {
        reject(error);
      }
      if (data) {
        resolve('Success to remove');
      }
    });
  })
);

module.exports.getEpubFileKeys = getEpubFileKeys;
module.exports.getEpubFile = getEpubFile;
module.exports.uploadEpubFile = uploadEpubFile;
module.exports.uploadEpubImageFiles = uploadEpubImageFiles;
module.exports.deleteEpubFile = deleteEpubFile;
