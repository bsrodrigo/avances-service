import mongoose, { Schema } from "mongoose";

const ProductsSchema = new Schema(
  {
    name: { type: String, default: "" },
    description: { type: String, default: "" },
    price: { type: Number, default: 0 },
    _measurement: {
      type: Schema.Types.ObjectId,
      ref: "Measurements",
    },
    activeSale: Boolean,
    activeRental: Boolean,
    fixedPrice: Boolean,
    isInactive: Boolean,
    isDeleted: { type: Boolean, default: false },
  },
  {
    collection: "Products",
    timestamps: true,
  }
);

export const ProductsModel = mongoose.model("Products", ProductsSchema);
