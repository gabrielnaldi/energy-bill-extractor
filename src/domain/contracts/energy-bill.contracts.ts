import { EletricQuantity } from '../value-objects/eletric-quantity.value-object';
import { GD } from '../value-objects/gd.value-object';
import { ID } from '../value-objects/id.value-object';
import { SCEE } from '../value-objects/scee.value-object';

export interface EnergyBillContract {
  id: ID;
  clientNumber: string;
  referenceMonth: string;
  eletricQuantity: EletricQuantity;
  scee: SCEE;
  gd: GD;
}

export interface EnergyBillCreateContract {
  id: ID;
  clientNumber: string;
  referenceMonth: string;
  eletricQuantity: EletricQuantity;
  scee: SCEE;
  gd: GD;
}
