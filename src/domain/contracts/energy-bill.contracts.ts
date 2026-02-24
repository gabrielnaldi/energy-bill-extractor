import { EletricQuantity } from '../value-objects/eletric-quantity.value-object';
import { SCEE } from '../value-objects/scee.value-object';

export interface EnergyBillContract {
  id: string;
  clientNumber: string;
  referenceMonth: string;
  eletricQuantity: EletricQuantity;
  scee: SCEE;
  GDValue: number;
}

export interface EnergyBillCreateContract {
  id: string;
  clientNumber: string;
  referenceMonth: string;
  eletricQuantity: EletricQuantity;
  scee: SCEE;
  GDValue: number | null;
}
