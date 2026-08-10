class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number) {
        for ( let i=0; i<nums.length; i++){
            let num1 = nums[i];
            let num2 = 0;
            for (let k=i+1; k < nums.length;k++){
                num2 = nums[k]
                if(num1 + num2 == target){
                    let returnArray: number[] = [i,k];
                    return returnArray;
                }
            }
        }
    }
}
