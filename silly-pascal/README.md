## Second exercise - Silly Pascal

In this exercise, I create a Silly Pascal verifier. This function checks if the input string is a valid silly pascal.

The implemented function is inside the [silly-pascal.ts](src/silly-pascal.ts) file.

Analyzing the silly pascal specifications I defined some equivalence classes (input is the input string):

| Input variable |            Valid equivalence class            |            Invalid equivalence class             |
| :------------: | :-------------------------------------------: | :----------------------------------------------: |
|     length     |             1 <= length <= 6 (C1)             |         length < 1 (C2) length > 6 (C3)          |
|    input[0]    |            isLetter(input[0]) (C4)            |             !isLetter(input[0]) (C5)             |
| i>0, input[i]  | isLetter(input[i]) && isNumber(input[i]) (C6) | !(isLetter(input[i]) && isNumber(input[i])) (C7) |

The main activity of this exercise is the tests. In the [`silly-pascal.test.ts`](src/silly-pascal.test.ts) file we have the tests configured using `jest`.

The `package.json` file has the `test` script, so we can run all `.test.ts` files using `npm test`.
