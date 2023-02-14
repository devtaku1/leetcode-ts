"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _001_two_sum_1 = require("../001-two-sum");
describe('twoSum', function () {
    test('returns the indices of the two numbers that add up to the target', function () {
        expect((0, _001_two_sum_1.twoSum)([2, 7, 11, 15], 9)).toEqual([0, 1]);
        expect((0, _001_two_sum_1.twoSum)([3, 2, 4], 6)).toEqual([1, 2]);
        expect((0, _001_two_sum_1.twoSum)([3, 3, 6], 6)).toEqual([0, 1]);
    });
    test('returns an empty array if no two numbers add up to the target', function () {
        expect((0, _001_two_sum_1.twoSum)([2, 7, 12, 15], 18)).toEqual([]);
    });
});
