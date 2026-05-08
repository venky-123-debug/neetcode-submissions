class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let length = 1
        let maxLength = 1
        if(!nums.length) return 0
        nums.sort((a,b) => a-b)
        for(let i=1;i<nums.length;i++ ) {
            if(nums[i-1]==nums[i]) continue
            // if(nums[i-1]+1 == nums[i]) length++
            if (nums[i] === nums[i - 1] + 1) {
            length++;
        } else {
            length = 1
        }
            maxLength = Math.max(maxLength, length)
        }
        return maxLength
    }
}
