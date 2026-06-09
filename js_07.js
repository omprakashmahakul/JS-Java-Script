//// Function

// A function is a reusable block of code.
// It helps avoid repetition and makes programs modular and easier to maintain.

// Advantages:
// 1. Reusability - Write once, use many times.
// 2. Modularity - Break large programs into smaller parts.
// 3. Readability - Makes code easier to understand.
// 4. Maintainability - Changes can be made in one place.


// 1.Normal Function 
function greet() {
    console.log(`Hii This is Krishna`);

}
greet()
// 2. With Parameter
function user_name(name) {
    console.log(`Hii I am ${name}`);

}
let name = "Krishna"
user_name(name)

// 3.Return Type and Expression

function add(a, b) {
    return a + b
}
const result = add(10, 20)
console.log(result);

// 4.Arrow Function
const prompt = require("prompt-sync")();

let email = prompt("Enter Your Email: ");
let password = prompt("Enter Your Password: ");

const validateForm = (email, password) => {
    if (!email || !password) {
        return "Please Enter These Fields";
    }
    else {
        return "Login Successful";
    }

};

console.log(validateForm(email, password));
