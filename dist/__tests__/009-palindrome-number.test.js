"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _009_palindrome_number_1 = require("../009-palindrome-number");
describe('isPalindrome', function () {
    test('returns true if the number is a palindrome', function () {
        expect((0, _009_palindrome_number_1.isPalindrome)(121)).toBe(true);
        expect((0, _009_palindrome_number_1.isPalindrome)(1221)).toBe(true);
        expect((0, _009_palindrome_number_1.isPalindrome)(12321)).toBe(true);
        expect((0, _009_palindrome_number_1.isPalindrome)(123321)).toBe(true);
    });
    test('returns false if the number is not a palindrome', function () {
        expect((0, _009_palindrome_number_1.isPalindrome)(-121)).toBe(false);
        expect((0, _009_palindrome_number_1.isPalindrome)(10)).toBe(false);
        expect((0, _009_palindrome_number_1.isPalindrome)(123)).toBe(false);
    });
});
