class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        const speed = (mid) => {
            let timeH = 0
            for(let p of piles) {
                timeH += Math.ceil(p/mid)
            }
            return timeH

        }

        let l = 1
        let r = Math.max(...piles)
        let ans  = r

        while(l <= r) {
            let mid = Math.floor((l+r) / 2)
            if(speed(mid) <= h) {
                ans = mid
                r = mid-1
            } else l = mid+1
        }
        return ans
    }
}
