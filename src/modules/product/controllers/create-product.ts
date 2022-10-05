import { CreateProduct } from "../business";
import { Request, Response } from "express";

export const createProductController = async (req: Request, res: Response) => {
  const createProduct = new CreateProduct(req?.body);
  try {
    const product = await createProduct.execute();
    return res.status(200).json(product);
  } catch (error: any) {
    return res.status(400).json({
      response: [],
      message: error?.message || error?.toString(),
    });
  }
};
