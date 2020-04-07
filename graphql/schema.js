const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type Query {
    bookList: [BookList]
  }

  type Mutation {
    deleteBookListItem(fileName: String!): String!
  }

  type BookList {
    fileName: String!
    coverImage: String!
    titles: String!
  }
`);

module.exports.schema = schema;
