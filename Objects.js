//Task 1: Create and Access Object Properties
// const car = {
//   brand: "Toyota",
//   model: "Camry",
//   year: 2022,
//   color: "Blue"
// };
// for (let key in car) {
//   console.log(car[key]);
// }

//myself

// Task 2: Add, Update, and Delete Properties

// let person = {
//   Name : "Jaya",
//   age : 18,
// }
// person.country = "India";
// person.age = 20;
// delete person.Name;
// console.log(person)

//myself

//Task 3: Object with Methods

// let calculator={
//   add(a,b){
//     return a+b ;
//   },
//   subtract(a, b){
//     return a-b ;
//   },
//   multiply(a,b){
//     return a*b ;
//   }
// }
// console.log(calculator.add(4, 2));   
// console.log(calculator.subtract(4, 2));
// console.log(calculator.multiply(4, 2));

//myself

// Task 4: Nested Object Access
// const student = {
//   Name: "Anu",
//   grade: "A",
//   marks: {
//     math: 90,
//     english: 88,
//     science: 92
//   }
// };
// console.log(`Student Name: ${student.Name}`)
// console.log(`Math Marks: ${student.marks.math}`)
// console.log(`Science Marks: ${student.marks.science}`);

//myself

// Task 5: Loop Through Object and Count Properties
// const laptop = {
//   brand: "HP",
//   processor: "i5",
//   ram: "16GB",
//   storage: "512GB SSD"
// };
// console.log(`Property Count:${Object.keys(laptop).length}`)

//myself

// Task 6: Shallow Copy vs Deep Copy
// const student = {
//   name: "John",
//   marks: { math: 90, science: 85 }
// };
// //console.log(student)
// //shallow copy
// // let copy = student
// //deep copy
// // let copy=structuredClone(student)
// // let copy = JSON.parse(JSON.stringify(student))
// copy.marks.math=100
// console.log("Copied Object: ",copy)
// console.log("Original Object: ",student)

//Output:
//Copied Object:  { name: 'John', marks: { math: 100, science: 85 } }
//Original Object:  { name: 'John', marks: { math: 100, science: 85 } }

//Explanation
// In a shallow copy, if you change the value in the copied object, the original object will also change because both share the same memory address.
// But in a deep copy, if you change the value in the copied object, the original object will not change because they do not share the same memory address.





// Task 7: Merge Multiple Objects
// const obj1 = { id: 101, name: "Alice" };
// const obj2 = { age: 25 };
// const obj3 = { country: "India", department: "IT" };
// console.log({...obj1, ...obj2, ...obj3})

//myself

// // Task 8: Freeze and Modify
// const settings = {
//   theme: "dark",
//   fontSize: 14
// };
// Object.freeze(settings);
// settings.theme = "light";
// settings.mode = "compact";
// delete settings.fontSize;
// console.log(settings);

//myself


// Task 9: Object Destructuring
// const user = {
//   name: "Ravi",
//   age: 28,
//   address: {
//     city: "Chennai",
//     country: "India"
//   }
// };
// const {
//     name : userName,
//     age : userAge,
//     address : {
//         city, country
//     }

// } = user ;
// console.log(`Name: ${userName}`)
// console.log(`Age: ${userAge}`)
// console.log(`City: ${city}`)
// console.log(`Country: ${country}`)

//myself


//Task 10: Count Nested Object Properties

// const person = {
//   name: "Kumar",
//   details: {
//     age: 30,
//     contact: { phone: "12345", email: "test@mail.com" }
//   }
// };

// function countProperties(obj) {
//     let count = 0
// for(let key in obj){
//     count++
//    if(typeof obj[key] === "object"){
//     count+=countProperties(obj[key])
//    }
// }
// return count
// }
// console.log(countProperties(person));

//refer by chatgpt 



