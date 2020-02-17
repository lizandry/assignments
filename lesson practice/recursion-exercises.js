function isPalindrome(aString) {
    // if (aString === aString.split('').reverse().join('')) {
    //     return true;
    // } else return false;
    //this isn't recursive, but i guess it's good to know

    // Base case
    // aString.length <= 1 => return true
    // Check first letter = last letter
    // if not, return false
    // if yes, continue
    // Return isPalindrome recursively on aString[1:-1] (use slice or splice)
}

console.log(isPalindrome('racecar')) //-> true
'aceca'
'cec'
'e'
console.log(isPalindrome('step on no pets')) //-> true
console.log(isPalindrome('a')) //-> true
console.log(isPalindrome('goat')) //-> false

//Write a method fib(n) that calculates the nth Fibonacci number (starting from n = 1).
function fib(n) {
    if (n < 0) return "Invalid input!";
    if (n < 2) return n;
    return fib(n - 1) + fib(n - 2);
    //this is correct, but not right
    //fib(4) = fib(3) + fib(2)
    //fib(3) = fib(2) + 1 // fib(2) = 1 + 0
    //fib(2) = 1 + 0
    //this WOULD return 3 if the call stack wasn't exceeded
}
// console.log(fib(-4));
// console.log(fib(2));
// console.log(fib(4)); //- > 3