//-----------------------------------------------------------------------------
// Runtime: 62ms
// Memory Usage: 46.1 MB
// Time Complexity: O(n)
// Space Complexity: O(n)
// Link: https://leetcode.com/submissions/detail/895519673/
//-----------------------------------------------------------------------------

export function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement) as number, i];
    }
    map.set(nums[i], i);
  }

  return [];
}
