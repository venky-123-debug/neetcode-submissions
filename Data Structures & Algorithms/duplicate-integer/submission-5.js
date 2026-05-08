class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
           const set = nums.sort((a,b) => a-b)
   for(let i=1;i<set.length;i++) {
    if(nums[i-1] == nums[i]) return true
   }
   return false
    }
}
