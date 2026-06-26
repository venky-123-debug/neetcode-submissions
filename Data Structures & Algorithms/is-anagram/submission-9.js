class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length != t.length) return false;
        let base = "a".charCodeAt(0);
        let freq = new Array(26).fill(0);

        for (let i = 0; i < s.length; i++) {
            freq[s.charCodeAt(i) - base]++;
            freq[t.charCodeAt(i) - base]--;
        }

        return freq.every((n) => n == 0);
    }
}
