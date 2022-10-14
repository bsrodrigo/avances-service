import mongoose, { Schema } from "mongoose";

const InventorySchema = new Schema(
  {
    _product: {
      type: Schema.Types.ObjectId,
      ref: "Products",
    },
    quantity: { type: Number, default: 0 },
  },
  {
    collection: "Inventory",
    timestamps: true,
  }
);

export const InventoryModel = mongoose.model("Inventory", InventorySchema);
