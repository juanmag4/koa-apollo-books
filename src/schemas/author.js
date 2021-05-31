const { gql } = require('apollo-server-koa');

const authorSchema = gql`
  type Author {
    _id: String
    name: String
    lastName: String
    birthDate: String
    books: [Book]
  }
`;

module.exports = { authorSchema };
