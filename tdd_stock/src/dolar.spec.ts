import { Dollar } from './dolar';

describe('Dollar', () => {
  it('should return 10 when five dollars are multiplied by two and 15 when five dollars are multiplied by three', () => {
    const five: Dollar = new Dollar(5);
    expect(five.times(2).equals(new Dollar(10))).toBe(true);

    expect(five.times(3).equals(new Dollar(15))).toBe(true);
  });

  it('should return true when dollares of the same value are compared', () => {
    expect(new Dollar(5).equals(new Dollar(5))).toBe(true);
    expect(new Dollar(5).equals(new Dollar(6))).toBe(false);
  });
});
