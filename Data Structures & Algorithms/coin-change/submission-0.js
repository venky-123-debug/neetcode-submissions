class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {
          const map = new Map()
    const dfs = (amount) => {
        if (amount == 0) return 0
        if (map.has(amount)) return map.get(amount)
        let res = Infinity

        for (let coin of coins) {
            if (amount - coin >= 0) {
                res = Math.min(res, 1 + dfs(amount - coin))
            }
        }
        map.set(amount, res)
        return res
    }
    let minCoins = dfs(amount)
    return minCoins == Infinity ? -1 : minCoins
    }
}
