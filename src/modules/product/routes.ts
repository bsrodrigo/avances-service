import { Router } from "express";
import {
  createProductController,
  listProductsController,
} from "./controllers/";

const router = Router();

router.get("/product", listProductsController);
router.post("/product", createProductController);

export default router;
