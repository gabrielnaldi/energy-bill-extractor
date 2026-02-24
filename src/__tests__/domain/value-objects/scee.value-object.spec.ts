import { SCEE } from '@src/domain/value-objects/scee.value-object';

describe('SCEE - value object', () => {
  it('should be able to create an SCEE value', () => {
    const scee = SCEE.create(15);

    expect(scee).toBeDefined();
    expect(scee).toBeInstanceOf(SCEE);
    expect(scee.value).toBe(15);
  });

  it('should convert null value to zero', () => {
    const value = null;

    const scee = SCEE.create(value);

    expect(scee.value).toBe(0);
  });

  it('should not allow SCEE quantity to be negative', () => {
    const value = -100;

    const fn = () => SCEE.create(value);

    expect(fn).toThrow('SCEE energy quantity can not be negative!');
  });
});
