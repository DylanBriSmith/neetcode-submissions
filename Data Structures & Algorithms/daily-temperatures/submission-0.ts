// given an array of ints temperatures where temperatures[i] represents the daily temperatures on the ith day
// return array result where result[i] is the number of days after the ith day in the future where a warmer temperature will appear for the ith dat


// we only want to go through the array once, 
//so we cannot go to index, search until a greater, then go back up a loop to the next index in the list
// We need a method to store the index that is still waiting for a warmer temp
//we could push the waiting index to a stack.

// hint wants us to go from right to left
//we only need to track the indices where the right is warmer

//so right to left, push, move left, if warmer, pop

class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures: number[]): number[] {
        let stack: number[] = [];
        let counter: number = 0;
        let lastHigh: number = 0;
        let result: number[] = new Array(temperatures.length).fill(0);
        for ( let i = temperatures.length-1; i>= 0; i--){
            //if the temp at the end of the stack is greater than the day before it
            while(stack.length > 0 && temperatures[stack[stack.length-1]] <= temperatures[i]){
                stack.pop();
            }

            if (stack.length > 0){
                result[i] = stack[stack.length-1] - i;
            }
            stack.push(i);
        }
        return result;
    }
}

const solution = new Solution();
console.log(solution.dailyTemperatures([73,74,75,71,69,72,76,73]));
