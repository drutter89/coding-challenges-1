import letterGrade from "../1-grades/grades";

// NOTE: unless otherwise specified, only the following
// JavaScript array functions are allowed to be used:
// Array.push, Array.pop, Array.isArray

/*  Return the last element in the array. 
    If `arr` is not an array or has length 0, return null.
    arr is guaranteed to be an array.
*/
function lastElement(arr) {
    // implementation
}

/*
    You are given `arr`, an Array, and `index`, a number.
    If index >= 0, return the element at the index
    If index < 0, return the element using these examples as a guide:
        getElementAt([1,3], -1) --> 3
        getElementAt([1,3], -2) --> 1
        getElementAt([1,3,4,6], -2) --> 4
    If index is out of bounds, return undefined.
        getElementAt([1,3], 5) --> undefined
        getElementAt([1,3], -3) --> undefined
*/

function getElementAt(arr, index) {
    // implementation
}

/*  
    You are given a sorted array of Numbers. Return the median.
    Examples:
        median([5,9,10,44,99]) --> 10
        median([]) --> null
        median([4,6,8,10]) --> 7 (take mean of 6 and 8)
*/
function median(arr) {
    // implementation
}

/*  
    You are given an array of Numbers and `num`.
    Return whether num exists in the array.

    Examples:
        exists([5,9,10,44,99], 99) --> true
        exists([2,3], 5) --> false
*/
function exists(arr, num) {
    // implementation
}

/*  
    You are given an array of Numbers and `num`.
    If `num` exists in the array, return the index it's found at
    if `num` does not exist in the array, return -1
    Examples:
        findIndex([5,9,10,44,99], 99) --> 4
        findIndex([2,3], 5) --> -1
*/
function findIndex(arr, num) {
    // implementation
}

/*  
    You are given an array of number grades from 0-100.
    Return an array of the letter grades that correspond to the number grades.
    Use the `letterGrade` function you implemented earlier.
    This has been imported for you on line 1.
    Example: getLetterGrades([95, 85]) --> ['A', 'B']

*/
function getLetterGrades(arr) {
    // implementation
}

/*
    Given an array and two indexes, alter the array
    by moving the element at index1 to index2, and
    vice-versa. Do not return anything.
    Example 1:
        let arr = [1,2,3];
        swap(arr, 0, 1);
        console.log(arr) --> [2,1,3]
    Example 2:
        let arr = [9, 8, 7, 'a']
        swap(arr, 3, 0);
        console.log(arr) --> ['a', 8, 7, 9]
*/
function swap(arr, index1, index2) {
    // implementation
}

/*
    Return a copy of the passed in arr.
    Do this by creating a new array and copying each
    element of arr into this new array. Then,
    return the copy.
*/
function copy(arr) {
    // implementation
}

/*
    Given an array, index, and element,
    return a copy of the array with the element inserted
    at the specified index and the rest of the elements
    moved to accommodate it.

    Preconditions:
        arr will be an Array
        index will be a number such that
            0 <= index <= arr.length

    Example 1:
        let newArr = insertIntoNewArray([1,2], 1, 9);
        console.log(newArr) --> [1,9,2]
    Example 2:
        let newArr = insertIntoNewArray([1,2], 2, 9);
        console.log(newArr) --> [1,2,9]
*/
function insertIntoNewArray(arr, index, element) {
    // implementation
}

export {
    lastElement,
    getElementAt,
    median,
    exists,
    findIndex,
    getLetterGrades,
    swap,
    copy,
    insertIntoNewArray,
};
