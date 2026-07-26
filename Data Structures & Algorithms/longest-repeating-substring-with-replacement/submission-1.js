class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let n = s.length
        let low = 0
        let high = 0
        let map = new Map()
        let ans = 0

        const maxFromMap = () => {
            let max = 0
            let ans = {
                id: -1,
                data: max
            }
            map.forEach((val, key) => {
                if (val >= max) {
                    max = val
                    ans = {
                        id: key,
                        data: max
                    }
                }
            });

            return ans
        }
        while (high < n) {
            if (map.has(s[high])) {
                map.set(s[high], map.get(s[high]) + 1)
            } else {
                map.set(s[high], 1)
            }

            let len = high - low + 1
            let dataFromMap = maxFromMap()
            console.log(dataFromMap)
            let maxCount = dataFromMap.data
            let replacableCount = len - maxCount
            console.log(dataFromMap, replacableCount)
            while (replacableCount > k) {
                if (map.get(s[low]) > 1) {
                    map.set(s[low], map.get(s[low]) - 1)
                } else {
                    map.delete(s[low])
                }

                low++

                len = high - low + 1
                dataFromMap = maxFromMap()
                replacableCount = len - dataFromMap.data
                console.log("inside loop", dataFromMap, replacableCount)
            }

            if (replacableCount <= k) {
                console.log(replacableCount)
                ans = Math.max(ans, high - low + 1)
            }

            high++
        }

        return ans
    }
}
