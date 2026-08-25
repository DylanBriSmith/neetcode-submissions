// given array of ints nums and int k
//sliding window of size k
//window slides one position to thr right until it reaches
//the right edge of the array
//return list that contains the maximum element in the window at each step

// we want nlogn time and n space
// they want us to use a double ended queue
//the queue should only be elements that should be considered for the maximum



class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums: number[], k: number): number[] {
        let dequeue: number[] = [];
        let result: number[] = [];
        let currentLength = 0;
        let left = 0;
        let right = 0;
        while(right < nums.length){
            while(dequeue.length > 0 && nums[dequeue[dequeue.length - 1]] < nums[right]){
                dequeue.pop();
            }

            dequeue.push(right);
            // remove left val from window
            if(left > dequeue[0]){
                dequeue.shift();
            }

            if(right + 1 >= k){
                result.push(nums[dequeue[0]]);
                left++;
            }
            right++;
        }
        return result;
    }
}

/*
Example nums=[1,2,1,0,4,2,6]
k=3

Window position                Max
---------------               -----
[1  2  1] 0  4  2          -> 2
 1 [2  1  0] 4  2          -> 2
 1  2 [1  0  4] 2          -> 4
 1  2  1  0 [4  2]         -> 4
 1  2  1  0  4              -> 4

in our code we have:

*/
