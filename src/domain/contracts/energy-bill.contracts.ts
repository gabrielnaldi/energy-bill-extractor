import { EletricQuantity } from '../value-objects/eletric-quantity.value-object';

export interface EnergyBillContract {
  id: string;
  clientNumber: string;
  referenceMonth: string;
  eletricQuantity: EletricQuantity;
  SCEEValue: number;
  GDValue: number;
}

export interface EnergyBillCreateContract {
  id: string;
  clientNumber: string;
  referenceMonth: string;
  eletricQuantity: EletricQuantity;
  SCEEValue: number | null;
  GDValue: number | null;
}
