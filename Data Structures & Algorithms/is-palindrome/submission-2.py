class Solution:
    def isPalindrome(self, s: str) -> bool:
        new_string =  re.sub('[^A-Za-z0-9]', '', s)
        pointer1 = 0;
        pointer2 = len(new_string)-1;
        for char in new_string:
            if new_string[pointer1] != new_string[pointer2]:
                return False;
            pointer1 +=1;
            pointer2 -=1;

        return True;