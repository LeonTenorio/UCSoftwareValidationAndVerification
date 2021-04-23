## First exercise - Triangle exercise

In this exercise, I created a triangle sorter. This classifier verifies if the triangle can exist and classifies between equilateral, scalene and isosceles.

If the triangle values cannot exist, the triangle will throw an InvalidTriangleSize exception if any size value is negative and if this is due to the invalid mathematical condition, it will throw an InvalidTriangleConfiguration. Both exceptions are in the [`triangleExceptions.ts`](src/triangleExceptions.ts).

The triangle class is inside the [`triangle.ts`](src/triangle.ts).

The main activity of this exercise is the tests, so we have some initial tests in the [`triangle.test.ts`](src/triangle.test.ts) file configured using `jest` and the `package.json` file has the `test` script, so we can run all `.test.ts` files using `npm test`.
