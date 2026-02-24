export class GD {
  private _value: number;

  private constructor(value: number) {
    this._value = value;
  }

  // Getters
  get value() {
    return this._value;
  }

  // Factories
  public static create(value: number | null) {
    const fixedValue = value || 0;

    if (fixedValue < 0)
      throw new Error('GD eletric quantity can not be negative!');

    const gd = new GD(fixedValue);

    return gd;
  }
}
