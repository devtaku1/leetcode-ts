//-----------------------------------------------------------------------------
// Runtime: 175 ms
// Memory Usage: 51.1 MB
// Time Complexity: O(log n)
// Space Complexity: O(1)
// Link: https://leetcode.com/submissions/detail/898062312/
//-----------------------------------------------------------------------------

export function isPalindrome(x: number): boolean {
  if (x < 0) return false;

  let num = x;
  let reversed = 0;
  while (num > 0) {
    reversed = reversed * 10 + (num % 10);
    num = Math.floor(num / 10);
  }

  return reversed === x;
}
