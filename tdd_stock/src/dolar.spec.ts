import { Dollar } from './dolar';
import { Euro } from './euro';

describe('Dollar', () => {
  it('should return 10 when five dollars are multiplied by two and 15 when five dollars are multiplied by three', () => {
    const five: Dollar = new Dollar(5);
    expect(five.times(2).equals(new Dollar(10))).toBe(true);

    expect(five.times(3).equals(new Dollar(15))).toBe(true);
  });

  it('should return 10 when five euros are multiplied by two and 15 when five euros are multiplied by three', () => {
    const five: Euro = new Euro(5);
    expect(five.times(2).equals(new Euro(10))).toBe(true);

    expect(five.times(3).equals(new Euro(15))).toBe(true);
  });

  it('should return true when dollares of the same value are compared', () => {
    expect(new Dollar(5).equals(new Dollar(5))).toBe(true);
    expect(new Dollar(5).equals(new Dollar(6))).toBe(false);
  });

  it('should return true when euros of the same value are compared', () => {
    expect(new Euro(5).equals(new Euro(5))).toBe(true);
    expect(new Euro(5).equals(new Euro(6))).toBe(false);
  });
});
