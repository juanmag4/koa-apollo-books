const Koa = require('koa');
const mongoose = require('mongoose');
const { ApolloServer } = require('apollo-server-koa');
const { resolvers } = require('./src/resolvers');
const { typeDefs } = require('./src/typeDefs/typeDef');

(async function startApolloServer() {
  try {
    const server = new ApolloServer({ typeDefs, resolvers });
    await server.start();

    mongoose.connect('mongodb://localhost:27017/booksDB', {useNewUrlParser: true});
    mongoose.connection.once('open', () => { 
      console.log('connected to database'); 
    }); 
    
    mongoose.connection.on('error', console.error); 
  
    const app = new Koa();
    server.applyMiddleware({ app });
    // alternatively you can get a composed middleware from the apollo server
    // app.use(server.getMiddleware());

    await new Promise(resolve => app.listen({ port: 4000 }, resolve));
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
    return { server, app }; 
  } catch (error) {
    console.log('ERROR');
    console.log(error);
  }
})();
