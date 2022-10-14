import { InventoryModel } from "@modules/inventory/models";

export class FindInventory {
  async execute() {
    try {
      const inventory = await InventoryModel.aggregate([
        {
          $lookup: {
            from: "Products",
            localField: "_product",
            foreignField: "_id",
            as: "product",
          },
        },
        {
          $unwind: {
            path: "$product",
          },
        },
        {
          $lookup: {
            from: "Measurements",
            localField: "product._measurement",
            foreignField: "_id",
            as: "measurement",
          },
        },
        {
          $unwind: {
            path: "$measurement",
          },
        },
      ]);

      return inventory;
    } catch (error) {
      console.error({ error });
    }
  }
}
