import { gql } from "apollo-server-express";

export const songDefinition = gql`
  type Query {
    getSongs: [Song]
  }

  type Song {
    title: String!
    degreeOfDifficulty: String
    madeFamousBy: String
    style: String
    composers: [String]
    performanceNotes: [String]
    studentsStudied: [String]
    songFeatures: [String]
    tempo: Int
    other: [String]
  }
`;
