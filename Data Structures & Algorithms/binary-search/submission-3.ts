
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
            mid = low + Math.floor((high - low)/2);
            if (nums[mid] === target) return mid;
            if (nums[mid] > target){
                high = mid -1;
            }
            else{
                low = mid +1;
            }
        }
        return -1;
    }
}
