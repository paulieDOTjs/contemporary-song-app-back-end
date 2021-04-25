import { merge } from "lodash";
import { GraphQLResolverMap } from "apollo-graphql";
import { helloResolve } from "./helloResolve";

//import all new resolvers made and merge them
export const resolvers = (merge(helloResolve) as unknown) as GraphQLResolverMap;
