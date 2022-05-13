// Asked in "Python interview with a LinkedIn engineer: Matching pairs": https://youtu.be/wBXZD436JAg

/*
  Given an array of integers, return indices of the two numbers such that they add up to a specific target.

  You may assume that each input would have exactly one solution, and you may not use the same element twice.
*/

// const nums1 = [2, 11, 7, 15];
// const targetSum1 = 9;
// const expected1 = [0, 2];
// // Explanation: nums[0] + nums[2] = 2 + 7 = 9. Return order doesn't matter.

// const nums2 = [10, 3, 2, 5, 4, -1];
// const targetSum2 = 6;
// const expected2 = [2, 4];

// const nums3 = [3, 8, 4, 1, 9, 0, -2];
// const targetSum3 = 6;
// const expected3 = [1, 6];

/**
 * Finds the indexes of the nums that add up to the given target sum.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums Unordered nums.
 * @param {number} targetSum
 * @returns {Array<number>} The two indexes of the numbers in the given nums
 *    that add up to the targetSum.
 */
function twoSum(nums, targetSum) { }

/*****************************************************************************/

/**
 * Finds the indexes of the nums that add up to the given target sum.
 * - Time: O(n) linear.
 * - Space: O(n) linear.
 * @param {Array<number>} nums Unordered nums.
 * @param {number} targetSum
 * @returns {Array<number>} The two indexes of the numbers in the given nums
 *    that add up to the targetSum.
 */
function twoSum(nums, targetSum) {
    let i = 0;
    let j = i + 1;
    const answer = [];

    while (i < nums.length - 1) {

        if (j >= nums.length) {
            i++
            j = i + 1
        }
        else if (nums[i] + nums[j] === targetSum) {
            answer.push(i);
            answer.push(j);
            break
        }
        else {
            j++
        }
    }
    return (answer)

}
// console.log(twoSum(nums1, targetSum1)

const nums1 = [1, 1, 1, 2, 2, 3];
const k1 = 2;
const expected1 = [1, 2];
// Explanation: return the two most frequent elements, 1 and 2 are the two most frequent elements

const nums2 = [0, 0, 0, 2, 2, 3];
const k2 = 1;
const expected2 = [0];
// Explanation: k being 1 means return the single most frequent element

const nums3 = [1, 1, 2, 2, 3, 3];
const k3 = 3;
const expected3 = [1, 2, 3];


function kMostFrequent(nums, k) {
    const freqTable = {}
    for (let i = 0; i < nums.length; i++) {
        if (freqTable[nums[i]]) {
            freqTable[nums[i]] += 1
        }
        else {
            freqTable[nums[i]] = 1
        }
    }
    const freqToArray = Object.entries(freqTable)

    const sortedFreq = freqToArray.sort((a, b) => b[1] - a[1])

    const sortedIntFreq = sortedFreq.map(num => parseInt(num[0]))

    return sortedIntFreq.slice(0, k)
}