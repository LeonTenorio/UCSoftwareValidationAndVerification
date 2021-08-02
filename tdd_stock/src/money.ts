export class Money {
  protected readonly amount: number;

  constructor(amount: number) {
    this.amount = amount;
  }

  equals(dollar: Money): boolean {
    return this.amount === dollar.amount;
  }
}
