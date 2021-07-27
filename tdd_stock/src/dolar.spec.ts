import { Dollar } from './dolar';

describe('Dollar', () => {
  it('should return 10 when five dollars are multiplied by two and 15 when five dollars are multiplied by three', () => {
    const five: Dollar = new Dollar(5);
    let product: Dollar = five.times(2);
    expect(product.amount).toEqual(10);

    product = five.times(3);
    expect(product.amount).toEqual(15);
  });

  it('should return true when dollares of the same value are compared', () => {
    expect(new Dollar(5).equals(new Dollar(5))).toBe(true);
    expect(new Dollar(5).equals(new Dollar(6))).toBe(false);
  });
});
