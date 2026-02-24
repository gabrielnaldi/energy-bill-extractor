import { EletricQuantity } from '@src/domain/value-objects/eletric-quantity.value-object';

describe('Eletric quantity - value object', () => {
  it('should be able to create an eletric quantity value object', () => {
    const value = 100;

    const eletricQuantity = EletricQuantity.create(value);

    expect(eletricQuantity).toBeInstanceOf(EletricQuantity);
    expect(eletricQuantity.value).toBe(100);
  });

  it('should convert null value to zero', () => {
    const value = null;

    const eletricQuantity = EletricQuantity.create(value);

    expect(eletricQuantity.value).toBe(0);
  });
});
