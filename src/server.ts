import express, { Application } from "express";
import mongoose from "mongoose";
import cors from "cors";

import productsRouters from "./modules/product/routes";

const dataBase = () => {
  mongoose
    .connect(
      "mongodb+srv://avances:xsw2zaq1@cluster0.r6i2kbq.mongodb.net/?retryWrites=true&w=majority"
    )
    .then((data) => {
      console.log("MongoDB connection success");
    })
    .catch((err) => {
      console.log("Error in MongoDB connection", err.message);
    });
};

class Server {
  app: Application;
  port: number | string;

  constructor() {
    this.port = process.env.PORT || 3333;
    this.app = express();

    dataBase();
    this.middleware();
    this.routes();

    this.app.listen(this.port, () =>
      console.log("Server started http://localhost:3333")
    );
  }

  enableCors() {
    const corsConfig = {
      origin: ["https://avances.vercel.app", "http://localhost:8080"],
      optionsSuccessStatus: 200,
      methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
    };

    this.app.use(cors(corsConfig));
  }

  middleware() {
    this.enableCors();
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
  }

  routes() {
    this.app.use(productsRouters);
  }
}

export default new Server();
