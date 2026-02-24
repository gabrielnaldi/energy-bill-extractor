export class SCEE {
  private _value: number;

  constructor(value: number) {
    this._value = value;
  }

  //Getters
  get value() {
    return this._value;
  }

  // Factory
  public static create(value: number | null) {
    const fixedValue = value || 0;

    if (fixedValue < 0)
      throw new Error('SCEE energy quantity can not be negative!');

    const scee = new SCEE(fixedValue);

    return scee;
  }
}
