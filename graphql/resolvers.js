const {
  getEpubFileKeys,
  getEpubStaticInfo,
  deleteEpubFile,
} = require('../server.s3');

const resolvers = {
  bookList: async () => {
    const bookListItems = [];
    try {
      const fileKeys = await getEpubFileKeys();
      // eslint-disable-next-line no-restricted-syntax
      for (const fileKey of fileKeys) {
        const [fileName] = fileKey.split('.');
        const epubStatifInfo = await getEpubStaticInfo(fileName || 'jikji');
        if (epubStatifInfo) {
          bookListItems.push({
            fileName,
            titles: epubStatifInfo.titles,
            coverImage: epubStatifInfo.coverImage,
          });
        }
      }
      return bookListItems;
    } catch (error) {
      console.log('Get book list error', error);
      throw new Error(error);
    }
  },
  deleteBookListItem: ({ fileName }) => deleteEpubFile(fileName),
};

module.exports.resolvers = resolvers;
