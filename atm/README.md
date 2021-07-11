## Sixth exercise - ATM withdrawal possibility algorithm

In this exercise I used an ATM withdrawal algorithm originally implemented using Java (reference [`StackOverflow`](https://stackoverflow.com/questions/22128759/atm-algorithm-of-giving-money-with-limited-amount-of-bank-notes)) in Typescript to practice the TDD method of implementation.

The typescript implementation can be found in the [`atm.ts`](./src/atm.ts) file. In this file, in addition to transcribing the java implementation, I also implemented a Bill object to use the bill value and the bill amount togheter.

I used the `jest` library to test the implementation and the test file can be found in the [`atm.test.ts`](./src/atm.test.ts) file. To run this test, we can use `yarn test`.
