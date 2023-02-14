import { isPalindrome } from '../009-palindrome-number'; 

describe('isPalindrome', () => {
  test('returns true if the number is a palindrome', () => {
    expect(isPalindrome(121)).toBe(true);
    expect(isPalindrome(1221)).toBe(true);
    expect(isPalindrome(12321)).toBe(true);
    expect(isPalindrome(123321)).toBe(true);
  });

  test('returns false if the number is not a palindrome', () => {
    expect(isPalindrome(-121)).toBe(false);
    expect(isPalindrome(10)).toBe(false);
    expect(isPalindrome(123)).toBe(false);
  });
});