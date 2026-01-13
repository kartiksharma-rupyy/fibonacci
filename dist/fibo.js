"use strict";
function fibo(n) {
    if (n == 1) {
        return 1;
    }
    else if (n == 0)
        return 0;
    // basic two base case for n==0,n==1;
    return fibo(n - 1) + fibo(n - 2);
}
// browser friendly code
// const number = prompt("Enter the nth element ");
// // condition for the input to be a number 
// if (number !== null) {
//   const num: number = Number(number);
//   if (isNaN(num) || num < 0 || !Number.isInteger(num)) {
//     console.log("non-negative number not allowed");
//   }
//   else{
//     console.log(fibo(num));
//   }
// }
console.log(fibo(4));
console.log(fibo(5));

//raising pr 
