class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        s = s.toLowerCase().replaceAll(" ","").replaceAll(/[^a-zA-Z0-9]/g,"")
        let reverse  = s.split("").reverse().join("")
        return s == reverse
    }
}
