//ghiven two strings s and t, return the shoprtest substring of s such that every character in t, including duplicates , is present in the substring.
// if a substring does not exist, return an emptry string "".


//we are going to store boths trings in arrays, with the index representing the count of th character
//sligind window on s but not the length of t.
//we keep track of a 'left' so we know which character to decrease in count on the array.
//Maybe we can keep increasing the window until all characters are in it?
//Then we start cutting down the left side until we have the shortest string 
//with all the characters?


//we need to add right until all chars in t are within the window.
//we shrink the window from the left while the window is valid.

class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s: string, t: string): string {
        let left = 0;
        let right = 0;

        let stillNeed = 0;
        //map for char and number of the char
        const smap = new Map<string, number>();
        //hashset for fast lookup

        let shashset = new Set<string>();
        const tmap = new Map<string, number>();
        let thashset = new Set<string>();

        let bestString = "";
        let valid = false;

        //count chars in t
        for (let i:number=0; i < t.length; i++){
            tmap.set(t[i], (tmap.get(t[i]) || 0) + 1);
            thashset.add(t[i]);
        }
        stillNeed = thashset.size;

        //we do not have a fixed window size this time
        for (let i:number = 0; i< s.length; i++){
            //add char to smap
            let whereWeAre = i;
            smap.set(s[i], (smap.get(s[i]) || 0) + 1);
            shashset.add(s[i]);
            //check that all chars in smap are in t
            while(stillNeed === 0){
                //set the current beststring
                // This may be pretty inefficient but like what else would we do
                if(bestString === ""){
                    let buildString = "";
                    for (let  i = left; i <= whereWeAre;i++){
                        if(shashset.has(s[i])){
                            buildString += s[i];
                        }
                        else{
                            break;
                        }
                    }
                    bestString = buildString;
                }
                else{
                    let buildString = "";
                    for (let  i = left; i <= whereWeAre;i++){
                        if(shashset.has(s[i])){
                            buildString += s[i];
                        }
                        else{
                            break;
                        }
                    }
                    if (bestString.length > buildString.length){
                        bestString = buildString;
                    }
                }
                //then remove the left most character so we can get a smaller best string.
                //so

                //if the char we are removing is in t, increment stillNeed as its no longer valid

                if(smap.has(s[left]) && tmap.has(s[left])){
                    stillNeed++;
                }
                smap.set(s[left], (smap.get(s[left]) || 0) - 1);
                //if the count is 0, delete from the map
                if(smap.get(s[left]) === 0){
                    smap.delete(s[left]);
                    shashset.delete(s[left]);
                }
                left++;
                if(smap.has(s[left])){
            }
            //move the left pointer forward, this is the char in s that we are removing
            
        }
        return bestString;

    }

    // private isValid(sHashSet: Set<String>, tHashSet: Set<String>, smap: Map<String, number>, tmap: Map<String, number>): boolean {
    //     //we need to figure out how to check if all chars of t are in the map of s. Do efficiently
    //     //I think this is a severe bottleneck as we go through the entire string as a hashset every iteration
    //     // So we need a better quick check to see if its worth it to check, then actually do full compare

    //     for (let char of tHashSet){
    //         if(sHashSet.has(char) && (smap.get(char) || 0) >= (tmap.get(char) || 0)){
    //             continue;
    //         }
    //         else{
    //             return false;
    //         }
    //     }
    //     return true;
    // }
}
}

 

/*
Runthrough with s="OUZODYXAZV" t = "XYZ"
The shortest substring of s would be YXAZ
1. tmap = {X:1, Y:1, Z:1}




*/