class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        s = s.replace(/\s/g,"").toLowerCase();
        s = s.replace(/[^a-zA-Z0-9]/g, '');
        let pointer1 = s.length-1;
        let pointer2 = 0;
        for (let i = 0; i < s.length-1; i++){
            if (s[pointer1] != s[pointer2]){
                return false;
            };
            pointer1 -=1;
            pointer2 +=1;
        }
        return true;
    }
}
