export interface EnergyBillContract {
  id: string;
  clientNumber: string;
  referenceMonth: string;
  eletricValue: number;
  SCEEValue: number;
  GDValue: number;
}

export interface EnergyBillCreateContract {
  id: string;
  clientNumber: string;
  referenceMonth: string;
  eletricValue: number | null;
  SCEEValue: number | null;
  GDValue: number | null;
}
