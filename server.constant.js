const AWS_BUCKET_NAME = 'hyuntaeeom-personal';
const S3_EPUB_FILE_PATH = 'RIDI mini-vewer';
const S3_UNZIPE_EPUB_FILE_PATH = `${S3_EPUB_FILE_PATH}/epub`;
const EPUB_IMAGE_STATIC_PATH = 'https://hyuntaeeom-personal.s3.ap-northeast-2.amazonaws.com/RIDI+mini-vewer/epub';

const DEFAULT_COVER_IMAGE = 'default-book.png';

const EPUB_UNZIP_PATH = 'public/epub';


module.exports.AWS_BUCKET_NAME = AWS_BUCKET_NAME;
module.exports.S3_EPUB_FILE_PATH = S3_EPUB_FILE_PATH;
module.exports.S3_UNZIPE_EPUB_FILE_PATH = S3_UNZIPE_EPUB_FILE_PATH;
module.exports.EPUB_IMAGE_STATIC_PATH = EPUB_IMAGE_STATIC_PATH;

module.exports.DEFAULT_COVER_IMAGE = DEFAULT_COVER_IMAGE;

module.exports.EPUB_UNZIP_PATH = EPUB_UNZIP_PATH;
