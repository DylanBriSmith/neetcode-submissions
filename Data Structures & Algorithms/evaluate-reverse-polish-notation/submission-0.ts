//we are given a valid arithmetic expression in reverse Polish Notation.
//return the int that represents the evaluation of the expression.
//operands may be ints or results of previous operations.
//operators include '+', '-', '*', and '/'.
//assume that division between integers always truncates toward zero.

// if we come across a number, push to stack,
//if we come across an operator, pop the elements to left and right of operator,
//then do the operation on the numbers, push this to the stack.

class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {
        let stack: number[] = [];
        for (let i = 0; i <= tokens.length-1; i++){
            if (this.isNumeric(tokens[i])){
                stack.push(Number(tokens[i]) as number);
            }
            else {
                let right: number = stack.pop() as number;
                let left: number = stack.pop() as number;
                if (tokens[i] === '+'){
                    stack.push(left + right);
                }
                else if (tokens[i] === '-'){
                    stack.push(left - right);
                }
                else if (tokens[i] === '*'){
                    stack.push(left * right);
                }
                else if (tokens[i] === '/'){
                    stack.push(Math.trunc(left / right));
                }
            }
        }
        return stack.pop() as number;
        

    }
    private isNumeric(val: string): boolean {
        return !isNaN(Number(val)) && isFinite(Number(val));
    }
}
