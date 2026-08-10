class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    // Idea is to add the characters to a key,value
    //this way we can keep track of the ammount of chars
    isAnagram(s: string, t: string) {
        //edge case first
        if(s.length != t.length) return false;
        let sChars = Array.from(s).sort();
        let tChars = Array.from(t).sort();
        for(let i=0;i < sChars.length;i++){
            if(sChars[i] != tChars[i]) return false;
        }
        return true;

    }
}
