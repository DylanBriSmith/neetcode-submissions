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
        while((high >= low) && (iterator <= matrix.length)){
            
            if (target > matrix[iterator][high]){
                iterator = iterator+1;
                high = matrix[iterator].length-1
                mid = low + Math.floor((high - low)/2);
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
