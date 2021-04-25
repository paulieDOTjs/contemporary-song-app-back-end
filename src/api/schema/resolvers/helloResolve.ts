import { helloArgs } from "../typeDefs/helloSchema";

export const helloResolve = {
  Query: {
    hello: (_root: any, args: helloArgs) => {
      return `Hello, ${args.name ? args.name : "World"}!`;
    },
  },
};
