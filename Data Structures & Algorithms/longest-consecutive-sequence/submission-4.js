class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (!nums.length) return 0;

        let set = new Set(nums);
        let longest = 1;
        for (let curr of set) {
            if (!set.has(curr - 1)) {
                let current = curr;
                let length = 1;
                while (set.has(current + 1)) {
                    current++;
                    length++;
                }
                longest = Math.max(longest, length);
            }
        }

        return longest;
    }
}
