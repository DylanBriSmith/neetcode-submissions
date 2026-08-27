// n cars traveling to the same destination on a one-lane highway
//given two arrays of ints position and speed both length n


// one car cannot pass another
class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target: number, position: number[], speed: number[]): number {
        // 
        let indxs = position.map((_, index) => index);
        indxs.sort((a:number,b:number) => position[b as number]! - position[a as number]!);
        // sorted by position closest to target, we have the indexes.

        let numFleets:number= 0, LongestTimeSoFar: number = 0;
        if (indxs.length === 1) {
            console.log("hitting one car case")
            return 1;
        }
        for (let i = 0; i <= indxs.length-1;i++){
            let t = ((target - position[indxs[i]]) / speed[indxs[i]]);
            //calculating the time to reach target
            // if the car further away has a longer time, it will not be 
            //part of the same fleet as the car ahead of it, so create a new fleet
            // console.log("position", position[i])
            // console.log("speed", speed[i])
            // console.log("t", t)
            // console.log("LongestTimeSoFar", LongestTimeSoFar)
            
            if (t > LongestTimeSoFar){
                numFleets++;
                LongestTimeSoFar = t;
                // console.log("creating a new fleet")
            }
            else {
                // 
            }

        
        }

        return numFleets;


        
        
        
    }
}


// when a car catches another they are now part of a fleet
// calculate the time to reach destination by time = (target - position) / speed
// we can find which cars will create a fleet by sorting the positions in descending
// we wil check the cars behind the closest to the postiion to see if they will catch up
// if a car takes longer to reach the target than the car ahead, it will be part of a new fleet

// why do we work backwards?
// because the closest car will not be blocked by anyone, and it will be the head of the fleet

// lets say target = 10, positions = [6,8], speed = [3,2]
//sorting positions we have [8,6], speed [2,3], so t1 = (10-8)/2 = 1, t2 = (10-6)/3 = 1.33
// t2 > t1, so we should create a new fleet, but for some reason the code is not doing this.
//trating the second as part of same fleet


// let test = new Solution().carFleet(10, [6,8], [3,2]);
// console.log("total number of fleets", test);