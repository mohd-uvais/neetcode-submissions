class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        // [-1,0,1,2,-1,-4]
        // [-4, -1, -1, 0, 1, 2]
        nums = nums.sort((a,b) => a - b);

        let set = new Set();
        let ans = [];
        nums.forEach((num, index) => {
            let arr = nums.filter((n, id) => id !== index);
            let target = 0 - num;

            let i = 0;
            let j = arr.length - 1;

            while (i < j) {
                let sum = arr[i] + arr[j];
                if (sum === target) {
                    let triplets = [num, arr[i], arr[j]].sort((a, b) => a-b);
                    let tripletsStr = triplets.join("");
                    console.log(tripletsStr)
                    if (!set.has(tripletsStr)) {
                        ans.push(triplets)
                        set.add(tripletsStr)
                    }
                    i++
                    j--
                } else if (sum < target) {
                    i++
                } else {
                    j--
                }
            }
        })
        return ans;
    }
}
