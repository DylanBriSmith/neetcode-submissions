class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        some_set = set(nums);
        counter = 0;
        for num in some_set:
            ## base case
            if num-1 in some_set:
                continue;

            has_next = False;
            if num+1 in some_set:
                has_next = True;
            num_tracked = num;
            while has_next:
                counter +=1;
                if num_tracked+1 in some_set:
                    num_tracked +=1;
                else:
                    has_next = False;

        return counter;


                


        
        