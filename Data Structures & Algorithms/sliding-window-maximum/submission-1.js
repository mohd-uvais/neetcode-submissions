class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        let low = 0
        let high = 0
        let deque = new Deque()
        let ans = []
        while (high < nums.length) {
            if ((high - low + 1) > k) {
                ans.push(nums[deque.front()])
                if (deque.front() === low) {
                    deque.popFront()
                }
                low++
            }
            if (deque.isEmpty()) {
                deque.pushFront(high)
            } else {
                if (nums[high] >= nums[deque.front()]) {
                    deque.clear()
                    deque.pushFront(high)
                } else {
                    while (nums[deque.back()] <= nums[high]) {
                        deque.popBack()
                    }
                    deque.pushBack(high)
                }
            }
            high++
            if (high === nums.length) ans.push(nums[deque.front()])
        }
        return ans
    }
}
