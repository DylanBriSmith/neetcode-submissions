class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix: number[][], target: number): boolean {
        let iterator = 0
        let low = matrix[0][iterator];
        let high = matrix[matrix.length-1][iterator]
        let mid = low + Math.floor((high - low)/2);
        while(true){
            
            if (target > high){
                iterator++;
                high = matrix[matrix.length-1][iterator]
                low = matrix[0][iterator];
                mid = low + Math.floor((high - low)/2);
                //go to next row
            }
            else if (target == mid){
                return true;
            }
            else if (target < mid){
                high = mid -1;
                
            }
            else {
                low = mid +1;
            }
        }
    }
}
