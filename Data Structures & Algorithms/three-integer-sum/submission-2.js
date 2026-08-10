class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
    const results = new Set();
    const numsSorted = nums.sort((a, b) => a - b);
    const numsSortedSet = new Set(numsSorted);

    for ( let i = 0; i < numsSorted.length - 1; i++){
        const first = numsSorted[i];
        let j = i + 1;
        let k = numsSorted.length - 1;
        while (j < k){
            const sum = first + numsSorted[j] + numsSorted[k];
            if (i > 0 && numsSorted[i] === numsSorted[i - 1]){
                j++;
                continue;

            }
            if (sum === 0){
                if (j > i + 1 && numsSorted[j] === numsSorted[j - 1]){
                    j++;
                    continue;
                }
                if (k < numsSorted.length - 1 && numsSorted[k] === numsSorted[k + 1]){
                    k--;
                    continue;
                }
                results.add([first, numsSorted[j], numsSorted[k]]);
                j++;
                k--;
            }
            else if (sum < 0){
                j++;
            }
            else if (sum > 0){
                k--;
            }
        }
    }
    return Array.from(results);
}
}