import { ProductsModel } from "@modules/product/models";

export class DeleteProduct {
  id: string;
  constructor(id) {
    this.id = id;
  }

  async execute() {
    try {
      const update = {
        isDeleted: true,
      };

      await ProductsModel.findByIdAndUpdate(
        {
          _id: this.id,
        },
        update
      );

      return true;
    } catch (error) {
      console.error({ error });
    }
  }
}
