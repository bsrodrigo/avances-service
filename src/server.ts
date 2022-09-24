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
    this.app = express();
    this.port = process.env.PORT || 3333;
    dataBase();
    this.middleware();
    this.routes();
    this.app.listen(this.port, () =>
      console.log("Server started http://localhost:3333")
    );
  }

  middleware() {
    const corsConfig = {
      origin: ["https://avances.vercel.app)", "localhost"],
      // origin: "*",
      credentials: false,
      // optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
      methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
      // preflightContinue: false,
      // exposedHeaders: ["Total-Count"],
    };

    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(cors(corsConfig));
  }

  routes() {
    this.app.use(productsRouters);
  }
}

export default new Server();
