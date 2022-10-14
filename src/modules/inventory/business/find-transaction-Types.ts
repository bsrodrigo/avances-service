import { TransactionTypesModel } from "@modules/inventory/models";

export class FindTransactionTypes {
  async execute() {
    const inventory = await TransactionTypesModel.find();

    return inventory;
  }
}
