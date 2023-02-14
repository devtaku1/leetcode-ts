//-----------------------------------------------------------------------------
// Runtime: 175 ms
// Memory Usage: 51.1 MB
// Time Complexity: O(log n)
// Space Complexity: O(1)
// Link: https://leetcode.com/submissions/detail/898062312/
//-----------------------------------------------------------------------------



/*
The idea is to use one pointer to traverse the integer from the left side and another 
pointer to traverse the integer from the right side. We compare the digits at the two 
pointers in each iteration and return false if they are not equal. If we reach the middle 
of the integer without finding any unequal digits, we return true. 
*/

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