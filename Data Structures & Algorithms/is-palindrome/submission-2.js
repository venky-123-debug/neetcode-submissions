class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        s = s.toLowerCase().replaceAll(" ","").replaceAll(/[^a-z0-9]/gi,"")
        let reverse  = s.split("").reverse().join("")
        return s == reverse
    }
}
