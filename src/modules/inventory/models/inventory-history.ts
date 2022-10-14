import mongoose, { Schema } from "mongoose";

const InventoryHistorySchema = new Schema(
  {
    _product: {
      type: Schema.Types.ObjectId,
      ref: "Products",
    },
    priorQuantity: { type: Number, default: 0 },
    usedQuantity: { type: Number, default: 0 },
    updatedQuantity: { type: Number, default: 0 },
    _transactionType: {
      type: Schema.Types.ObjectId,
      ref: "TransactionTypes",
    },
  },
  {
    collection: "InventoryHistory",
    timestamps: true,
  }
);

export const InventoryHistoryModel = mongoose.model(
  "InventoryHistory",
  InventoryHistorySchema
);
