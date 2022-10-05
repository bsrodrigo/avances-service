import { Router } from "express";
import {
  createProductController,
  listProductsController,
  findMeasurementsController,
  updateProductController,
} from "@modules/product/controllers";

const routes = Router();

routes.get("/measurement", findMeasurementsController);
routes.get("/product", listProductsController);
routes.post("/product", createProductController);
routes.put("/product/:id", updateProductController);

export default routes;
