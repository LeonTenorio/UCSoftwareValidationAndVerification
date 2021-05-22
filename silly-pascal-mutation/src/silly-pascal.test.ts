import isValid from './silly-pascal';

test('C1 - C4 - C6 - L1 - L5', () => {
  const input: string = 'a';
  expect(isValid(input)).toBe(true);
});

test('C5 - L1 - L7', () => {
  const input: string = '0';
  expect(isValid(input)).toBe(false);
});

test('C1 - C4 - C6 - L3', () => {
  const input: string = 'aaaA';
  expect(isValid(input)).toEqual(true);
});

test('C1 - C4 - C6 - L4 - L6 - L5 - L8', () => {
  const input: string = 'Z19za';
  expect(isValid(input)).toEqual(true);
});

test('C2 - L1', () => {
  let input: string = '';
  expect(isValid(input)).toEqual(false);
});

test('C3 - L2', () => {
  const input = 'acbdefg';
  expect(isValid(input)).toEqual(false);
});

test('C1 - C4 - C6', () => {
  const input = 'a123';
  expect(isValid(input)).toEqual(true);
});

test('C5', () => {
  const input = '11bc';
  console.log(isValid(input));
  expect(isValid(input)).toEqual(false);
});

test('C1 - C4 - C6', () => {
  const input = 'z9w8x7';
  expect(isValid(input)).toEqual(true);
});

test('C7 - L6 - L8', () => {
  const input = 'z9w{x7';
  expect(isValid(input)).toEqual(false);
});

test('C7 - L4 - L6 - L8', () => {
  const input = 'z9w]x7';
  expect(isValid(input)).toEqual(false);
});

test('C7 - L6 - L8', () => {
  const input = 'z9w:x7';
  expect(isValid(input)).toEqual(false);
});

test('C7 - L6 - L7 - L8', () => {
  const input = 'z9w/x7';
  expect(isValid(input)).toEqual(false);
});
