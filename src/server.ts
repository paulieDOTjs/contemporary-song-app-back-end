/* eslint-disable no-console */
import express from "express";
import logger from "morgan";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";

import { apollo } from "./api/apollo";
// import { options } from "./config/cors";

dotenv.config();

export const app = express();
const port = process.env.PORT || "4000";

app.set("port", port);
app.use(logger("dev"));
app.use(express.json());
app.use(cors());

//when going to /public serve the public folder
app.use("/public", express.static(path.join(__dirname, "../public")));

//This is just for health checker
app.get("/", (_req, res) => {
  console.log("hi");
  res.send({ hello: "world" });
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
