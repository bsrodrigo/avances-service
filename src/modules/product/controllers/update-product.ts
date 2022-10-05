import { UpdateProduct } from "@modules/product/business";
import { Request, Response } from "express";

export const updateProductController = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const body = req.body;

    const updateProduct = new UpdateProduct(id, body);
    const product = await updateProduct.execute();

    return res.status(200).json(product);
  } catch (error: any) {
    return res.status(400).json({
      response: [],
      message: error?.message || error?.toString(),
    });
  }
};
