import * as fc from 'fast-check';
import SillyPascal from './silly-pascal';

test('Array of numbers test', () =>
  fc.assert(
    fc.property(fc.array(fc.integer()), (array) => {
      const input: string = array.map((n: number) => Math.abs(n)).join('');
      const isSilly: boolean = SillyPascal(input);

      if (!isSilly) return true;

      return false;
    })
  ));

test('(A-Z, a-z, 0-9, + or /) in the first letter with an hexadecimal code', () =>
  fc.assert(
    fc.property(fc.base64(), fc.array(fc.hexa()), (initial, array) => {
      const input: string = initial + array.join('');
      const isSilly: boolean = SillyPascal(input);

      const initialCharCode = initial.charCodeAt(0);

      if (
        initialCharCode < 65 ||
        (initialCharCode > 90 && initialCharCode < 97) ||
        initialCharCode > 122
      ) {
        if (isSilly) return false;

        return true;
      } else {
        if (input.length >= 1 && input.length <= 6 && !isSilly) return false;
        return true;
      }
    })
  ));

test('(A-Z, a-z, 0-9, + or /) in all letters', () =>
  fc.assert(
    fc.property(fc.array(fc.base64()), (array) => {
      const input: string = array.join('');
      const isSilly: boolean = SillyPascal(input);

      if (isSilly && (input.length < 1 || input.length > 6)) return false;

      input.split('').forEach(function (char: string) {
        if ((char === '+' || char === '/') && isSilly) return false;
      });

      return true;
    })
  ));
