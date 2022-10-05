import { DeleteProduct } from "@modules/product/business";
import { Request, Response } from "express";

export const deleteProductController = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    const deleteProduct = new DeleteProduct(id);
    await deleteProduct.execute();

    return res.status(200).json({
      message: "Produto deletado com sucesso!",
    });
  } catch (error: any) {
    return res.status(400).json({
      message: error?.message || error?.toString(),
    });
  }
};
