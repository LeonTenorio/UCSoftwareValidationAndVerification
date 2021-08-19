import { Expression } from './expression';
import { Money } from './money';
import { Sum } from './sum';

type Pair = {
  [from: string]: {
    [to: string]: {
      rate: number;
    };
  };
};

export class Bank {
  private rates: Pair = {};
  reduce(source: Expression, to: string): Money {
    return source.reduce(this, to);
  }

  addRate(from: string, to: string, rate: number): void {
    if (this.rates[from] === undefined) this.rates[from] = {};
    this.rates[from][to] = { rate: rate };
  }

  rate(from: string, to: string): number {
    if (from === to) return 1;
    if (this.rates[from] === undefined || this.rates[from][to] === undefined)
      throw Error('Converstion rate not found');
    const rate = this.rates[from][to].rate;
    return rate;
  }
}
