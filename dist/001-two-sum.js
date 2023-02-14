"use strict";
//-----------------------------------------------------------------------------
// Runtime: 62ms
// Memory Usage: 46.1 MB
// Time Complexity: O(n)
// Space Complexity: O(n)
// Link: https://leetcode.com/submissions/detail/895519673/
//-----------------------------------------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
exports.twoSum = void 0;
function twoSum(nums, target) {
    var map = new Map();
    for (var i = 0; i < nums.length; i++) {
        var complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
    return [];
}
exports.twoSum = twoSum;
