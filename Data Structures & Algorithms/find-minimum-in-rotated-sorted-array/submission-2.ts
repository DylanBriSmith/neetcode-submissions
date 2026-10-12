class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums: number[]): number {

       let right = nums.length-1;
       let left = 0;
       let res = nums[0];
       while (left <= right){
            let mid = left + Math.floor((right - left)/2);
            if (left < right){
                res = Math.min(res, nums[left]);
            }
            if (nums[mid] >= nums[left]){
                // THEN we want to search the right side
                left = mid +1;
            }
            else {
                right = mid -1;
            }
       } 
       return res;
    }
}
