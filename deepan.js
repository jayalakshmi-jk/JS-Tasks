//1)
//Write a function greet(name) that takes a name and prints:
//  Hello, <name>! Welcome to JavaScript.

// function greet(name){
//     console.log(`Hello, ${name}! Welcome to JavaScript.`)
// }
// greet("jaya");

//myself


//2)Sum of Two Numbers
//Write a function add(a, b) that returns the sum of two numbers.

// function add(a,b){
//   return a+b
// }
// console.log(add(3,4));

//myself

//3. Default Parameters
// Create a function multiply(a, b = 2) that multiplies two numbers.
//  If b is not passed, it should use the default value 2.

// function multiply(a,b){
//   return a*b
// }
// console.log(multiply(3,4));

//myself

//4. Find Maximum of Three Numbers
//Write a function findMax(a, b, c) that returns the largest of three numbers.

// let a=prompt("enter first number:");
// let b=prompt("enter second number:");
// let c=prompt("enter third number:");
// function big(){
// if(a>b && a>c){
//     console.log("a is big=",a);
// }
// else if(b>c && b>a){
//      console.log("b is big=",b);
// }
// else{
//      console.log("c is big=",c);
// }
// console.log(`a=${a}`,`b=${b}`,`c=${c}`)
// }
// big()

//myself


//5. Count Words in a Sentence
//Write a function countWords(sentence) that returns how many words are in a sentence.

// function countWords(sentence){
//     let words=sentence.split(" ");
//     return words.length;
// }
// console.log(countWords("hello world"))
// console.log(countWords("My name is jaya."))
// console.log(countWords("I am coming from trichy."))

//with help of balamurugan


//6) Check Even or Odd
//Write an arrow function isEven(num) that returns true if a number is even, otherwise false.
// const isEven = (num) => {
//   return num % 2 === 0
// }
// console.log(isEven(4))
// console.log(isEven(7))

//myself


//7) Write a function factorial(n) that returns the factorial of a number.

// function fact(n){
//     if( n==0)
//     return 1;
//     return n*fact(n-1)
// }
// console.log(fact(6))

//myself


//8) Write a function countVowels(str) that counts how many vowels (a, e, i, o, u) are in a string.

// let str="programming is fun"
// let count=0
// let vowels="aeiou"
// function countVowels(){
// for(i=0;i<str.length;i++){
//     let ch=str[i]
//     if(ch=='a'||ch=='e'||ch=='i'||ch=='o'||ch=='u')
//     {
//         count++
//     }
// }
// }
// countVowels()
// console.log(`The vowel count is the word:${count}`)

//myself


//9) Write a function isPrime(num) that returns true if the number is prime, otherwise false.

// let isPrime = num =>{
//     if(num<=1) return false;
//     for (i=2;i<=Math.sqrt(num);i++)
//     {
//         if(num%i===0) return false;
//     }
//     return true
// }
// console.log(isPrime(10))
// console.log(isPrime(3))
// console.log(isPrime(7))

//refer chatgpt

//10) Write a function createCounter() that returns another function.
// Every time the inner function is called, it should return the next count (1, 2, 3...).
// function createCounter() {
//   let count = 0; 
//   return function() {
//     count++; 
//     return count
//   }
// }
// const counter = createCounter();
// console.log(counter()); 
// console.log(counter()); 
// console.log(counter()); 

//refer slide


// Mini Project 1 - Simple Calculator


// let a=parseInt(prompt("Enter a first number:"))
// let b=parseInt(prompt("Enter a second number:"))
// let op=prompt("Enter Operator:");
// let c
// function calculator(){
//    if(op=="+") {
//       c=a+b
//        return c
//    }
//    else if(op=="-") {
//        c=a-b
//        return c
//    }
//    else if(op=="/"){
//        c=a/b
//    return c
//    }
//    else if(op="*") {
//       c=a*b
//       return c
//    }
//    else{
//        return "Please enter correct input! "
//    }
// }
// calculator() 
// console. log(`Result=${c}`)

//myself



//Mini Project - 2 - Student grade evaluater

// let a = parseInt(prompt("Enter Tamil Mark:"))
// let b = parseInt(prompt("Enter English Mark:"))
// let c = parseInt(prompt("Enter Maths Mark:"))
// let d = parseInt(prompt("Enter Science Mark:"))
// let average = () => (a + b + c + d) / 4; 
// let getGrade = (avg) => {
//   if (avg >= 90) return "A"
//   else if (avg >= 80) return "B"
//   else if (avg >= 70) return "C"
//   else if (avg >= 60) return "D"
//   else return "Fail"
// }
// let avg = average()     
// let grade = getGrade(avg)
// console.log(`Tamil = ${a}, English = ${b}, Maths = ${c}, Science= ${d}`)
// console.log(`Average = ${avg}`)
// console.log(`Grade = ${grade}`)

//myself


//Mini Project - 3 - Random Quote Generator

//  <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>Random Quote Generator</title>
// </head>
// <body>
//   <h2> Random Quote Generator </h2>
//   <p id="quote">Click the button to get a quote!</p>
//   <button id="btn">Get Quote</button>

//   <script>
//     const quotes = [
//       "Believe in yourself and code confidently!",
//       "Success starts with consistency.",
//       "Keep pushing — every bug is a lesson.",
//       "Dream big, code bigger!",
//       "Focus + Effort = Success.",
//       "Debugging is like detective work — enjoy it!",
//       "Learn something new every day.",
//       "Mistakes are proof you're trying.",
//       "Never give up, great things take time!",
//       "Code is like humor — when you have to explain it, it’s bad."
//     ];
//     const getRandomQuote = () => quotes[Math.floor(Math.random() * quotes.length)];
//     const displayQuote = () => {
//       document.getElementById("quote").innerHTML = getRandomQuote();
//     };
//     document.getElementById("btn").addEventListener("click", displayQuote);
//   </script>
// </body>
// </html> 

//refer chatgpt


//Mini Project - 4 -Temparature Convertor
// function convertTemperature(value, scale)
// {
//     if(scale=="C") {
//        res= (value * 9/5) + 32
//        return`Temperature in Fahrenheit: ${res}°F`
//     }
//     else if(scale=="F"){
//         res=(value - 32) * 5/9
//      return `Temperature in Celcious: ${res}°C`
//     }
//     else return "Enter a valid input"

// }
// console.log(convertTemperature(100,"F"))

//myself



//Prime Number

// let num = 12
// function isPrime(num){
//     if(num<=1)return false;
//      for(let i=2;i<num;i++){
//         if(num%i==0){
//             return false
//         }
//      }

// return true
// }

// console.log(isPrime(num));
