import {
  InvalidTriangleSize,
  InvalidTriangleConfiguration,
} from './triangleExceptions';

export enum TriangleType {
  EQUILATERAL,
  SCALENE,
  ISOSCELES,
}

export default class Triangle {
  sideA: number;
  sideB: number;
  sideC: number;

  _checkCondiction(a: number, b: number, c: number): boolean {
    const diffAB = Math.abs(a - b);
    const sumAB = a + b;
    if (c > diffAB && c < sumAB) return true;
    return false;
  }

  constructor(sideA: number, sideB: number, sideC: number) {
    if (sideA <= 0 || sideB <= 0 || sideC <= 0) {
      throw new InvalidTriangleSize('InvalidTriangleSize.');
    }

    if (
      !this._checkCondiction(sideA, sideB, sideC) ||
      !this._checkCondiction(sideA, sideC, sideB) ||
      !this._checkCondiction(sideB, sideC, sideA)
    ) {
      throw new InvalidTriangleConfiguration('InvalidTriangleConfiguration.');
    }

    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }

  classify(): TriangleType {
    var count: number = 0;
    if (this.sideA == this.sideB) count++;
    if (this.sideA == this.sideC) count++;
    if (this.sideB == this.sideC) count++;

    switch (count) {
      case 0:
        return TriangleType.SCALENE;
        break;
      case 1:
        return TriangleType.ISOSCELES;
        break;
      default:
        return TriangleType.EQUILATERAL;
        break;
    }
  }
}
