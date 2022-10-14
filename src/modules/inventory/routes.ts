import { Router } from "express";
import {
  createInventoryHistoryController,
  findInventoryController,
  findInventoryHistoryController,
  findTransactionTypesController,
} from "@modules/inventory/controllers";

const routes = Router();

routes.get("/inventory", findInventoryController);
routes.get("/inventory/history", findInventoryHistoryController);
routes.get("/inventory/transaction-types", findTransactionTypesController);
routes.post("/inventory", createInventoryHistoryController);

export default routes;
