export class EletricQuantity {
  private _value: number;

  private constructor(value: number) {
    this._value = value;
  }

  // Getters
  get value() {
    return this._value;
  }

  public static create(value: number | null) {
    const fixedValue = value || 0;

    if (fixedValue < 0)
      throw new Error('Eletric quantity can not be negative!');

    const eletricQuantity = new EletricQuantity(fixedValue);

    return eletricQuantity;
  }
}
