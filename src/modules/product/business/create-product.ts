import { ProductsModel } from "@/modules/product/models";

export class CreateProduct {
  data: string;
  constructor(data: any) {
    this.data = data;
  }

  async execute() {
    try {
      const product = await ProductsModel.create(this.data);
      return product;
    } catch (error) {
      console.error({ error });
    }
  }
}
