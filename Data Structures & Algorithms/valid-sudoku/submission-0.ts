class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        let hashRows = Array.from({length:9}, ()=> new Set<string>());
        let hashColumns = Array.from({length:9}, ()=> new Set<string>());
        let hashBoxes = Array.from({length:9}, ()=> new Set<string>());

        for (let [rindex, row] of board.entries()){
            for (let [cindex, entry] of row.entries()) {
                let boxIndex = Math.floor(rindex /3) * 3 + Math.floor(cindex /3);

                if (entry == ".") continue;
                //check row set
                if (hashRows[rindex].has(entry)) return false;
                //check column set
                if (hashColumns[cindex].has(entry)) return false;
                //check Box
                if (hashBoxes[boxIndex].has(entry)) return false;


                // add to sets if OK
                hashRows[rindex].add(entry);
                hashColumns[cindex].add(entry);
                //above were easy
                // to add to hashbox we need to use some formula to take the ro and column and have the consistent box#
                // if c = 4, r = 4, should be index 4. so each / 3 = [1,1], so you know its 4 but how do we map?
                hashBoxes[boxIndex].add(entry);

            }
            
        }
        return true;
    }
    /*
    We could check row by row, column by column, and then 3x3 boxes
    If the value is ".", we treat as unfilled
    If we use a hash set for rows and columns, then duplciates will be found easily
    for the 3x3 we need
    hashmap for the squares
    */
}
