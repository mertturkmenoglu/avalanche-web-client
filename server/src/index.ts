import 'reflect-metadata';

import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import cors from 'cors';

import HelloResolver from './resolvers/HelloResolver';

const main = async () => {
  const app = express();
  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [HelloResolver],
      validate: false,
    }),
    context: ({ req, res }) => ({
      req,
      res,
    }),
  });

  app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  }));

  apolloServer.applyMiddleware({
    app,
    cors: false,
  });

  app.listen(4000, () => {
    console.log('Server started on http://localhost:4000/graphql');
  });
};

main().catch((err) => {
  console.error(err);
});
