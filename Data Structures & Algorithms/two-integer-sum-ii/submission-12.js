class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let pointer1 = 0;
        let pointer2 = 1;
        let result_arr = [];
        while (pointer1 < numbers.length-1){
            for (let i = pointer2; i < numbers.length; i++){
                let result = numbers[pointer1] + numbers[i]; 
                if ( result == target) {
                    result_arr.push(pointer1+1, i+1);
                    return result_arr;
                }
            }
            pointer1 +=1;
            pointer2 +=1;
        }
    }
}
