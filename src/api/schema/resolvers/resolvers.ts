import { merge } from "lodash";
import { GraphQLResolverMap } from "apollo-graphql";
import { songResolve } from "./songResolve";

//import all new resolvers made and merge them
export const resolvers = (merge(songResolve) as unknown) as GraphQLResolverMap;
