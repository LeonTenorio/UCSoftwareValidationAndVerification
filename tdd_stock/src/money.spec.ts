import { Bank } from './bank';
import { Expression } from './expression';
import { Money } from './money';
import { Sum } from './sum';

describe('Money', () => {
  it('should hanlde dollar multiplication', () => {
    const five: Money = Money.dollar(5);
    expect(five.times(2).equals(Money.dollar(10))).toBe(true);

    expect(five.times(3).equals(Money.dollar(15))).toBe(true);
  });

  it('should handle money equality', () => {
    expect(Money.dollar(5).equals(Money.dollar(5))).toBe(true);
    expect(Money.dollar(5).equals(Money.dollar(6))).toBe(false);
    expect(Money.euro(5).equals(Money.dollar(5))).toBe(false);
  });

  it('should handle currencies', () => {
    expect(Money.dollar(1).currency()).toEqual('USD');
    expect(Money.euro(1).currency()).toEqual('EUR');
  });

  it('should handle simple addition', () => {
    const five = Money.dollar(5);
    const sum: Expression = five.plus(five);
    const bank = new Bank();
    const reduced: Money = bank.reduce(sum, 'USD');
    expect(reduced.equals(Money.dollar(10))).toBe(true);
  });

  it('should return a sum when plus is used', () => {
    const five = Money.dollar(5);
    const result: Expression = five.plus(five);
    const sum = result as Sum;
    expect(sum.augend).toEqual(five);
    expect(sum.addend).toEqual(five);
  });

  it('should reduce a sum', () => {
    const sum: Expression = new Sum(Money.dollar(5), Money.dollar(4));
    const bank = new Bank();
    const result = bank.reduce(sum, 'USD');
    expect(result).toEqual(Money.dollar(9));
  });

  it('should reduce from a money', () => {
    const bank = new Bank();
    const result: Money = bank.reduce(Money.dollar(1), 'USD');
    expect(result).toEqual(Money.dollar(1));
  });

  it('should reduce from dfferent currencies', () => {
    const bank = new Bank();
    bank.addRate('EUR', 'USD', 2);
    const result = bank.reduce(Money.euro(2), 'USD');
    expect(result.equals(Money.dollar(1))).toBe(true);
  });

  it('should hanble identity rate', () => {
    expect(new Bank().rate('USD', 'USD')).toEqual(1);
  });
});
