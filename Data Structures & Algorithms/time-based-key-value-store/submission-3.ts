class TimeMap {
keyStore: Map<any,any>;
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */

    // If the value has no entries, initialize.
    // If the values has entries, then we push
    set(key: string, value: string, timestamp: number): void {
        if (!this.keyStore.has(key)){
            this.keyStore.set(key,[]);
        }
        this.keyStore.get(key).push({'value': value, 'timestamp': timestamp});
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key: string, timestamp: number): string {
        //Im assuming Binary search here within the value of the key of the array
        //we need to return the largest value less than timestamp if no timestamp
        if (!this.keyStore.has(key)){
            return null;
        }
        else if (this.keyStore.has(key)){
            var array = this.keyStore.get(key);
            var l = 0;
            var r = array.length-1;
            var largestTimeStamp = 0;
            var largestTimeStampValue = '';
            while (l <= r){
                let mid = l + Math.floor((r-l)/2);
                if (array[mid].timestamp <= timestamp && array[mid].timestamp > largestTimeStamp){
                    largestTimeStampValue = array[mid].value;
                    //this should return the emotion
                }
                if (timestamp >= array[mid].timestamp){
                    l = mid + 1;
                }
                else{
                    r = mid -1;
                }
            }
            if (largestTimeStampValue != ''){
                return largestTimeStampValue;
            }
        
        }
        return "";
}
}