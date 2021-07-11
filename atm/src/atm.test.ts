import { Bill } from './Bill';
import { ATM, Configurations } from './atm';

function summation(array: Array<Bill>): number {
  return array.map((value) => value.amount).reduce((a, b) => a + b);
}

test('Should contain two bills configurations in all atm confirations', () => {
  const bills: Array<Bill> = [
    { value: 100, amount: 10 },
    { value: 50, amount: 10 },
    { value: 20, amount: 10 },
    { value: 10, amount: 10 },
  ];
  const expectResults: Array<Array<Bill>> = [
    [
      { value: 50, amount: 2 },
      { value: 100, amount: 2 },
    ],
    [
      { value: 10, amount: 1 },
      { value: 20, amount: 2 },
      { value: 50, amount: 3 },
      { value: 100, amount: 1 },
    ],
  ];
  const withdrawAmount = 300;
  const result: Array<Array<Bill>> = ATM.solution(bills, withdrawAmount);
  expectResults.map((expectResult: Array<Bill>) => {
    expect(
      result.some((element) => {
        return element === expectResult;
      })
    );
  });
});

test('The higher and lower configurations should match with the expected configurations', () => {
  const bills: Array<Bill> = [
    { value: 100, amount: 10 },
    { value: 50, amount: 10 },
    { value: 20, amount: 10 },
    { value: 10, amount: 10 },
  ];

  const expectHight: Array<Bill> = [
    { value: 100, amount: 3 },
    { value: 50, amount: 0 },
    { value: 20, amount: 0 },
    { value: 10, amount: 0 },
  ];
  const expectLow: Array<Bill> = [
    { value: 100, amount: 0 },
    { value: 50, amount: 0 },
    { value: 20, amount: 10 },
    { value: 10, amount: 10 },
  ];
  const atm = new ATM(bills);
  const configurations: Configurations = atm.getConfigurations(300);
  const higherBills: number = summation(configurations.moreHigherBills);
  const lowerBills: number = summation(configurations.moreLowerBills);

  expect(higherBills < lowerBills).toBe(true);

  expect(
    JSON.stringify(configurations.moreHigherBills) ===
      JSON.stringify(expectHight)
  ).toBe(true);
  expect(
    JSON.stringify(configurations.moreLowerBills) === JSON.stringify(expectLow)
  ).toBe(true);
});
