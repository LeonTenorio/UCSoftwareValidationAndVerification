import { Dollar } from './dolar';
import { Euro } from './euro';

describe('Money', () => {
  it('should correctly hanlde dollar multiplication', () => {
    const five: Dollar = new Dollar(5);
    expect(five.times(2).equals(new Dollar(10))).toBe(true);

    expect(five.times(3).equals(new Dollar(15))).toBe(true);
  });

  it('should correctly hanlde euro multiplication', () => {
    const five: Euro = new Euro(5);
    expect(five.times(2).equals(new Euro(10))).toBe(true);

    expect(five.times(3).equals(new Euro(15))).toBe(true);
  });

  it('should correctly handle money equality', () => {
    expect(new Dollar(5).equals(new Dollar(5))).toBe(true);
    expect(new Dollar(5).equals(new Dollar(6))).toBe(false);
    expect(new Euro(5).equals(new Euro(5))).toBe(true);
    expect(new Euro(5).equals(new Euro(6))).toBe(false);
  });
});
