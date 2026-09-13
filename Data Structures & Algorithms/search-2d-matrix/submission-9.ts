class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix: number[][], target: number): boolean {
        // all indexes
        let iterator = 0;
        let low = 0;
        let high = matrix[0].length-1;
        let mid = low + Math.floor((high - low)/2);
        let rowmax = matrix[0].length-1;
        while((high >= low) && (iterator <= matrix.length-1)){
            
            if (target > matrix[iterator][rowmax]){
                if(iterator+1 > matrix.length-1){
                    return false;
                }
                iterator = iterator+1;
                high = matrix[iterator].length-1
                mid = low + Math.floor((high - low)/2);
                rowmax = high;
                //go to next row
            }
            else if (target === matrix[iterator][mid]){
                return true;
            }
            else if (target < matrix[iterator][mid]){
                high = mid -1;
                mid = low + Math.floor((high - low)/2);
                
            }
            else {
                low = mid +1;
                mid = low + Math.floor((high - low)/2);
            }
        }
        return false;
    }
}
