import { Router } from "express";
import {
  createProductController,
  listProductsController,
} from "./controllers/";

const routes = Router();

routes.get("/product", listProductsController);
routes.post("/product", createProductController);

export default routes;
