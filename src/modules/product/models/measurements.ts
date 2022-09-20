import mongoose, { Schema } from "mongoose";

const MeasurementsSchema = new Schema(
  {
    acronym: String,
    description: String,
  },
  {
    collection: "Measurements",
    timestamps: true,
  }
);

export const MeasurementsModel = mongoose.model(
  "Measurements",
  MeasurementsSchema
);
