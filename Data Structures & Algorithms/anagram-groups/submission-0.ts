class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]) {
        //we will set the anagram as the key, then all strings under it 
        let ourMap = new Map<string, string[]>
        for (let i=0; i < strs.length;i++){
            let temp1:string[] = strs[i].split('').sort();
            let anagram:string = temp1.join('');
            if (!ourMap.has(anagram)){
                ourMap.set(anagram,[strs[i]]);
            }
            else{
                //if the anagram is already added and the string matches, push
                if (ourMap.get(anagram)){
                    ourMap.get(anagram).push(strs[i]);
                }
            }
        }
        //aray of the map values
        let returnArray: string[][] = Array.from(ourMap.values());
        return returnArray;
    }    
}
