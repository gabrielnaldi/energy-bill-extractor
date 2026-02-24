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
    return this.props.id;
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

  get SCEEValue() {
    return this.props.SCEEValue;
  }

  get GDValue() {
    return this.props.GDValue;
  }

  // Factories
  public static create(contract: EnergyBillCreateContract) {
    const SCEEValue = contract.SCEEValue || 0;

    const GDValue = contract.GDValue || 0;

    const contractData: EnergyBillContract = {
      ...contract,
      SCEEValue,
      GDValue,
    };

    const energyBill = new EnergyBill(contractData);

    return energyBill;
  }
}
