class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        for(let i =0;i<nums.length;i++) {
            for(let j=1;j<nums.length-i;j++) {
                if(nums[j] < nums[j-1]) {
                    [nums[j-1], nums[j]] = [nums[j], nums[j-1]]
                }
            }
        }
        return nums
    }
}
