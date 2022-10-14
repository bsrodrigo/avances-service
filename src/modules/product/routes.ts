import { Router } from "express";
import {
  createProductController,
  deleteProductController,
  listProductsController,
  findMeasurementsController,
  updateProductController,
} from "@modules/product/controllers";

const productRoutes = Router();

productRoutes.delete("/product/:id", deleteProductController);
productRoutes.get("/measurement", findMeasurementsController);
productRoutes.get("/product", listProductsController);
productRoutes.post("/product", createProductController);
productRoutes.patch("/product/:id", updateProductController);

export default productRoutes;
