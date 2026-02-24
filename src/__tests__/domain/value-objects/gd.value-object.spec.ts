import { GD } from '@src/domain/value-objects/gd.value-object';

describe('GD - value object', () => {
  it('should be able to create an GD value object', () => {
    const gd = GD.create(100);

    expect(gd).toBeDefined();
    expect(gd.value).toBe(100);
  });
});
