/*
https://leetcode.com/problems/power-of-three/

6. Power of Three
Easy

759

98

Add to List

Share
Given an integer n, return true if it is a power of three. Otherwise, return false.

An integer n is a power of three, if there exists an integer x such that n == 3x.

 

Example 1:

Input: n = 27
Output: true
Example 2:

Input: n = 0
Output: false
Example 3:

Input: n = 9
Output: true
 

Constraints:

-231 <= n <= 231 - 1
 

Follow up: Could you solve it without loops/recursion?console.log(10/3)
*/

var isPowerOfThree = function(n) {
    if (n===1){
        return true
    }
    if (n%1!==0||n<1){
        return false
    }
    return isPowerOfThree(n/3)
};

console.log(isPowerOfThree(27))

/*
var isPowerOfThree = function(n) {
    // return n !== 0 && (Math.log(n) / Math.log(3)) % 1 === 0;
    return n > 0 && Math.pow(3,33) % n === 0;
};

var isPowerOfThree = function (n) {
return (Math.log10(n) / Math.log10(3)) % 1 == 0;
};

var isPowerOfThree = function(n) {
    if(n < 1){
        return false;
    }

    while(n%3 === 0){
        n = n/3;
    }
    return n===1;

}

*/
