import { contextType } from "../../apollo";
import { sheetOpts } from "../../../config/sheetsConnection";
import { Song } from "./songDef";
import { currentEnv, NODE_ENV } from "../../../config/nodeEnv";
import json from "./dumby.json";

export const songResolve = {
  Query: {
    getSongs: async (_root: any, _args: any, ctx: contextType) => {
      if (currentEnv === NODE_ENV.DEV) return json;
      try {
        const sheet = await ctx.sheets.spreadsheets.values.get(sheetOpts);
        return transformSongs(sheet.data.values);
      } catch (err) {
        console.error(err);
        return [];
      }
    },
  },
};

const transformSongs = (
  songs: Array<Array<string | undefined>> | null | undefined
): Promise<Song[]> | Song[] => {
  if (songs) {
    return songs
      .filter((indSong, i) => i !== 0 && indSong[11])
      .map((indSong) => {
        return {
          timeStamp: trim(indSong[0]),
          title: trim(indSong[1]),
          madeFamousBy: trim(indSong[2]),
          degreeOfDifficulty: trim(indSong[3]),
          genre: trim(indSong[4]),
          composers: splitAndTrim(indSong[5], ","),
          performanceNotes: splitAndTrim(indSong[6], ","),
          studentsStudied: splitAndTrim(indSong[7], ","),
          decade: indSong[8],
          songFeatures: splitAndTrim(indSong[9], ","),
          tempo: indSong[10] ? +indSong[10] : undefined,
          fileName: trim(indSong[11]),
        };
      });
  }
  return [];
};

const trim = (str: string | undefined) => {
  return str ? str.trim() : str;
};

const splitAndTrim = (str: string | undefined, char: string) => {
  if (str) {
    return str.split(char).map((subStr) => subStr.trim());
  }
  return [""];
};
