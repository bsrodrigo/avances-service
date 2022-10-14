import { InventoryModel } from "@modules/inventory/models";

export class FindByIdInventory {
  product: string;
  constructor(product: string) {
    this.product = product;
  }

  async execute() {
    try {
      const inventory = await InventoryModel.findOne({
        _product: this.product,
      });

      return inventory;
    } catch (error) {
      console.error({ error });
    }
  }
}
