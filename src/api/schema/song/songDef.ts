import { gql } from "apollo-server-express";

export const songDefinition = gql`
  type Query {
    getSongs: [Song]
  }

  type Song {
    timeStamp: String
    title: String
    madeFamousBy: String
    degreeOfDifficulty: String
    style: String
    composers: [String]
    performanceNotes: [String]
    studentsStudied: [String]
    decade: String
    songFeatures: [String]
    tempo: Int
    fileName: String
  }
`;

export type Song = {
  timeStamp: string | undefined;
  title: string | undefined;
  madeFamousBy: string | undefined;
  degreeOfDifficulty: string | undefined;
  style: string | undefined;
  composers: string[];
  performanceNotes: string[];
  studentsStudied: string[];
  decade: string | undefined;
  songFeatures: string[];
  tempo: number | undefined;
  fileName: string | undefined;
};
