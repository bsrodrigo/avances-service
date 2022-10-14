import { Request, Response } from "express";
import { CreateInventoryHistory } from "@modules/inventory/business";

export const createInventoryHistoryController = async (
  req: Request,
  res: Response
) => {
  try {
    const findInventory = new CreateInventoryHistory(req?.body);
    const inventory = await findInventory.execute();

    return res.status(200).json(inventory);
  } catch (error: any) {
    return res.status(400).json({
      response: [],
      message: error?.message || error?.toString(),
    });
  }
};
