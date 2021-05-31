const { gql } = require('apollo-server-koa');
const { bookSchema, authorSchema } = require('../schemas');

const typeDefs = gql`
  ${bookSchema}
  ${authorSchema}
  
  type Query {
    books(title: String): [Book]
    allBooks: [Book]
    authors(name: String, lastName: String): [Author]
    allAuthors: [Author]
  }

  type Mutation {
    addBook(title: String, pages: Int, edition: Int, year: Int, author: String): Book
  }
`;

module.exports = { typeDefs };
