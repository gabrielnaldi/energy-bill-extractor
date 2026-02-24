import { GD } from '@src/domain/value-objects/gd.value-object';

describe('GD - value object', () => {
  it('should be able to create an GD value object', () => {
    const gd = GD.create(100);

    expect(gd).toBeDefined();
    expect(gd.value).toBe(100);
  });

  it('should convert null value to zero', () => {
    const value = null;

    const gd = GD.create(value);

    expect(gd.value).toBe(0);
  });

  it('should not allow GD eletric quantity to be negative', () => {
    const value = -100;

    const fn = () => GD.create(value);

    expect(fn).toThrow('GD eletric quantity can not be negative!');
  });
});
