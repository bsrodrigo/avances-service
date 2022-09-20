import { ListProducts } from "../business";
import { Request, Response } from "express";

export const listProductsController = async (req: Request, res: Response) => {
  const listProducts = new ListProducts(req?.params?.companyId);
  try {
    const products = await listProducts.execute();
    return res.status(200).json(products);
  } catch (error: any) {
    return res.status(400).json({
      response: [],
      message: error?.message || error?.toString(),
    });
  }
};
