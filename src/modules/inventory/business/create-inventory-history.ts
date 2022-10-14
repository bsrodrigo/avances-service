import {
  FindByIdInventory,
  FindByIdInventoryHistory,
} from "@modules/inventory/business";
import {
  InventoryModel,
  InventoryHistoryModel,
  TransactionTypesModel,
} from "@modules/inventory/models";

interface ICreateInventoryHistoryData {
  product: string;
  quantity: number;
  transactionType: string;
}

export class CreateInventoryHistory {
  data: ICreateInventoryHistoryData;
  productInventory: any;
  constructor(data: ICreateInventoryHistoryData) {
    this.data = data;
    this.productInventory = null;
  }

  async execute() {
    await this._findProductInventory();

    const currentQuantity = this.productInventory?.quantity || 0;
    const actionType = await this._findActionType();

    if (actionType === "SUBTRACTION" && this.data?.quantity > currentQuantity) {
      throw new Error(
        "O estoque não possui a quantidade solicitada do produto!"
      );
    }

    const dataFormatted = this._formatData(currentQuantity, actionType);
    const inventoryHistory = await InventoryHistoryModel.create(dataFormatted);

    if (!inventoryHistory?._id) {
      throw new Error(
        "Um erro inesperado aconteceu, tente novamente mais tarde!"
      );
    }

    await this._updateInventory(inventoryHistory?.updatedQuantity);
    const findByIdInventoryHistory = new FindByIdInventoryHistory(
      inventoryHistory?._id.toString()
    );
    const completeInventoryHistory = findByIdInventoryHistory.execute();

    return completeInventoryHistory;
  }

  private _formatData(currentQuantity, actionType) {
    const data = {
      _product: this.data?.product,
      priorQuantity: currentQuantity,
      usedQuantity: this.data.quantity,
      updatedQuantity:
        actionType === "ADDITION"
          ? currentQuantity + this.data.quantity
          : currentQuantity - this.data.quantity,
      _transactionType: this.data?.transactionType,
    };

    return data;
  }

  private async _findProductInventory() {
    const findByIdInventory = new FindByIdInventory(this.data?.product);
    const productInventory: any = await findByIdInventory.execute();

    this.productInventory = productInventory;
  }

  private async _findActionType() {
    const transactionsType: any = await TransactionTypesModel.findById({
      _id: this.data?.transactionType,
    });

    return transactionsType?.actionType;
  }

  private async _updateInventory(updatedQuantity) {
    if (this.productInventory?._id) {
      const updateData = { quantity: updatedQuantity };
      await InventoryModel.findByIdAndUpdate(
        {
          _id: this.productInventory._id,
        },
        updateData
      );
      return;
    }

    await InventoryModel.create({
      _product: this.data?.product,
      quantity: updatedQuantity,
    });
  }
}
