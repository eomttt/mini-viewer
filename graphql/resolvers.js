const {
  getBookListItems,
  deleteListItem,
} = require('../server.util');

const resolvers = {
  bookList: () => getBookListItems(),
  deleteBookListItem: ({ fileName }) => deleteListItem(fileName),
};

module.exports.resolvers = resolvers;
