class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if (s1.length > s2.length) return false
        s1 = s1.split("").sort().join("");

        let low = 0
        let high = s1.length - 1
        let flag = false
        while (high < s2.length) {
            let str = s2.slice(low, high + 1).split("").sort().join("")
            console.log(str)
            if (str === s1) {
                flag = true
                break;
            } else {
                low++
                high++
            }
        }

        return flag
    }
}
