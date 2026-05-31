//This File Is About Condition and Take User From Input
// In js prompt is to take input from user but it applicable in broswer not Node But You can still use it by install a Third Party Library called prompt-sync 
// npm install prompt-sync run this command  in your powershell of windows or respective Terminal

const prompt = require('prompt-sync')();
let Name = String(prompt("Enter Your Name: "));
console.log(Name);
let age = Number(prompt("Enter Your Age:"))

if (isNaN(age)) {
    console.log(`Enter The  Valid Number : ${Name}`);

} else if (age >= 18) {
         console.log(`Congratulations ${Name}  Are Eligible For Vote 🥳 `);
         
}
else {
    console.log(`You Are Not Eligible For Vote : `);
    
}