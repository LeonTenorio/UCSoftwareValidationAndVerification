export abstract class Money {
  protected readonly amount: number;
  abstract readonly _currency: string;

  constructor(amount: number) {
    this.amount = amount;
  }

  static dollar(amount: number): Dollar {
    return new Dollar(amount);
  }

  static euro(amount: number): Euro {
    return new Euro(amount);
  }

  equals(other: Money): boolean {
    if (this.constructor !== other.constructor) {
      return false;
    }
    return this.amount === other.amount;
  }

  abstract times(multiplier: number): Money;

  currency(): string {
    return this._currency;
  }
}

export class Dollar extends Money {
  _currency = 'USD';

  times(multiplier: number): Dollar {
    return Money.dollar(this.amount * multiplier);
  }
}

export class Euro extends Money {
  _currency = 'EUR';

  times(multiplier: number): Euro {
    return Money.euro(this.amount * multiplier);
  }
}
