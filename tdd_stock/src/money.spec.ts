import { Money } from './money';

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
});
