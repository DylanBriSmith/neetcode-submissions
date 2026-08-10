class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        let Prefix: number[] = [];
        let Suffix: number[] = [];
        let Final:  number[] = [];
        let final:number=0;
        //this is for Prefix
        //This index is the multiplying sum to the left of this index.
        for (let i = 0; i < nums.length;i++){
            if (i == 0){
                Prefix.push(1);
                continue;
            }
            else {
                let last = Prefix[i-1];
                Prefix.push(last*nums[i-1]);
                continue;
            }
        }
        //this is for Suffix
        //This index is the multiplied sum to the right of this index.
        for (let i = nums.length-1; i >= 0 ;i--){
            if (i == nums.length-1){
                Suffix[i] = 1;
                Final[i] = Prefix[i];
                continue;
            }
            else {
                let previous = Suffix[i+1];
                Suffix[i] = previous*nums[i+1];
                Final[i] = Suffix[i]*Prefix[i];
                continue;
            }
        }
        //now we need to calculate the final, so lets go back and do this in the second loop
        return Final;

    }
}
