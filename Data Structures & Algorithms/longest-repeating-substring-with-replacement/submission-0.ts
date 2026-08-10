//given string s, only uppercase . and int k. you can choose up tyo k characters of tyhe string and replace them with any other uppercase english character.

// k most replacements, return the length of the longest substring which contains only one distinct character.
//sliding window algo
//going to use a hash set.
class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s: string, k: number): number {
        let charMap: Map<string, number> = new Map<string, number>();
        let longestString = 0;
        let currentLength = 0;
        let maxCharCount = 0;
        let left = 0;

        for (let i = 0; i <= s.length-1; i++){
             //update the maxCharCount if the current char count is greater than the maxCharCount
             currentLength++;
             //set the char map value to increase the amount we have of the char
             charMap.set(s[i], (charMap.get(s[i]) || 0) + 1);
             //get count of the maxcount of a char
             if((charMap.get(s[i]) || 0) > maxCharCount) maxCharCount = (charMap.get(s[i]) || 0);
            while(currentLength - maxCharCount > k){
                charMap.set(s[left], (charMap.get(s[left]) || 0) - 1);
                currentLength -=1;
                left++;
            }
           
            
            if(longestString < currentLength) longestString = currentLength;
        }
        return longestString;
    }
}
