/* eslint-disable no-console */
import express from "express";
import logger from "morgan";
import dotenv from "dotenv";
import path from "path";

import { apollo } from "./api/apollo";

dotenv.config();

export const app = express();
const port = process.env.PORT || "4000";

app.set("port", port);
app.use(logger("dev"));
app.use(express.json());

//when going to /public serve the public folder
app.use("/public", express.static(path.join(__dirname, "../public")));

//This is just for health checker
app.get("/health", (_req, res) => {
  res.send("Ok");
});

//redirect all root gets to /graphql
app.get("/", (_req, res) => {
  res.redirect(301, "/graphql");
});

//redirect all root posts to /graphql
app.post("/", (_req, res) => {
  res.redirect(308, "/graphql");
});

//add apollo graphql server as middleware to express server
apollo.applyMiddleware({ app });

//start server
export const server = app.listen({ port }, () => {
  console.log(
    "🚀 ☄️ 🪐 ✨ 🌘 🚀 ☄️ 🪐 ✨ 🌘 🚀 ☄️ 🪐 ✨ 🌘 🚀 ☄️ 🪐 ✨ 🌘 🚀 ☄️ 🪐 ✨ 🌘 🚀 ☄️ 🪐 ✨ 🌘 "
  );
  console.log("🌟".padEnd(81, " ") + "🌟");
  console.log(
    `🌟      Now browse to http://localhost:${port}${apollo.graphqlPath} for GraphQL Playground`.padEnd(
      81,
      " "
    ) + "🌟"
  );
  console.log(
    `🌟       or http://localhost:${port}/public/visualizer.html for visualizer`.padEnd(
      81,
      " "
    ) + "🌟"
  );
  console.log("🌟".padEnd(81, " ") + "🌟");
  console.log(
    "🚀 ☄️ 🪐 ✨ 🌘 🚀 ☄️ 🪐 ✨ 🌘 🚀 ☄️ 🪐 ✨ 🌘 🚀 ☄️ 🪐 ✨ 🌘 🚀 ☄️ 🪐 ✨ 🌘 🚀 ☄️ 🪐 ✨ 🌘 "
  );
});
