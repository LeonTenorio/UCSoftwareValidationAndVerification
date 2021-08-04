import { Money } from './money';

describe('Money', () => {
  it('should correctly hanlde dollar multiplication', () => {
    const five: Money = Money.dollar(5);
    expect(five.times(2).equals(Money.dollar(10))).toBe(true);

    expect(five.times(3).equals(Money.dollar(15))).toBe(true);
  });

  it('should correctly hanlde euro multiplication', () => {
    const five: Money = Money.euro(5);
    expect(five.times(2).equals(Money.euro(10))).toBe(true);

    expect(five.times(3).equals(Money.euro(15))).toBe(true);
  });

  it('should correctly handle money equality', () => {
    expect(Money.dollar(5).equals(Money.dollar(5))).toBe(true);
    expect(Money.dollar(5).equals(Money.dollar(6))).toBe(false);
    expect(Money.euro(5).equals(Money.euro(5))).toBe(true);
    expect(Money.euro(5).equals(Money.euro(6))).toBe(false);
    expect(Money.euro(5).equals(Money.dollar(5))).toBe(false);
  });

  it('should correctly handle currencies', () => {
    expect(Money.dollar(1).currency()).toEqual('USD');
    expect(Money.euro(1).currency()).toEqual('EUR');
  });
});
