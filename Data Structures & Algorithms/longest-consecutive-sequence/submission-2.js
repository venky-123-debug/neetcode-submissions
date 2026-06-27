class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (nums.length === 0) return 0;
        let n = nums.length;
        nums.sort((a, b) => a - b);
        let current = 1;
        let longest = 1;

        for (let i = 1; i < n; i++) {
            console.log(current);
            if (nums[i] === nums[i - 1]) continue;
            if (nums[i] == nums[i - 1] + 1) current++;
            else {
                longest = Math.max(longest, current);
                current = 1;
            }
        }
        return Math.max(longest, current);
    }
}
