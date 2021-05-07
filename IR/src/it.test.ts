import { calculaIR } from './ir';

test('1-3-5-7', () => {
  const payment: number = 500.0;
  const expectedIr: number = 0.0;

  const ir: number = calculaIR(payment);
  expect(ir).toBe(expectedIr);
});

test('1-2-3-5-7', () => {
  const payment: number = 1500.0;
  const expectedIr: number = (payment - 1000.0) * 0.15;

  const ir: number = calculaIR(payment);
  expect(ir).toBe(expectedIr);
});

test('1-3-4-5-7', () => {
  const payment: number = 2500.0;
  const expectedIr: number = (payment - 2000.0) * 0.2 + 150;

  const ir: number = calculaIR(payment);
  expect(ir).toBe(expectedIr);
});

test('1-3-5-6-7', () => {
  //Acording the function comentary and the program implementation
  //something is wrong with the program when we put a payment bigger than 3000
  //That Test shows it to us.
  const payment: number = 3500.0;
  const expectedIr: number = (payment - 2000.0) * 0.2 + 150;

  const ir: number = calculaIR(payment);
  expect(ir).toBe(expectedIr);
});
