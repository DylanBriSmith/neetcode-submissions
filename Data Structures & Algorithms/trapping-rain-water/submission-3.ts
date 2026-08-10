class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height: number[]): number {
        let maxLeft = 0;
        let maxRight = 0;
        let maxAmmount = 0;
        let leftHeights = new Array(height.length).fill(0);
        let rightHeights = new Array(height.length).fill(0);
        let newheights = new Array(height.length).fill(0);
        //go from left to right, get the max height each index can have on it
        for (let i = 0; i < height.length -1; i++){
            //update the highest on the left
            maxLeft = Math.max(maxLeft, height[i]);
            let leftHeight = maxLeft - height[i];
            newheights[i] = leftHeight;

        }
        for (let i = height.length -1; i >= 0; i--){
            //update the highest on the left
            maxRight = Math.max(maxRight, height[i]);
            let rightHeight = maxRight - height[i];
            if(newheights[i] > rightHeight) newheights[i] = rightHeight;
        }
        for(let i = 0; i < newheights.length; i++){
            maxAmmount += newheights[i];
        }
        return maxAmmount;

    }
}