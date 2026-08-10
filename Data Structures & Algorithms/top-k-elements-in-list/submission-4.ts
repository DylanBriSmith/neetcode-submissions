class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number) {
        //first we need to take care of the count per number.
        let tempMap = new Map<number, number>;
        let tempArray:number[][] =[];
        for (let num of nums){
            if (!tempMap.get(num)){
                tempMap.set(num, 1);
            }
            else {
                const current = tempMap.get(num);
                tempMap.set(num,current+1);
            }
        }
        //then we need to sort this by amount
        for ( let [key,value] of tempMap){
            if(!tempArray[value]){
                tempArray[value] = [];
            }
            tempArray[value].push(key);
        }
        let final: number[] = []
        for ( let i = tempArray.length-1; i >= 0; i--){
            if (tempArray[i] == undefined) continue;
            for(let value of tempArray[i]){
                if (value != undefined){
                    
                    final.push(value);
                    if(final.length == k) return final;
                    
                }
                
            }
        }
        return final;

    }
}
