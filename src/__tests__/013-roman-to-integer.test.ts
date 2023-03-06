import { romanToInt } from '../013-roman-to-integer';

describe('Roman to Integer', () => {
  test('returns the integer value of the Roman numeral', () => {
    expect(romanToInt('III')).toBe(3);
    expect(romanToInt('IV')).toBe(4);
    expect(romanToInt('IX')).toBe(9);
    expect(romanToInt('LVIII')).toBe(58);
    expect(romanToInt('MCMXCIV')).toBe(1994);
  });
});
