import { ApolloServer } from "apollo-server-express";

import { schema } from "./schema/schema";
import { NODE_ENV, currentEnv } from "./config/nodeEnv";
import { sheets } from "./config/sheetsConnection";
import { sheets_v4 } from "googleapis";

//link express server to apollo server. adding in schema and context
export const apollo = new ApolloServer({
  schema,

  context: {
    sheets,
  },

  //allow introspection in every environment
  introspection: true,

  //turn debug on for dev
  debug: currentEnv === NODE_ENV.DEV,

  //turn tracing on for dev and stage
  tracing: currentEnv === NODE_ENV.DEV || currentEnv === NODE_ENV.STAGE,

  //allow playground in every environment
  playground: {
    faviconUrl: "/public/favicon.ico",
    title: "Contemporary Music Back End",
    settings: {
      "editor.fontFamily":
        "'Source Code Pro', 'Consolas', 'Inconsolata', 'Droid Sans Mono', 'Monaco', monospace",
      "editor.fontSize": 16,
    },
  },

  formatError: (err) => {
    if (err.message.startsWith("Database Error: ")) {
      return new Error("Internal server error");
    }

    return err;
  },
});

export type contextType = {
  sheets: sheets_v4.Sheets;
};
