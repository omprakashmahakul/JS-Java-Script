//This Is about Loops
//1.While
//2.Do-While
//For
//1.Print Number from 1 to 100
//2.Print Number even from 1 to 100
//3.Print multiplication table of 5.
//4.Find the sum of numbers from 1 to 100.
const prompt = require(`prompt-sync`)();
let num_range = Number(prompt("Enter Your Desired Number Range:"))
let sum = 0
if (isNaN(num_range)) {
    console.log(`Enter The Valid Number:${num_range}`);

}
else {

    for (let i = 1; i <= num_range; i++) {

        sum+=i
    }
    console.log(`The Sum is ${sum}`);

}