class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = "";
        for (let i = 0; i < strs.length; i++) {
            const len = strs[i].length;
            res += len + "#" + strs[i];
        }
        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let res = [];
        let i = 0;

        while (i < str.length) {
            let j = i
            while (str[j] !== "#") {
                j++
            }

            const length = Number(str.slice(i, j))
            const word = str.slice(j + 1, j + 1 + length)

            res.push(word)

            i = j + 1 + length
        }

        return res
    }
}