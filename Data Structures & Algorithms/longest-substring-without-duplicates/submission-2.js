class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let map = new Map()

        let low = 0
        let high = 0
        let ans = 0
        while (high < s.length) {
            if (map.has(s[high])) {
                map.set(s[high], map.get(s[high]) + 1)
                ans = Math.max(ans, map.size)
            } else {
                map.set(s[high], 1)
            }

            if (map.size === (high - low + 1)) {
                ans = Math.max(ans, map.size)
            }

            while (map.size < (high - low + 1)) {
                if (map.get(s[low]) > 1) {
                    map.set(s[low], map.get(s[low]) - 1)
                } else {
                    map.delete(s[low])
                }
                low++
            }
            high++
        }

        return ans
    }
}
