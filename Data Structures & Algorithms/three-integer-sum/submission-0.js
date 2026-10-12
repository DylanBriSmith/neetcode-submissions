class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {}
}

function threeSum(nums) {
    const results = [];
    const numsSorted = nums.sort((a, b) => a - b);
    const numsSortedSet = new Set(numsSorted);

    for (let pointer1 = 0; pointer1 <= numsSorted.length -1; pointer1++){
        const i = numsSorted[pointer1];
        for (let pointer2 = pointer1 + 1; pointer2 <= numsSorted.length -1; pointer2++){
            const j = numsSorted[pointer2];
            const k = 0 - i - j;
            if(numsSortedSet.has(k)){
                results.push([i, j, k]);
            }
        }
    }
    return results;
}