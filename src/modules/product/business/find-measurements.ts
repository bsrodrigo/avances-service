import { MeasurementsModel } from "@modules/product/models";

export class FindMeasurements {
  async execute() {
    try {
      const measurements = await MeasurementsModel.find();
      return measurements;
    } catch (error) {
      console.error({ error });
    }
  }
}
