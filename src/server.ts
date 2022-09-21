import express from "express";
import mongoose from "mongoose";

import productsRouters from "./modules/product/routes";

const port = process.env.PORT || 3333;

const app = express();

app.use(express.json());
app.use(productsRouters);

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

app.listen(port, () => console.log("Server started http://localhost:3333"));
