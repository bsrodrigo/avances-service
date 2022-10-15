import { InventoryHistoryModel } from "@modules/inventory/models";

export class FindInventoryHistory {
  async execute() {
    const inventory = await InventoryHistoryModel.aggregate([
      {
        $lookup: {
          from: "Products",
          localField: "_product",
          foreignField: "_id",
          as: "product",
        },
      },
      {
        $lookup: {
          from: "TransactionTypes",
          localField: "_transactionType",
          foreignField: "_id",
          as: "transactionType",
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
          path: "$product",
        },
      },
      {
        $unwind: {
          path: "$transactionType",
        },
      },
      {
        $unwind: {
          path: "$measurement",
        },
      },
    ]);

    return inventory;
  }
}
