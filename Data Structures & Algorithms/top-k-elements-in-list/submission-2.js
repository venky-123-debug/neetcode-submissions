/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
class Solution {
    topKFrequent(nums, k) {
        let map = new Map();
        
        // Step 1: Count frequency of each number
        for (let i = 0; i < nums.length; i++) {
            map.set(nums[i], (map.get(nums[i]) || 0) + 1);
        }

        // Step 2: Get entries and sort by frequency (descending)
        let entries = Array.from(map.entries());
        
        // Sort by frequency descending (b[1] - a[1])
        entries.sort((a, b) => b[1] - a[1]);

        // Step 3: Take first k numbers
        let res = [];
        for (let i = 0; i < k; i++) {
            res.push(entries[i][0]); // only the number, not frequency
        }

        return res;
    }
}