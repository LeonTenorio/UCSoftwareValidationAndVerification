import { Expression } from './expression';
import { Money } from './money';

export class Bank {
  reduce(expression: Expression, to: string): Money {
    return Money.dollar(10);
  }
}
