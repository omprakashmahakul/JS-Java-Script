// Function

// A function is a reusable block of code.
// It helps avoid repetition and makes programs modular and easier to maintain.

// Advantages:
// 1. Reusability - Write once, use many times.
// 2. Modularity - Break large programs into smaller parts.
// 3. Readability - Makes code easier to understand.
// 4. Maintainability - Changes can be made in one place.
// Loops

// 1. while loop
// Used when the number of iterations is unknown.

// 2. do-while loop
// Used when the loop must execute at least once.

// 3. for loop
// Used when the number of iterations is known.


let num = 1
while (num > 0) {
    num++
    console.log(`The Increased Value of nmu is :${num}`);

}

const prompt = require(`prompt-sync`)()
let num = prompt("Enter the range ")
for (i = 1; i < num; i++) {
    if (i % 2 == 0) {
        console.log(`The Printed Even Numbers are ->${i}`);

    }

}

const prompt = require(`prompt-sync`)()
let age = prompt("Enter Your Age:")

do {
    console.log(`The Age is : ${age}`);

} while (age > 18)


// let num = 1
// while (num > 0) {
//     console.log(`The Increased Value of nmu is :${num}`);
//     num++
// }

// What is the Output
