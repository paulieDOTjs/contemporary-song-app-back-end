import { CorsOptions } from "cors";

const whitelist = ["http://localhost:3000"];

export const options: CorsOptions = {
  origin: function (origin, callback) {
    if (origin && whitelist.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};