class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        let map = new Map()

        let low = 0
        let high = 0

        let need = 0

        for (let ch of s1) {
            map.set(ch, (map.get(ch) || 0) + 1)
        }

        need = map.size

        while (high < s2.length) {
            if (map.has(s2[high])) {
                map.set(s2[high], map.get(s2[high]) - 1)

                if (map.get(s2[high]) === 0) {
                    need--
                }
            }

            if ((high - low + 1) > s1.length) {
                if (map.has(s2[low])) {
                    if (map.get(s2[low]) === 0) {
                        need++
                    }

                    map.set(s2[low], map.get(s2[low]) + 1)
                }
                low++
            }

            if (need === 0) {
                return true
            }

            high++
        }

        return false
    }
}
