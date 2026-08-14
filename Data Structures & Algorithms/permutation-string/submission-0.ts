//given s1, s2, string
//return true if s2 contains a permutation of s1, or false otherwise, that means if a permutation of s1 exists as a substring of s2, then return true, otherwise return false.

//sliding window algo
//O(n) time and O(1) space
//we need to keep cound of the characters in s1, and do a sliding window on s2

class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1: string, s2: string): boolean {
        //fill the hashtable with the characters in s1 with the ammounts of each character
        let HashTableS1 : Map<string, number> = new Map<string, number>();
        let arrS1 : number[] = new Array<number>(26).fill(0);
        let left = 0;
        //fill the array up with the count of each char.
        for (let i = 0; i < s1.length; i++) {
            arrS1[s1.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        }
        let arrS2 : number[] = new Array<number>(26).fill(0);
        let lengthS1 = s1.length;
        let HashTableS2 : Map<string, number> = new Map<string, number>();
        let currentLength = 0;
        //we only iterrate as long as string 1 ever. Its a sliding door of this size
        for (let i = 0; i < s2.length; i++) {
            //if the length is less or equal to the length of string 1, sliding door
            if (currentLength < lengthS1){
                HashTableS2.set(s2[i], (HashTableS2.get(s2[i]) || 0) + 1);
                //at the location of the character in the array, increase the count, just like we did with array one
                arrS2[s2.charCodeAt(i) - 'a'.charCodeAt(0)]++;
                //increase the length so we can keep the sliding window 
                currentLength++;
                
            }
            //if we have gotten to the length of the sliding window, we need to check both array's and compare
            if (currentLength == lengthS1) {
                //if both arrays are exactly the same, return true
                if (arrS1.every((val, index) => val === arrS2[index])){
                    return true;
                }
                else {
                    const removal: string = s2[left];
                    arrS2[removal.charCodeAt(0) - 'a'.charCodeAt(0)]--;
                    left++;
                    currentLength--;
                }



                for (let [key, value] of HashTableS1) {
                    if (HashTableS2.get(key) != value) {
                        break;
                    } else {
                        return true;
                    }
                }
            }
        }
        
        return false;
    }
}



