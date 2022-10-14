import { Request, Response } from "express";
import { FindInventory } from "@modules/inventory/business";

export const findInventoryController = async (req: Request, res: Response) => {
  try {
    const findInventory = new FindInventory();
    const inventory = await findInventory.execute();

    return res.status(200).json(inventory);
  } catch (error: any) {
    return res.status(400).json({
      response: [],
      message: error?.message || error?.toString(),
    });
  }
};
