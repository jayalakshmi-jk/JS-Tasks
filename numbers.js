/*=========================================Numbers Methods=========================================*/

// 1) Task 1: Round a Decimal Number
//  Given a decimal number, display its rounded value using JavaScript’s Math methods.

// let num = 4.6789;
// console.log(`Original : ${num}`);
// console.log(`Rounded (nearest) : ${num.toFixed()}`);
// console.log(`Rounded (2 decimal places) : ${num.toFixed(2)}`);

//myself



// Task 2: Generate a Random Number between Two Values
//  Write a program that generates a random integer between two given numbers (inclusive).

// let min=10
// let max=20
// let rn= Math.floor(Math.random() * (max - min + 1)) + min;
// console.log(`Random number between 10 and 20:${rn}`);

//myself


// Task 3: Sum of Digits of a Number
//  Write a JavaScript program to find the sum of all digits in a given number.
//  The number may be positive or negative.

// let num=Number(prompt("Enter any number:"))
// let a=Math.abs(num)
// let digits=a.toString();
// let sum=0
// for (let i = 0; i < digits.length; i++) {
//     sum += parseInt(digits[i]);
//  }
// console.log(`Sum of digits: ${sum}`)

//myself


// Task 4: Format a Number as Currency
//  Write a JavaScript program that takes a number and formats it as currency 
//  (for example, in Indian Rupees).

// let amount=1234567.89;
// console.log('₹'+amount.toLocaleString('en-IN'));

//discussed with balamurugan

//Task 5: Calculate Compound Interest
//Calculate compound interest using A=P(1 + r/100)^t

// let P = 5000
// let r = 5
// let t = 2
// let A = P * Math.pow((1 + r / 100), t)
// let ci=A-P
// console.log(`Compound Interest: ${ci.toFixed(2)}`)
// console.log(`Total Amount:  ${A.toFixed(2)}`)

//myself


/*=========================================String Methods=========================================*/

// Task 6: Convert Case and Reverse a String
//  Write a program that converts all letters in a string to uppercase
// and also prints the reversed version of the string.

// let str = "developer";
// let us = str.toUpperCase();
// let rstr = str.split("").reverse().join("");
// console.log(`Uppercase: ${us}`);
// console.log(`Reversed : ${rstr}`);

//myself

// Task 7: Check for Palindrome
//  Write a program that checks whether a given string reads the 
//  same backward and forward (ignoring case and spaces).

// let str = "Race car";
// let str1=str.toLowerCase().replace(/ /g, "");
// let rstr = str1.split(" ").reverse().join("");
// if(str1===rstr){
//     console.log("Is Palindrome : true")
// }
// else{
//     console.log("Is Palindrome : false")
// }

//myself

// Task 8: Count the Occurrences of a Word
//  Write a JavaScript program to count how many times a specific word appears in a sentence.

// let sent = "JavaScript is fun. I love JavaScript programming.";
// let word = "JavaScript";    
// let count = 0;
// let words = sent.split(" ");
// for (let i = 0; i < words.length; i++) {
//     if (words[i].toLowerCase() === word.toLowerCase()) {
//         count++;
//     }
// }
// console.log(`The word "${word}" appears ${count} times.`);

//self coded and refered from google


// Task 9: Capitalize the First Letter of Each Word
//  Write a JavaScript program that capitalizes the first letter of every word in a given sentence.

// let sent = "welcome to javascript programming";
// let words = sent.split(" ");
// for (let i = 0; i < words.length; i++) {
//     words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
// }
// let sent2 = words.join(" ");
// console.log(sent2);

//self coded and refered syntax from google


// Task 10: Remove Duplicate Characters
//  Write a JavaScript program that removes duplicate characters from a string.

// let text = "programming"
// let result = "";
// for (let i = 0; i < text.length; i++) {
//     if (!result.includes(text[i])) {
//         result += text[i];
//     }
// }
// console.log(`After removing duplicates: ${result}`);

//self coded and discussed with balamurugan