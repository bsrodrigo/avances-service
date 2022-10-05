import { FindMeasurements } from "@modules/product/business";
import { Request, Response } from "express";

export const findMeasurementsController = async (
  _req: Request,
  res: Response
) => {
  const findMeasurements = new FindMeasurements();
  try {
    const measurements = await findMeasurements.execute();
    return res.status(200).json(measurements);
  } catch (error: any) {
    return res.status(400).json({
      response: [],
      message: error?.message || error?.toString(),
    });
  }
};
