// https://leetcode.com/problems/binary-search/description/

/**
 * Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.

Example 1:

Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4
Example 2:

Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1
 */
/**
 * Сложность по времени O(logn)
 * Сложность по памяти O(1)
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let indexStart = 0;
  let indexEnd = nums.length - 1;

  while (indexStart <= indexEnd) {
    let midIndex = Math.floor((indexStart + indexEnd) / 2);

    if (nums[midIndex] === target) return midIndex;
    if (nums[midIndex] < target) {
      indexStart = midIndex + 1;
    } else {
      indexEnd = midIndex - 1;
    }
  }

  return -1;
};

console.log(search([-1, 0, 3, 5, 9, 12], 12));
console.log(search([-1, 0, 3, 5, 9, 12], 2));
