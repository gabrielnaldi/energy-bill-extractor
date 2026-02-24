import { EletricQuantity } from '../value-objects/eletric-quantity.value-object';
import { GD } from '../value-objects/gd.value-object';
import { SCEE } from '../value-objects/scee.value-object';

export interface EnergyBillContract {
  id: string;
  clientNumber: string;
  referenceMonth: string;
  eletricQuantity: EletricQuantity;
  scee: SCEE;
  gd: GD;
}

export interface EnergyBillCreateContract {
  id: string;
  clientNumber: string;
  referenceMonth: string;
  eletricQuantity: EletricQuantity;
  scee: SCEE;
  gd: GD;
}
