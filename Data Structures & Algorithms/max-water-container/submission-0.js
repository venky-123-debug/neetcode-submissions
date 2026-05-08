class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        if(!heights || !heights.length) return 0
        let res = 0
        let left = 0
        let right = heights.length-1
        while(left< right) {
            let area = Math.min(heights[left], heights[right])*(right-left)
            res = Math.max(res, area)
            if(heights[left] <= heights[right]) left++
            else right--
        }
        return res
    }
}
