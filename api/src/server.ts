import express, { Application } from "express";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 8000;

class AppServer {
  public server: Application | null;

  constructor() {
    this.server = null;
  }

  async start() {
    this.initServer();
    this.initMiddleware();
    // this.initRoutes();
    this.startListening();
  }

  initServer() {
    this.server = express();
  }

  initMiddleware() {
    this.server?.use(express.json());
  }

  // initRoutes() {
  //   this.server?.use("/users", userRouter);
  // }

  startListening() {
    this.server?.listen(PORT, (): void =>
      console.log(`Server Running here 👉 https://localhost:${PORT}`),
    );
  }
}

export default AppServer;
