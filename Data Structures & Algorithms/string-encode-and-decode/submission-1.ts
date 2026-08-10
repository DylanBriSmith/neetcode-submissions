class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let returnString = "";
        for (let stringw of strs) {
            const len = stringw.length;
            returnString += len + "#" + stringw;
        }
        return returnString;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        let returnArray: string[] = [];
        let amount = "";
        let i = 0;
        while (i < str.length) {
            if (str[i] != "#") {
                amount += str[i];
                i += 1;
                continue;
            } else if (str[i] == "#") {
                let word = str.substring(i + 1, i + 1 + Number(amount));
                returnArray.push(word);
                i = i + 1 + Number(amount);
                amount = "";
                continue;
            }
        }
        return returnArray;
    }
}

// So realistically we need to concatenate the strings and deconcatenate.
// We cannot just concatenate the strings. And we cannot use the comma
//we need some special character set that the decoder will know how to decode
// So we can use the length of a string, so if we have Hello World we will have
//5Hello6World

//Okay, so for the decode maybe we do a while loop where `i` is less than the length of the string. \
//Check if it's a number. If it's a number, we gotta break up the next amount of characters and
//iterate `i` by that amount. Move on to the next.
// we need a delimiter, lets do #
