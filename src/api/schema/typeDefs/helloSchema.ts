import { gql } from "apollo-server-express";

export const helloDef = gql`
  type Query {
    hello(name: String): String
  }
`;

export interface helloArgs {
  name?: string;
}
