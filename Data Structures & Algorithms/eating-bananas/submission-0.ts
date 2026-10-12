class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    /*
        if we have a eating rate of 2, and [1,4,3,2], then this takes 6 hours
        But how does binary search come into this
        But we also do not want to just walk through from left to right
        But how does binary search work in this
        could we sort the piles in increasing order? 
        Then pick a mid, and if the eating rate is higher than the mid, it can eat all below mid in 1 hour each. 
        Then restart again.
        if the rate is less than the mid
    */ 
   /*
    Im thinking of this completely wrong. We need to gind the minimum int k which we can eat all the bananas within h hours
    What is the highest number k can be
    we know at each pile in piles we are going to ceil(pile/k) so kmax is the Math.max(largest pile), then it would eat each pile in an hour
    the lowest amount of k is technically 1.
    so then I guess we do a binary search from 1 to 10?
   */
    minEatingSpeed(piles: number[], h: number): number {
        let maxk:number = Math.max(...piles);
        let k:number;
        let mink:number = 1;
        let midk:number = Math.ceil(maxk/2);
        let best:number = maxk;
        // so every number between 1 and Math.max(...piles) is a viable k
        //if pile has less than k, you may finish the eating the pile but you can not eat from another pile in the same hour
        // return the minimum int k such that you can eat all the bananas within h hours
        // So now we can do binary, if koko eats at mid, is this faster than h or slower? if faster, then go above mid, if slower, go below mid
        let value:number = midk;
        while(maxk >= mink){
            let total = 0;
            piles.forEach((pile, index) => {
                if (value >= pile){
                    total+=1;
                }
                else{
                    total+= Math.ceil(pile/value); 
                }
            })
            if(total === h) { 
                best = total
            }
            //if faster than h, we need to reduce k
            else if(total >= h){
                mink = midk +1;
                value = mink + Math.floor((maxk - mink)/2);
                midk = mink + Math.floor((maxk - mink)/2);
            }
            else {
                maxk = midk-1;
                value = mink + Math.floor((maxk - mink)/2);
                midk = mink + Math.floor((maxk - mink)/2);
            }
        }
        return best;

    }
}
