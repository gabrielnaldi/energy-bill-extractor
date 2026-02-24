import {
  EnergyBillContract,
  EnergyBillCreateContract,
} from '../contracts/energy-bill.contracts';

export class EnergyBill {
  private props: EnergyBillContract;

  private constructor(contract: EnergyBillContract) {
    this.props = contract;
  }

  // Getters
  get id() {
    return this.props.id.value;
  }

  get clientNumber() {
    return this.props.clientNumber;
  }

  get referenceMonth() {
    return this.props.referenceMonth;
  }

  get eletricQuantity() {
    return this.props.eletricQuantity.value;
  }

  get scee() {
    return this.props.scee.value;
  }

  get gd() {
    return this.props.gd.value;
  }

  // Factories
  public static create(contract: EnergyBillCreateContract) {
    const energyBill = new EnergyBill(contract);

    return energyBill;
  }
}
