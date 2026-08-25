//given a string s consisting of '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

//only valid if:
//every bracket is closed by the same type of closed bracket
//open brackets are closed in correct order
//every close bracket has a corresponding open bracket of the same type


//I guess in this question the close would be in the same order as the open
//Maybe
//could use a stack, when pushing a closing string, check if the top character is the corresponding opening character, if not, return false

class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        let stack:string[] = new Array<string>();
        for (let i = 0; i <= s.length-1; i++){
            if (s[i] === '(' || s[i] === '{' || s[i] === '['){
                stack.push(s[i]);
            }
            else {
                if (stack.length === 0){
                    return false;
                }
                else {
                    if (s[i] === ')' && stack[stack.length-1] === '('){
                        stack.pop();
                    }
                    else if (s[i] === '}' && stack[stack.length-1] === '{'){
                        stack.pop();
                    }
                    else if (s[i] === ']' && stack[stack.length-1] === '['){
                        stack.pop();
                    }
                    else {
                        return false;
                    }
                }
            }
        }
        if (stack.length === 0){
            return true;
        }
        else {
            return false;
        }
    }
}
