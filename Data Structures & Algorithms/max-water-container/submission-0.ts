class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let result = 0;
        let i = 0;
        let j = heights.length-1;
        while ( i < j ){
            const sum = (j - i) * Math.min(heights[i], heights[j])
            if (sum > result) {result = sum};
            if (heights[i] < heights[j]){ i++}
            else if (heights[i] > heights[j]) {j--}

            else {
                i++;
                j--;
            }
    }
        return result;
    }
}
