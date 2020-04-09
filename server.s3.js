const fs = require('fs');
const path = require('path');
const AWS = require('aws-sdk');

let awsConfig = {};

try {
  awsConfig = require('./config/aws-0401.config.json');
} catch (error) {
  awsConfig = {};
}

const {
  AWS_BUCKET_NAME,
  S3_EPUB_FILE_PATH,
  S3_UNZIPE_EPUB_FILE_PATH,
} = require('./server.constant.js');

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
      Prefix: `${S3_EPUB_FILE_PATH}/`,
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
          return Key.split(`${S3_EPUB_FILE_PATH}/`)[1];
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
      Key: `${S3_EPUB_FILE_PATH}/${fileName}.epub`,
    };
    s3.getObject(params, (error, data) => {
      if (error) {
        reject(error);
      }
      if (data) {
        fs.writeFileSync(`public/${fileName}.epub`, data.Body);
        resolve(fileName);
      }
      resolve(null);
    });
  })
);

const getEpubStaticInfo = (fileName) => (
  new Promise((resolve, reject) => {
    const params = {
      Bucket: AWS_BUCKET_NAME,
      Key: `${S3_UNZIPE_EPUB_FILE_PATH}/${fileName}/staticInfo.json`,
    };
    s3.getObject(params, (error, data) => {
      if (error) {
        reject(error);
      }
      if (data) {
        const epubStaticInfo = JSON.parse(data.Body.toString());
        resolve(epubStaticInfo);
      }
      resolve(null);
    });
  })
);

const getEpubViewerInfo = (fileName) => (
  new Promise((resolve, reject) => {
    const params = {
      Bucket: AWS_BUCKET_NAME,
      Key: `${S3_UNZIPE_EPUB_FILE_PATH}/${fileName}/viewerInfo.json`,
    };
    s3.getObject(params, (error, data) => {
      if (error) {
        reject(error);
      }
      if (data) {
        const epubStaticInfo = JSON.parse(data.Body.toString());
        resolve(epubStaticInfo);
      }
      resolve(null);
    });
  })
);

const uploadEpubFile = (file) => (
  new Promise((resolve, reject) => {
    const params = {
      Bucket: AWS_BUCKET_NAME,
      Key: `${S3_EPUB_FILE_PATH}/${file.name}`,
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

const uploadUnzipEpubFile = async (fileName) => {
  const epubFilePath = `public/epub/${fileName}`;

  const walkSync = async (currentDirPath, callback) => {
    // eslint-disable-next-line no-restricted-syntax
    for (const name of fs.readdirSync(currentDirPath)) {
      const filePath = path.join(currentDirPath, name);
      const stat = fs.statSync(filePath);
      if (stat.isFile()) {
        await callback(filePath, stat);
      } else if (stat.isDirectory()) {
        await walkSync(filePath, callback);
      }
    }
  };

  try {
    await walkSync(epubFilePath, (filePath, stat) => new Promise((resolve, reject) => {
      const bucketPath = filePath.substring(epubFilePath.length);
      const params = {
        Bucket: AWS_BUCKET_NAME,
        Key: `${S3_UNZIPE_EPUB_FILE_PATH}/${fileName}${bucketPath}`,
        Body: fs.readFileSync(filePath),
        ACL: 'public-read',
      };
      s3.putObject(params, (err) => {
        if (err) {
          reject();
        } else {
          resolve();
        }
      });
    }));
    return fileName;
  } catch (error) {
    throw new Error(error);
  }
};

const deleteEpubFile = (fileName) => (
  new Promise((resolve, reject) => {
    const params = {
      Bucket: AWS_BUCKET_NAME,
      Key: `${S3_EPUB_FILE_PATH}/${fileName}.epub`,
    };
    s3.deleteObject(params, (error, data) => {
      if (error) {
        reject(error);
      }
      if (data) {
        resolve(fileName);
      }
    });
  })
);

module.exports.getEpubFileKeys = getEpubFileKeys;
module.exports.getEpubFile = getEpubFile;

module.exports.getEpubStaticInfo = getEpubStaticInfo;
module.exports.getEpubViewerInfo = getEpubViewerInfo;

module.exports.uploadEpubFile = uploadEpubFile;
module.exports.uploadUnzipEpubFile = uploadUnzipEpubFile;

module.exports.deleteEpubFile = deleteEpubFile;
