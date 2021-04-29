import { google } from "googleapis";
import dotenv from "dotenv";

dotenv.config();

const client = new google.auth.JWT(
  process.env.CLIENT_EMAIL,
  undefined,
  process.env.PRIVATE_KEY ? process.env.PRIVATE_KEY.replace(/\\n/gm, "\n") : "",
  ["https://www.googleapis.com/auth/spreadsheets"]
);

const sheetConfig = {
  version: "v4",
  auth: client,
};

// @ts-expect-error: typescript says there is issue, but code works as expected so whatever. I blame google
export const sheets = google.sheets(sheetConfig);

export const sheetOpts = {
  spreadsheetId: process.env.SHEET_ID,
  range: "!A1:Z5000",
};
