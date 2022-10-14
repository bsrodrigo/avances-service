import mongoose, { Schema } from "mongoose";

const TransactionTypesSchema = new Schema(
  {
    type: String,
    description: { type: String, default: "" },
    actionType: {
      type: String,
      enum: ["ADDITION", "SUBTRACTION"],
      default: "ADDITION",
    },
  },
  {
    collection: "TransactionTypes",
    timestamps: true,
  }
);

export const TransactionTypesModel = mongoose.model(
  "TransactionTypes",
  TransactionTypesSchema
);
