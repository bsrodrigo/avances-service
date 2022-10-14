import { Request, Response } from "express";
import { FindInventoryHistory } from "@modules/inventory/business";

export const findInventoryHistoryController = async (
  req: Request,
  res: Response
) => {
  try {
    const findInventoryHistory = new FindInventoryHistory();
    const inventoryHistory = await findInventoryHistory.execute();

    return res.status(200).json(inventoryHistory);
  } catch (error: any) {
    return res.status(400).json({
      response: [],
      message: error?.message || error?.toString(),
    });
  }
};
