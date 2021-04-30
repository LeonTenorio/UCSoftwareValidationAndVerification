"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const silly_pascal_1 = __importDefault(require("./silly-pascal"));
test('C1', () => {
    const input = 'aaaa';
    expect(silly_pascal_1.default(input)).toEqual(true);
});
test('C2', () => {
    let input = '';
    expect(silly_pascal_1.default(input)).toEqual(false);
});
test('C3', () => {
    const input = 'acbdefg';
    expect(silly_pascal_1.default(input)).toEqual(false);
});
test('C4', () => {
    const input = 'a123';
    expect(silly_pascal_1.default(input)).toEqual(true);
});
test('C5', () => {
    const input = '11bc';
    expect(silly_pascal_1.default(input)).toEqual(false);
});
test('C6', () => {
    const input = 'z9w8x7';
    expect(silly_pascal_1.default(input)).toEqual(true);
});
test('C7', () => {
    const input = 'z9w~x7t';
    expect(silly_pascal_1.default(input)).toEqual(false);
});
