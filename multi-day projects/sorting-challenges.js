// write a function that takes an array, and sorts it according to the quick sort method:
// remember, 

// assume there will be no repeating elements in the array

function quickSort(arr) {
    let midpoint = arr[0];
    let bigger = [];
    let smaller = [];
    let result = [];


    for (elem of arr) {
        if (elem > midpoint) {
            bigger = bigger.concat(elem)
        } else if (elem < midpoint) {
            smaller = smaller.concat(elem)
        }
    }
console.log('quicksort numbers', midpoint, bigger, smaller, result)
}

quickSort([3, 9, 5, 6, 2, 0, 1, 8, 7, 4])

// write a function that takes an array, and sorts it according to the merge sort method: 
// define the stopping condition


// The Merge Sort method is too complex to fully implement as a code challenge, but as it's something you're likely to be asked about in interviews, we want you to get familiar with how you might go about implementing it.

// Using what you've learned about Merge Sort (divide and conquer, recursion), write some pseudocode outlining the steps it would take to implement on the following array. Then use the remaining half-hour to get as much of the code in place as you can.
// 
// Hint: you might want to break it up into two functions.
// Assume there will be no repeating elements in the array.

function mergeSort(arr) {
    // your pseudocode here
    // first take the array and...
}

let numSort = [9, 3, 1, 5, 8, 0, 6, 2];
mergeSort(numSort);

//pseudocode solution:
// 
// 1) Declare an empty array to hold recursive results.
// 2) Declare a base case/stopping condition: if the array contains 0 or 1 elements, return it.
// 3) Find the midpoint of the array, making sure the result is whole (Math.floor(arr.length/2)).
// 4) Create two new arrays (commonly called left and right), using the midpoint you just found.
// 5) Recursively call mergeSort on each of the new arrays.
// 6) This is the point where a helper function could be made, accepting two arguments (the recursive calls from step 5 and comparing their contents to find which value is greater.
// 7) Declare a starting index for each new array (left index = 0; right index = 0;).
// 8) While each index is less than each array length, compare the values of each array at its current index.
// 9) Push the smaller result into the empty array from step 1 (or an empty array you initialized in the helper function), and increase the index value for that array by 1.
// 10) When the while-loop has ended, return the array from step 1 or step 9.


function mergeSort(arr) {
    let leftResult = []
    let rightResult = []

    if (arr.length <= 1) {
        return arr;
    }
    let midpoint = Math.floor(arr.length / 2);
    let left = arr.slice(0, midpoint);
    let right = arr.slice(midpoint);

    while (left.length && right.length)

    // leftResult = leftResult.concat(mergeSort(leftResult));
    // rightResult = rightResult.concat(mergeSort(rightResult));

    console.log('mergesort numbers', midpoint, right, left, result)
}

mergeSort([3, 9, 5, 6, 2, 0, 1, 8, 7, 4])
