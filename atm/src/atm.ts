import { Bill } from './Bill';
import { cloneDeep } from 'lodash';

function solutions(
  values: Array<number>,
  amounts: Array<number>,
  variation: Array<number>,
  price: number,
  position: number
): Array<Array<number>> {
  let list: Array<Array<number>> = [];
  const value = compute(values, variation);
  if (value < price) {
    for (let i = position; i < values.length; i++) {
      if (amounts[i] > variation[i]) {
        const newvariation: Array<number> = cloneDeep(variation);
        newvariation[i]++;
        const newList = solutions(values, amounts, newvariation, price, i);
        if (newList.length > 0) {
          list = [...list, ...newList];
        }
      }
    }
  } else if (value === price) {
    list.push(cloneDeep(variation));
  }
  return list;
}

function compute(values: Array<number>, variation: Array<number>): number {
  let ret = 0;
  for (let i = 0; i < variation.length; i++) {
    ret += values[i] * variation[i];
  }
  return ret;
}

function _solution(
  bills: Array<Bill>,
  withdrawAmount: number
): Array<Array<Bill>> {
  bills.sort((a: Bill, b: Bill) => {
    if (a.value === b.value) return 0;
    else if (a.value > b.value) return -1;
    else return 1;
  });
  const values: Array<number> = [];
  const amounts: Array<number> = [];
  const variation: Array<number> = [];
  bills.forEach((bill: Bill) => {
    values.push(bill.value);
    amounts.push(bill.amount);
    variation.push(0);
  });

  return solutions(values, amounts, variation, withdrawAmount, 0).map(
    (solution): Array<Bill> => {
      return solution.map((amount, index): Bill => {
        return {
          value: values[index],
          amount: amount,
        };
      });
    }
  );
}

export type Configurations = {
  moreHigherBills: Array<Bill>;
  moreLowerBills: Array<Bill>;
};

export class ATM {
  private readonly bills: Array<Bill>;

  constructor(bills: Array<Bill>) {
    this.bills = bills;
  }

  static solution(bills: Array<Bill>, withdrawAmount: number) {
    return _solution(bills, withdrawAmount);
  }

  public getConfigurations(amount: number): Configurations {
    const solutions = _solution(this.bills, amount);

    return {
      moreHigherBills: solutions[0],
      moreLowerBills: solutions[solutions.length - 1],
    };
  }
}
