"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const triangle_1 = __importStar(require("./triangle"));
const triangleExceptions_1 = require("./triangleExceptions");
test('Not valid triangle size', () => {
    const invalidFollowParams = [-5, -3, -2, -1, 0];
    invalidFollowParams.map((n) => {
        expect(() => {
            new triangle_1.default(n, n, n);
        }).toThrow(new triangleExceptions_1.InvalidTriangleSize('InvalidTriangleSize.'));
    });
});
test('Not valid triangle possible configuration', () => {
    expect(() => {
        new triangle_1.default(3, 2, 1);
    }).toThrow(new triangleExceptions_1.InvalidTriangleConfiguration('InvalidTriangleConfiguration.'));
    expect(() => {
        new triangle_1.default(2, 3, 1);
    }).toThrow(new triangleExceptions_1.InvalidTriangleConfiguration('InvalidTriangleConfiguration.'));
    expect(() => {
        new triangle_1.default(2, 1, 3);
    }).toThrow(new triangleExceptions_1.InvalidTriangleConfiguration('InvalidTriangleConfiguration.'));
    expect(() => {
        new triangle_1.default(1, 3, 2);
    }).toThrow(new triangleExceptions_1.InvalidTriangleConfiguration('InvalidTriangleConfiguration.'));
    expect(() => {
        new triangle_1.default(2, 2, 5);
    }).toThrow(new triangleExceptions_1.InvalidTriangleConfiguration('InvalidTriangleConfiguration.'));
    expect(() => {
        new triangle_1.default(2, 5, 2);
    }).toThrow(new triangleExceptions_1.InvalidTriangleConfiguration('InvalidTriangleConfiguration.'));
    expect(() => {
        new triangle_1.default(5, 2, 2);
    }).toThrow(new triangleExceptions_1.InvalidTriangleConfiguration('InvalidTriangleConfiguration.'));
    expect(() => {
        new triangle_1.default(3, 3, 12);
    }).toThrow(new triangleExceptions_1.InvalidTriangleConfiguration('InvalidTriangleConfiguration.'));
});
test('correct classification', () => {
    const invalidFollowParams = [2, 3, 4, 7];
    invalidFollowParams.map((n) => {
        const equilateralClassification = new triangle_1.default(n, n, n).classify();
        expect(equilateralClassification).toEqual(triangle_1.TriangleType.EQUILATERAL);
        const isoscelesClassification = new triangle_1.default(2 * n + 1, 2 * n + 1, n).classify();
        expect(isoscelesClassification).toEqual(triangle_1.TriangleType.ISOSCELES);
        const scaleneClassification = new triangle_1.default(2 * n, 2 * n + 1, n).classify();
        expect(scaleneClassification).toEqual(triangle_1.TriangleType.SCALENE);
    });
});
