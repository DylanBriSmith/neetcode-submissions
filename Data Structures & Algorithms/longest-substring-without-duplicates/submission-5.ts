//given a string s, find the length of the longest substring wiuthout duplicate chareacters
//we should use a hash set top detect duplicates in O(1) time
//we cann use the sliding window algo
//
//if s=dvdf
//


class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        let longestString = 0;
        let currentLength = 0;
        let hashSet: Set<string> = new Set<string>()
        for (let i = 0; i <= s.length-1; i++){
            if(hashSet.has(s[i])){
                while(hashSet.has(s[i])){
                    let firstItem = hashSet.values().next().value;
                    hashSet.delete(firstItem as string);
                    currentLength -=1;
                }
            }
            currentLength++;
            hashSet.add(s[i]);
            if(longestString < currentLength) longestString = currentLength;
        }
        return longestString;
    }
}
