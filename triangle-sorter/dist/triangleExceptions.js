"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidTriangleConfiguration = exports.InvalidTriangleSize = void 0;
class InvalidTriangleSize extends Error {
    constructor(message) {
        super(message);
        this.name = 'InvalidTriangleSize';
    }
}
exports.InvalidTriangleSize = InvalidTriangleSize;
class InvalidTriangleConfiguration extends Error {
    constructor(message) {
        super(message);
        this.name = 'InvalidTriangleConfiguration';
    }
}
exports.InvalidTriangleConfiguration = InvalidTriangleConfiguration;
