import { Types } from "mongoose";
import { InventoryHistoryModel } from "@modules/inventory/models";

export class FindByIdInventoryHistory {
  id: string;
  constructor(id: string) {
    this.id = id;
  }

  async execute() {
    try {
      const inventoryHistory: any = await InventoryHistoryModel.aggregate(
        [
          { $match: { _id: new Types.ObjectId(this.id) } },
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
        ],
      );

      return inventoryHistory?.[0] || {};
    } catch (error) {
      return error;
    }
  }
}
