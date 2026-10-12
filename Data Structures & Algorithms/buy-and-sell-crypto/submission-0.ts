//we are given an int array prices where prices[i] is the price of NeetCoin on the ith day
//we may choose a single day to buy one NeetCoin and choose a different day in the future to sell it
//return the max amount of profit you can achieve, and we can choose to make no transactions
// O(n)time and O(1) space 

//can we go through the array and only think of the sell? well we could pick the biggest
// so one for loop to find the max, then another to find the cheapest buy to the left

class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let maxPrice = 0;
        let lowestPrice = 99;
        let maxPriceIndex = 0;
        for (let i=1; i < prices.length; i++){
            if(prices[i] > maxPrice) {
                maxPrice = prices[i];
                maxPriceIndex = i;
            }
        }
        for (let i=0; i < maxPriceIndex; i++){
            if(lowestPrice > prices[i] ) lowestPrice = prices[i];
        }
        if (maxPrice > lowestPrice) return maxPrice - lowestPrice;
        else return 0;
    }
}
