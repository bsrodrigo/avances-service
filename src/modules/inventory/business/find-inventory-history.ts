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
        $unwind: {
          path: "$product",
        },
      },
      {
        $unwind: {
          path: "$transactionType",
        },
      },
    ]);

    return inventory;
  }
}
