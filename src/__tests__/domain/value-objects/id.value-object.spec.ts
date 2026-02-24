import { ID } from '@src/domain/value-objects/id.value-object';

describe('ID - value object', () => {
  it('should be able to create an ID', () => {
    const id = ID.create('fake-id');

    expect(id).toBeDefined();
    expect(id).toBeInstanceOf(ID);
    expect(id.value).toBe('fake-id');
  });

  it('should not allow IDs to be empty', () => {
    const value = '';

    const fn = () => ID.create(value);

    expect(fn).toThrow('ID can not be empty!');
  });
});
