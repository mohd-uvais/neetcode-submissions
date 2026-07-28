class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        let low = 0;
        let high = 0;
        let ans = "";
        let ansLength = Math.pow(10, 6);
        let map = new Map();
        const alphabetArray = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

        const alphaMap = new Map(alphabetArray.map((char) => [char, 0]));

        for (let i = 0; i < t.length; i++) {
            alphaMap.set(t[i], alphaMap.get(t[i]) + 1);
        }

        let bestH = -1;
        let bestL = -1;

        const hasAllT = () => {
            let flag = true;
            alphaMap.forEach((val, key) => {
                if (val > 0) {
                    let freq = map.get(key) || 0;
                    if (freq < val) {
                        flag = false;
                    }
                }
            });
            return flag;
        };

        while (high < s.length) {
            if (map.has(s[high])) {
                map.set(s[high], map.get(s[high]) + 1);
            } else {
                map.set(s[high], 1);
            }

            while (alphaMap.get(s[low]) === 0 && low < high) {
                if (map.get(s[low]) > 1) {
                    map.set(s[low], map.get(s[low]) - 1);
                } else {
                    map.delete(s[low]);
                }
                low++;
            }

            let flag = hasAllT();

            while (flag) {
                if (ansLength > high - low + 1) {
                    ansLength = high - low + 1;
                    bestH = high;
                    bestL = low;
                }
                if (map.get(s[low]) > 1) {
                    map.set(s[low], map.get(s[low]) - 1);
                } else {
                    map.delete(s[low]);
                }
                low++;

                flag = hasAllT();
                if (!flag) {
                    while (alphaMap.get(s[low]) === 0 && low < high) {
                        if (map.get(s[low]) > 1) {
                            map.set(s[low], map.get(s[low]) - 1);
                        } else {
                            map.delete(s[low]);
                        }
                        low++;
                    }
                }
            }

            high++;
        }
        return s.slice(bestL, bestH + 1);
    }
}
