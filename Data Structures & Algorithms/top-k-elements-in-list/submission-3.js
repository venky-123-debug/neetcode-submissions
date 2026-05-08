/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
class Solution {
    topKFrequent(nums, k) {
        let map = new Map()
        for (let i = 0; i < nums.length; i++) {
            map.set(nums[i], (map.get(nums[i]) || 0) + 1)
        }
        let entries = Array.from(map.entries());
        entries.sort((a, b) => b[1] - a[1]);
        let res = []
        for (let i = 0; i < k; i++) {
            res.push(entries[i][0])
        }
        return res
    }
}