import { Router } from "express";
import {
  createProductController,
  deleteProductController,
  listProductsController,
  findMeasurementsController,
  updateProductController,
} from "@modules/product/controllers";

const routes = Router();

routes.delete("/product/:id", deleteProductController);
routes.get("/measurement", findMeasurementsController);
routes.get("/product", listProductsController);
routes.post("/product", createProductController);
routes.patch("/product/:id", updateProductController);

export default routes;
