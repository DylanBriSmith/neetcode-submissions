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
        let maxPriceSoFar = 0;
        let lowestPriceSoFar = 0;
        let maxProfit = 0;
        let maxPriceIndex = 0;
        for (let i=0; i <= prices.length -1; i++){
            if(i == 0) {
                lowestPriceSoFar = prices[i];
                continue;
            }
            let today = prices[i];
            let todayProfit = today - lowestPriceSoFar;
            if(todayProfit > maxPriceSoFar) maxPriceSoFar = todayProfit;

            if(today < lowestPriceSoFar) lowestPriceSoFar = today;
        }
        return maxPriceSoFar;
    }
}
