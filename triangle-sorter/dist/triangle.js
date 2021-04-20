"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TriangleType = void 0;
const triangleExceptions_1 = require("./triangleExceptions");
var TriangleType;
(function (TriangleType) {
    TriangleType[TriangleType["EQUILATERAL"] = 0] = "EQUILATERAL";
    TriangleType[TriangleType["SCALENE"] = 1] = "SCALENE";
    TriangleType[TriangleType["ISOSCELES"] = 2] = "ISOSCELES";
})(TriangleType = exports.TriangleType || (exports.TriangleType = {}));
class Triangle {
    constructor(sideA, sideB, sideC) {
        if (sideA <= 0 || sideB <= 0 || sideC <= 0) {
            throw new triangleExceptions_1.InvalidTriangleSize('InvalidTriangleSize.');
        }
        if (!this._checkCondiction(sideA, sideB, sideC) ||
            !this._checkCondiction(sideA, sideC, sideB) ||
            !this._checkCondiction(sideB, sideC, sideA)) {
            throw new triangleExceptions_1.InvalidTriangleConfiguration('InvalidTriangleConfiguration.');
        }
        this.sideA = sideA;
        this.sideB = sideB;
        this.sideC = sideC;
    }
    _checkCondiction(a, b, c) {
        const diffAB = Math.abs(a - b);
        const sumAB = a + b;
        if (c > diffAB && c < sumAB)
            return true;
        return false;
    }
    classify() {
        var count = 0;
        if (this.sideA == this.sideB)
            count++;
        if (this.sideA == this.sideC)
            count++;
        if (this.sideB == this.sideC)
            count++;
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
exports.default = Triangle;
