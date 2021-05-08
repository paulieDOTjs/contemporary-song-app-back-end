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
    genre: String
    composers: [String]
    performanceNotes: [String]
    studentsStudied: [String]
    decade: String
    songFeatures: [String]
    tempo: Int
    fileName: String
    imageURL: String
  }
`;

export type Song = {
  timeStamp?: string;
  title?: string;
  madeFamousBy?: string;
  degreeOfDifficulty?: string;
  genre?: string;
  composers: string[];
  performanceNotes: string[];
  studentsStudied: string[];
  decade?: string;
  songFeatures: string[];
  tempo?: number;
  fileName?: string;
  imageURL?: string;
};
