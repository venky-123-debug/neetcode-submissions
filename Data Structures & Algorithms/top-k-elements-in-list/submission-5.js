class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const count = {};

        for (let i = 0; i < nums.length; i++) {
            count[nums[i]] = (count[nums[i]] || 0) + 1;
        }

        return Object.entries(count)
            .sort((a, b) => b[1] - a[1])
            .slice(0, k)
            .map(([num]) => Number(num));
    }
}
