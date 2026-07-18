class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let ans = 0;

        let i = 0;
        let j = heights.length - 1;

        while (i < j) {
            let area = 0;
            if (heights[i] <= heights[j]) {
                area = heights[i] * (j - i)
                i++
            } else {
                area = heights[j] * (j - i)
                j--
            }

            if (area > ans) {
                ans = area
            }
        }

        return ans;
    }
}
