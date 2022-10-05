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
        name: this.data?.name,
        description: this.data?.description,
        price: this.data?.price,
        _measurement: this.data?._measurements,
        activeSale: this.data?.activeSale,
        activeRental: this.data?.activeRental,
        fixedPrice: this.data?.fixedPrice,
        isInactive: this.data?.isInactive,
      };

      const product = await ProductsModel.findByIdAndUpdate(
        {
          _id: this.id,
        },
        update
      );
      return product;
    } catch (error) {
      console.error({ error });
    }
  }
}
