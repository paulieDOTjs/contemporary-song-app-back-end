import { gql } from "apollo-server-express";

export const songDefinition = gql`
  type Query {
    getSongs: [Song]
  }

  type Song {
    title: String!
    artist: String
    madeFamousBy: String
    style: String
    genre: String
    releasedYear: String
    decade: String
    learningObjectives: [String]
    accompanimentTracks: [String]
  }
`;
