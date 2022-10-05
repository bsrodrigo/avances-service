import { Router } from "express";
import {
  createProductController,
  listProductsController,
  findMeasurementsController,
} from "./controllers/";

const routes = Router();

routes.get("/measurement", findMeasurementsController);
routes.get("/product", listProductsController);
routes.post("/product", createProductController);

export default routes;
