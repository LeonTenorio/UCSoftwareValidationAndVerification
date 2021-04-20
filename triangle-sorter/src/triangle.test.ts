import Triangle, { TriangleType } from './triangle';
import {
  InvalidTriangleConfiguration,
  InvalidTriangleSize,
} from './triangleExceptions';

test('Not valid triangle size', () => {
  const invalidFollowParams: Array<number> = [-5, -3, -2, -1, 0];

  invalidFollowParams.map<void>((n: number) => {
    expect(() => {
      new Triangle(n, n, n);
    }).toThrow(new InvalidTriangleSize('InvalidTriangleSize.'));
  });
});

test('Not valid triangle possible configuration', () => {
  expect(() => {
    new Triangle(3, 2, 1);
  }).toThrow(new InvalidTriangleConfiguration('InvalidTriangleConfiguration.'));

  expect(() => {
    new Triangle(2, 3, 1);
  }).toThrow(new InvalidTriangleConfiguration('InvalidTriangleConfiguration.'));

  expect(() => {
    new Triangle(2, 1, 3);
  }).toThrow(new InvalidTriangleConfiguration('InvalidTriangleConfiguration.'));

  expect(() => {
    new Triangle(1, 3, 2);
  }).toThrow(new InvalidTriangleConfiguration('InvalidTriangleConfiguration.'));

  expect(() => {
    new Triangle(2, 2, 5);
  }).toThrow(new InvalidTriangleConfiguration('InvalidTriangleConfiguration.'));

  expect(() => {
    new Triangle(2, 5, 2);
  }).toThrow(new InvalidTriangleConfiguration('InvalidTriangleConfiguration.'));

  expect(() => {
    new Triangle(5, 2, 2);
  }).toThrow(new InvalidTriangleConfiguration('InvalidTriangleConfiguration.'));

  expect(() => {
    new Triangle(3, 3, 12);
  }).toThrow(new InvalidTriangleConfiguration('InvalidTriangleConfiguration.'));
});

test('correct classification', () => {
  const invalidFollowParams: Array<number> = [2, 3, 4, 7];

  invalidFollowParams.map<void>((n: number) => {
    const equilateralClassification: TriangleType = new Triangle(
      n,
      n,
      n
    ).classify();

    expect(equilateralClassification).toEqual(TriangleType.EQUILATERAL);

    const isoscelesClassification: TriangleType = new Triangle(
      2 * n + 1,
      2 * n + 1,
      n
    ).classify();

    expect(isoscelesClassification).toEqual(TriangleType.ISOSCELES);

    const scaleneClassification: TriangleType = new Triangle(
      2 * n,
      2 * n + 1,
      n
    ).classify();

    expect(scaleneClassification).toEqual(TriangleType.SCALENE);
  });
});
