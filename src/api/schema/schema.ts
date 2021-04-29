import { makeExecutableSchema } from "apollo-server-express";
import { typeDefs } from "./typeDefs/typeDefs";
import { resolvers } from "./resolvers/resolvers";

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});
