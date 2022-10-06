import { ProductsModel } from "@modules/product/models";

export class UpdateProduct {
  id: string;
  data: any;
  constructor(id, data) {
    this.id = id;
    this.data = data;
  }

  async execute() {
    try {
      const update = {
        ...this.data,
        _id: this.id,
      };

      await ProductsModel.findByIdAndUpdate(
        {
          _id: this.id,
        },
        update
      );
      return update;
    } catch (error) {
      console.error({ error });
    }
  }
}
