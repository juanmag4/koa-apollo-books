const { gql } = require('apollo-server-koa');

const bookSchema = gql`
  type Book {
    title: String
    author: Author
    year: Int
    edition: Int
    pages: Int
  }
`;

module.exports = { bookSchema };
