import { EnergyBill } from '@src/domain/entities/energy-bill.entity';
import { EnergyBillCreateContract } from 'src/domain/contracts/energy-bill.contracts';

describe('Energy bill - entity', () => {
  const MOCK_DATA: EnergyBillCreateContract = {
    id: '1',
    clientNumber: 'client-1',
    referenceMonth: 'SET/2024',
    eletricValue: 100,
    SCEEValue: 200,
    GDValue: 400,
  };

  it('should be able to create an energy bill entity', () => {
    const energyBill = EnergyBill.create(MOCK_DATA);

    expect(energyBill).toBeDefined();
    expect(energyBill).toBeInstanceOf(EnergyBill);
    expect(energyBill.id).toBe('1');
    expect(energyBill.clientNumber).toBe('client-1');
    expect(energyBill.referenceMonth).toBe('SET/2024');
    expect(energyBill.eletricValue).toBe(100);
    expect(energyBill.SCEEValue).toBe(200);
    expect(energyBill.GDValue).toBe(400);
  });
});
