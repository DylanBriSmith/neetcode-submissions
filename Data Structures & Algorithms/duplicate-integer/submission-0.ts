class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]) {
        const seenNums = new Set<number>;
        let hasDupe = false;
        for (let num of nums ){
            if (seenNums.has(num)){
                hasDupe = true;
                break;
            }
            seenNums.add(num);
        }
        return hasDupe;
    }
    
}
