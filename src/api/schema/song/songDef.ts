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
  timeStamp?: string;
  title?: string;
  madeFamousBy?: string;
  degreeOfDifficulty?: string;
  style?: string;
  composers: string[];
  performanceNotes: string[];
  studentsStudied: string[];
  decade?: string;
  songFeatures: string[];
  tempo?: number;
  fileName?: string;
};
