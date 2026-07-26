class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let low = 0
        let high = 1
        let n = prices.length
        let profit = 0

        if (n === 1) return 0
        while (high < n) {
            if (prices[high] < prices[low]) {
                low = high
            } else {
                profit = Math.max(profit, prices[high] - prices[low])
            }
            high++
        }

        return profit
    }
}
