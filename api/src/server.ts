import express, { Application } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import userRouter from "./routers/user";
import postRouter from "./routers/post";

dotenv.config();

const PORT = process.env.REACT_APP_PORT || 8000;
const USERNAME = process.env.REACT_APP_MONGO_USERNAME;
const PASSWORD = process.env.REACT_APP_MONGO_PASSWORD;
const CLUSTER = process.env.REACT_APP_MONGO_CLUSTER;
const DBNAME = process.env.REACT_APP_MONGO_DBNAME;

class AppServer {
  public server: Application | null;
  public port: string | number;

  constructor() {
    this.server = null;
    this.port = PORT;
  }

  async start() {
    this.initServer();
    this.initMiddleware();
    this.initRoutes();
    await this.initDatabase();
    this.startListening();
  }

  initServer() {
    this.server = express();
  }

  initMiddleware() {
    this.server?.use(express.json());
  }

  initRoutes() {
    this.server?.use("/auth", userRouter);
    this.server?.use("/posts", postRouter);
  }

  async initDatabase() {
    await mongoose
      .connect(
        `mongodb+srv://${USERNAME}:${PASSWORD}@${CLUSTER}.lgjrr.mongodb.net/${DBNAME}?retryWrites=true&w=majority`,
      )
      .then(res => console.log("DB connected", res))
      .catch(err => console.log("DB errpr", err));
  }

  startListening() {
    this.server?.listen(this.port, (): void =>
      console.log(`Server Running here 👉 https://localhost:${this.port}`),
    );
  }
}

export default AppServer;
