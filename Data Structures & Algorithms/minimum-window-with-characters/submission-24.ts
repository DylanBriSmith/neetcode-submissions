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
        let bestStringStart = 0;
        let bestStringEnd = 0;
        let bestStringLength = s.length+1;
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

            if (smap.has(s[i]) && tmap.has(s[i])){
                if (smap.get(s[i]) === tmap.get(s[i])){
                    stillNeed--;
                }
                
            }
            //check that all chars in smap are in t
            while(stillNeed === 0){
                if(whereWeAre - left + 1 < bestStringLength){
                    bestStringStart = left;
                    bestStringEnd = whereWeAre;
                    bestStringLength = whereWeAre - left + 1;
                }

                //then remove the left most character so we can get a smaller best string.
                //so

                //if the char we are removing is in t, increment stillNeed as its no longer valid

                if(smap.has(s[left]) && tmap.has(s[left])){
                    if(smap.get(s[left]) === tmap.get(s[left])){
                        stillNeed++;
                    }
                }
                smap.set(s[left], (smap.get(s[left]) || 0) - 1);
                //if the count is 0, delete from the map
                if(smap.get(s[left]) === 0){
                    smap.delete(s[left]);
                    shashset.delete(s[left]);
                }
                left++;

            }
            //move the left pointer forward, this is the char in s that we are removing
            
        }
        if (bestStringLength === s.length+1){
            return "";
        }
        else {
            return s.slice(bestStringStart, bestStringEnd + 1);
        }

    }

}

 

/*
Runthrough with s="OUZODYXAZV" t = "XYZ"
The shortest substring of s would be YXAZ
1. tmap = {X:1, Y:1, Z:1}




*/