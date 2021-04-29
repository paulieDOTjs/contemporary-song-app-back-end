import { contextType } from "../../apollo";
import { sheetOpts } from "../../config/sheetsConnection";

export const songResolve = {
  Query: {
    getSongs: async (_root: any, _args: any, ctx: contextType) => {
      const sheet = await ctx.sheets.spreadsheets.values
        .get(sheetOpts)
        .catch((err) => {
          console.error(err);
          return null;
        });

      return transformSongs(sheet?.data.values);
    },
  },
};

const transformSongs = (
  songs: Array<Array<string | undefined>> | null | undefined
) => {
  if (songs) {
    return songs
      .filter((_s, i) => i !== 0)
      .map((indSong) => ({
        songName: trim(indSong[1]),
        madeFamousBy: trim(indSong[2]),
        degreeOfDifficulty: trim(indSong[3]),
        style: trim(indSong[4]),
        composers: indSong[5] ? splitAndTrim(indSong[5], ",") : [],
        performanceNotes: indSong[6] ? splitAndTrim(indSong[6], ",") : [],
        studentsStudied: indSong[7] ? splitAndTrim(indSong[7], ",") : [],
        decade: indSong[8],
        songFeatures: indSong[9] ? splitAndTrim(indSong[9], ",") : [],
        tempo: indSong[10] ? +indSong[10] : null,
        other: [indSong[0]],
      }));
  }
};

const trim = (str: string | undefined) => {
  return str ? str.trim() : null;
};

const splitAndTrim = (str: string, char: string) => {
  return str.split(char).map((subStr) => subStr.trim());
};
