// Need to design a stack class that supports the push, etc operations


class MinStack {
    private stack: number[];
    
    constructor() {
        this.stack = [];

    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        this.stack.push(val);
    }

    /**
     * @return {void}
     */
    pop(): void {
        this.stack.pop();
    }

    /**
     * @return {number}
     */
    top(): number {
        return this.stack[this.stack.length-1];
    }

    /**
     * @return {number}
     */
    getMin(): number {
        return Math.min(...this.stack);
    }
}
