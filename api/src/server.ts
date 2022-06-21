import express, { Application } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routers/user";

dotenv.config();

const PORT = process.env.PORT || 8000;
const URL = process.env.MONGODB_URL || "";

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
  }

  async initDatabase() {
    await mongoose
      .connect(URL)
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
