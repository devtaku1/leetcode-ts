//-----------------------------------------------------------------------------
// Runtime: 120 ms
// Memory Usage: 48.9 MB
// Time Complexity: O(n)
// Space Complexity: O(1)
// Link: https://leetcode.com/submissions/detail/898080916/
//-----------------------------------------------------------------------------

/*
  In this solution, we use a map to store the values of the Roman numerals. 
  We traverse the string from right to left and add the value of the current
  character to the result. If the value of the current character is less than
  the value of the previous character, we subtract the value of the current
  character from the result. We keep track of the value of the previous character
  in a variable.
*/

export function romanToInt(s: string): number {
  const romanValues = new Map([
    ['I', 1],
    ['V', 5],
    ['X', 10],
    ['L', 50],
    ['C', 100],
    ['D', 500],
    ['M', 1000],
  ]);

  let result = 0;
  let previousValue = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    const currentValue = romanValues.get(s[i]) as number;
    if (currentValue < previousValue) {
      result -= currentValue;
    } else {
      result += currentValue;
    }
    previousValue = currentValue;
  }

  return result;
}
