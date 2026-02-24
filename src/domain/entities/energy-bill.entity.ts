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

  get eletricValue() {
    return this.props.eletricValue;
  }

  get SCEEValue() {
    return this.props.SCEEValue;
  }

  get GDValue() {
    return this.props.GDValue;
  }

  // Factories
  public static create(contract: EnergyBillCreateContract) {
    const eletricValue = contract.eletricValue || 0;

    const SCEEValue = contract.SCEEValue || 0;

    const GDValue = contract.GDValue || 0;

    const contractData: EnergyBillContract = {
      id: contract.id,
      clientNumber: contract.clientNumber,
      referenceMonth: contract.referenceMonth,
      eletricValue,
      SCEEValue,
      GDValue,
    };

    const energyBill = new EnergyBill(contractData);

    return energyBill;
  }
}
