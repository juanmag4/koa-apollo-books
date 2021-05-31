const { bookQueryResolvers, bookMutationResolvers } = require('./book.resolvers');
const authorResolver = require('./author.resolvers');

const resolvers = {
  Query: {
    ...bookQueryResolvers,
    ...authorResolver
  },
  Mutation: {
    ...bookMutationResolvers
  }
};

module.exports = { resolvers };
