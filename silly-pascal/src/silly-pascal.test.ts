import isValid from './silly-pascal';

test('C1', () => {
  const input: string = 'aaaa';
  expect(isValid(input)).toEqual(true);
});

test('C2', () => {
  let input: string = '';
  expect(isValid(input)).toEqual(false);
});

test('C3', () => {
  const input = 'acbdefg';
  expect(isValid(input)).toEqual(false);
});

test('C4', () => {
  const input = 'a123';
  expect(isValid(input)).toEqual(true);
});

test('C5', () => {
  const input = '11bc';
  expect(isValid(input)).toEqual(false);
});

test('C6', () => {
  const input = 'z9w8x7';
  expect(isValid(input)).toEqual(true);
});

test('C7', () => {
  const input = 'z9w~x7t';
  expect(isValid(input)).toEqual(false);
});
