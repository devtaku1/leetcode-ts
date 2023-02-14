"use strict";
//-----------------------------------------------------------------------------
// Runtime: 175 ms
// Memory Usage: 51.1 MB
// Time Complexity: O(log n)
// Space Complexity: O(1)
// Link: https://leetcode.com/submissions/detail/898062312/
//-----------------------------------------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPalindrome = void 0;
function isPalindrome(x) {
    if (x < 0)
        return false;
    var num = x;
    var reversed = 0;
    while (num > 0) {
        reversed = reversed * 10 + (num % 10);
        num = Math.floor(num / 10);
    }
    return reversed === x;
}
exports.isPalindrome = isPalindrome;
