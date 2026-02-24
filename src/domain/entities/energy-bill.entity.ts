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

  get scee() {
    return this.props.scee.value;
  }

  get GDValue() {
    return this.props.GDValue;
  }

  // Factories
  public static create(contract: EnergyBillCreateContract) {
    const GDValue = contract.GDValue || 0;

    const contractData: EnergyBillContract = {
      ...contract,
      GDValue,
    };

    const energyBill = new EnergyBill(contractData);

    return energyBill;
  }
}
