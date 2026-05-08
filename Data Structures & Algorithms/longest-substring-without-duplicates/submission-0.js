class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let n = s.length
        let hash = new Array(256).fill(-1)
        let left = 0
        let right = 0
        let maxLength = 0

        while(right<n){
            if(hash[s.charCodeAt(right)]!=-1) {
                left = Math.max(hash[s.charCodeAt(right)]+1, left)
            }

            let len = right-left+1
            maxLength = Math.max(maxLength, len)
            hash[s.charCodeAt(right)] = right
            right++
        }
        return maxLength
    }
}
