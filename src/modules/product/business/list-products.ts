import { ProductsModel } from "../models/products";

export class ListProducts {
  companyId: string;
  constructor(companyId: string) {
    this.companyId = companyId;
  }

  async execute() {
    try {
      const products = await ProductsModel.find();
      console.log({ products });
      return products;
    } catch (error) {
      console.error({ error });
    }
  }
}
