// https://leetcode.com/problems/sort-an-array/description/

/**
 * 
Given an array of integers nums, sort the array in ascending order and return it.

You must solve the problem without using any built-in functions in O(nlog(n)) time complexity and with the smallest space complexity possible.

Example 1:

Input: nums = [5,2,3,1]
Output: [1,2,3,5]
Explanation: After sorting the array, the positions of some numbers are not changed (for example, 2 and 3), while the positions of other numbers are changed (for example, 1 and 5).
Example 2:

Input: nums = [5,1,1,2,0,0]
Output: [0,0,1,1,2,5]
Explanation: Note that the values of nums are not necessarily unique.
 */

// Берем опорник как последний элемент - падает как OOM на LeetCode
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
  if (nums.length < 2) return nums;

  const pivotElement = nums.pop();

  const lessOrEqualArr = [];
  const greaterArr = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] <= pivotElement) lessOrEqualArr.push(nums[i]);
    if (nums[i] > pivotElement) greaterArr.push(nums[i]);
  }

  return [...sortArray(lessOrEqualArr), pivotElement, ...sortArray(greaterArr)];
};

// console.log(sortArray([5, 2, 3, 1]));
// console.log(sortArray([5, 1, 1, 2, 0, 0]));

// Берем как опорник средний элемент - падаем как OOM на LeetCode
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayWithMiddlePivot = function (nums) {
  if (nums.length < 2) return nums;

  const [pivotElement] = nums.splice(Math.floor(nums.length / 2), 1);

  const lessOrEqualArr = [];
  const greaterArr = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] <= pivotElement) lessOrEqualArr.push(nums[i]);
    if (nums[i] > pivotElement) greaterArr.push(nums[i]);
  }

  return [
    ...sortArrayWithMiddlePivot(lessOrEqualArr),
    pivotElement,
    ...sortArrayWithMiddlePivot(greaterArr),
  ];
};

console.log(sortArrayWithMiddlePivot([5, 2, 3, 1]));
console.log(sortArrayWithMiddlePivot([5, 1, 1, 2, 0, 0]));
