
// binary search breaks it into halves and then halve of that etc
class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
        let low: number = 0;
        let high: number = nums.length-1;
        let mid: number;
        while(high >= low){
            mid = Math.floor(high-low)/2;
            if (nums[mid] === target) return nums[mid];
            if (target > mid){
                low = mid + 1;
            }
            else{
                high = mid -1;
            }
        }
    }
}
