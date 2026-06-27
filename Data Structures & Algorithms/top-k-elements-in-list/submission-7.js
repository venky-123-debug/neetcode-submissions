class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let count = {};

        for (let n of nums) {
            count[n] = (count[n] || 0) + 1;
        }

        const bucket = new Array(nums.length + 1).fill(null).map(() => []);
        for (let [key, value] of Object.entries(count)) {
            bucket[value].push(Number(key));
        }
        let result = [];

        for (let i = bucket.length - 1; i >= 0 && result.length < k; i--) {
            for (const num of bucket[i]) {
                result.push(num);
                if (result.length == k) break;
            }
        }
        return result;
    }
}
