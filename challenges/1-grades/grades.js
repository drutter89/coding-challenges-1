/*
    For this challenge, you must implement this function that takes in a Number as an argument called numberGrade.
    You must return the correct letter grade associated with this number.

    Rules (all numbers are inclusive):
        0-59: F
        60-69: D
        70-79: C
        80-89: B
        90-100: A
    
    If the value is not between 0 and 100, return null.
*/

function letterGrade(numberGrade) {
    if (numberGrade < 0) {
        return null;
    }
    if (numberGrade <= 59) {
        return "F";
    }
    if (numberGrade <= 69) {
        return "D";
    }
    if (numberGrade <= 79) {
        return "C";
    }
    if (numberGrade <= 89) {
        return "B";
    }
    if (numberGrade <= 100) {
        return "A";
    }

    return null;
}

export default letterGrade;
