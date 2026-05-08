class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        if(!nums || !nums.length) return 0
        let minEl = nums[0]
        for(let i=1;i<nums.length;i++) {
            minEl = Math.min(minEl, nums[i])
        }
        return minEl
    }
}
