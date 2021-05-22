"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const silly_pascal_1 = __importDefault(require("./silly-pascal"));
test('C1 - C4 - C6 - L1 - L5', () => {
    const input = 'a';
    expect(silly_pascal_1.default(input)).toBe(true);
});
test('C5 - L1 - L7', () => {
    const input = '0';
    expect(silly_pascal_1.default(input)).toBe(false);
});
test('C1 - C4 - C6 - L3', () => {
    const input = 'aaaA';
    expect(silly_pascal_1.default(input)).toEqual(true);
});
test('C1 - C4 - C6 - L4 - L6 - L5 - L8', () => {
    const input = 'Z19za';
    expect(silly_pascal_1.default(input)).toEqual(true);
});
test('C2 - L1', () => {
    let input = '';
    expect(silly_pascal_1.default(input)).toEqual(false);
});
test('C3 - L2', () => {
    const input = 'acbdefg';
    expect(silly_pascal_1.default(input)).toEqual(false);
});
test('C1 - C4 - C6', () => {
    const input = 'a123';
    expect(silly_pascal_1.default(input)).toEqual(true);
});
test('C5', () => {
    const input = '11bc';
    console.log(silly_pascal_1.default(input));
    expect(silly_pascal_1.default(input)).toEqual(false);
});
test('C1 - C4 - C6', () => {
    const input = 'z9w8x7';
    expect(silly_pascal_1.default(input)).toEqual(true);
});
test('C7 - L6 - L8', () => {
    const input = 'z9w{x7';
    expect(silly_pascal_1.default(input)).toEqual(false);
});
test('C7 - L4 - L6 - L8', () => {
    const input = 'z9w]x7';
    expect(silly_pascal_1.default(input)).toEqual(false);
});
test('C7 - L6 - L8', () => {
    const input = 'z9w:x7';
    expect(silly_pascal_1.default(input)).toEqual(false);
});
test('C7 - L6 - L7 - L8', () => {
    const input = 'z9w/x7';
    expect(silly_pascal_1.default(input)).toEqual(false);
});
