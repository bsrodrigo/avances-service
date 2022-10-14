import { Request, Response } from "express";
import { FindTransactionTypes } from "@modules/inventory/business";

export const findTransactionTypesController = async (
  req: Request,
  res: Response
) => {
  try {
    const findTransactionTypes = new FindTransactionTypes();
    const transactionTypes = await findTransactionTypes.execute();

    return res.status(200).json(transactionTypes);
  } catch (error: any) {
    return res.status(400).json({
      response: [],
      message: error?.message || error?.toString(),
    });
  }
};
