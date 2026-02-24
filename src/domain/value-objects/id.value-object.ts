export class ID {
  private _value: string;

  private constructor(value: string) {
    this._value = value;
  }

  // Getters
  get value() {
    return this._value;
  }

  // Factories
  public static create(value: string) {
    if (value.length === 0) throw new Error('ID can not be empty!');

    const id = new ID(value);

    return id;
  }
}
