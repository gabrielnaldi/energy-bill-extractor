import { SCEE } from '@src/domain/value-objects/scee.value-object';

describe('SCEE - value object', () => {
  it('should be able to create an SCEE value', () => {
    const scee = SCEE.create(15);

    expect(scee).toBeDefined();
    expect(scee).toBeInstanceOf(SCEE);
    expect(scee.value).toBe(15);
  });
});
