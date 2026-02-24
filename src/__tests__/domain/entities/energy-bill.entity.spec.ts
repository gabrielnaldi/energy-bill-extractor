import { EnergyBill } from '@src/domain/entities/energy-bill.entity';
import { EletricQuantity } from '@src/domain/value-objects/eletric-quantity.value-object';
import { GD } from '@src/domain/value-objects/gd.value-object';
import { SCEE } from '@src/domain/value-objects/scee.value-object';
import { EnergyBillCreateContract } from 'src/domain/contracts/energy-bill.contracts';

describe('Energy bill - entity', () => {
  const MOCK_ELETRIC_QUANTITY = EletricQuantity.create(100);

  const MOCK_SCEE_QUANTITY = SCEE.create(200);

  const MOCK_GD_QUANTITY = GD.create(400);

  const MOCK_DATA: EnergyBillCreateContract = {
    id: '1',
    clientNumber: 'client-1',
    referenceMonth: 'SET/2024',
    eletricQuantity: MOCK_ELETRIC_QUANTITY,
    scee: MOCK_SCEE_QUANTITY,
    gd: MOCK_GD_QUANTITY,
  };

  it('should be able to create an energy bill entity', () => {
    const energyBill = EnergyBill.create(MOCK_DATA);

    expect(energyBill).toBeDefined();
    expect(energyBill).toBeInstanceOf(EnergyBill);
    expect(energyBill.id).toBe('1');
    expect(energyBill.clientNumber).toBe('client-1');
    expect(energyBill.referenceMonth).toBe('SET/2024');
    expect(energyBill.eletricQuantity).toBe(100);
    expect(energyBill.scee).toBe(200);
    expect(energyBill.gd).toBe(400);
  });
});
