// ASSESSMENT 3: Coding practical questions with Jest

// const { expect } = require("@jest/globals")
// const { it } = require("jest-circus")
// const { describe } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array of that length containing the numbers of the Fibonacci.

// a) Create a test with expect statements for each of the variables provided.

// Describe the name of the function - fibonacci
describe("fibonacci", () => {
// Test what the function does - returns an array that contains the numbers of the Fibonacci sequence with the length of the given number (greater than 2)
    it("returns an array that contains the numbers of the Fibonacci sequence with the length of the given number (greater than 2)", () =>{
// Expect the output of the function to be equal to the correct output - output of fibonacci to equal an array of the fibonacci sequence with the length of the given number
        expect(fibonacci(6)).toEqual([1, 1, 2, 3, 5, 8])
        expect(fibonacci(10)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
    })
})

// b) Create the function that makes the test pass.

// Create a function named fibonacci
// That takes a number (greater than 2) as an arguement for the input
const fibonacci = (number) => {
// Edge case - if someone puts in 0 as the number return an empty array
    if (number === 0) {
        return []
// Edge case - if someone puts in 1 as the number return an array with just the number 1
    } else if (number === 1) {
        return [1]
    } else {
// In order to start pushing the fibonacci sequence into an array we need at least 2 values to start
// So create an array with the first two values of the fibonacci sequence, 1 and 1.
        const resultArray = [1, 1];
// Iterate through the array, start the index at 2 because we already have values for index 0 & 1
        for (let i = 2; i < number; i++) {
// To get the next value of the fibonacci sequence you need to take the value the first index and add it to the value of the subsequent index
// As an example, for the 2 index of the fibonacci array, you want to take index 1 of the array which is 2-1=1. The value of the 1st index being 1
            let array1 = resultArray[i - 1]
// And you want to take index 0 of the array which is 2-2=0. The value of the 0th index being 1
            let array2 = resultArray[i - 2]
// And you want to take values of those indexes and add them together. 1+1=2
// To finalize, push the result into the resultArray
            resultArray.push(array1 + array2)
        }
// Return the result
        return resultArray
    }
}

// Example input: 6
console.log(fibonacci(6))
// Expected output: [1, 1, 2, 3, 5, 8]

// Example input: 10
console.log(fibonacci(10))
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 7, 9, 199]

var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]


// b) Create the function that makes the test pass.



// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

var numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]

var numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]

var numbersToAdd3 = []
// Expected output: []



// b) Create the function that makes the test pass.
