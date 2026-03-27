//Task 1: Sum of Array Elements
// let nums = [5, 10, 15, 20];
// let sum = 0;
// for (let i = 0; i < nums.length; i++) {
//   sum += nums[i];
// }
// console.log(`Sum= ${sum}`);

//myself


// Task 2: Find Maximum and Minimum
// let arr = [12, 7, 45, 22, 9];
// let max=arr[0];
// let min=arr[0]
// for(i=0;i<arr.length;i++){
//     if(arr[i]>max){
//          max=arr[i]
//     }
//     else if(arr[i]<min){
//          min=arr[i]
//     }
// }
// console.log(`Max= ${max}`)
// console.log(`Min= ${min}`)

//myself

// Task 3: Reverse an Array (without using reverse())
// let arr = [1, 2, 3, 4, 5];
// let narr=[]
// for(i=arr.length;i>0;i--){
//     narr.push(i)
// }
// console.log(narr)

//myself

 //Task 4: Remove Duplicates from Array
// let arr = [1, 2, 2, 3, 4, 4, 5];
// let narr = [...new Set(arr)];
// console.log(narr); 

//myself

// Task 5: Count Occurrences of Each Element
// let arr = ["apple", "mango", "apple", "cherry", "mango", "apple"];
// let obj = {}
// for(i=0;i<arr.length;i++){
//     if(!obj[arr[i]]){
//        obj[arr[i]]=1
//     }
//     else{
//         obj[arr[i]]+=1
//     }
// }
// console.log(obj);

//myself

//  Task 6: Filter Even Numbers
// let arr = [10, 15, 20, 25, 30];
// let narr=[]
// for(i=0;i<arr.length;i++){
//     if(arr[i]%2==0){
//          narr.push(arr[i])
//     }
// }
// console.log(narr)

//myself

// Task 7: Merge Two Arrays Without Duplicates
// let a = [1, 2, 3];
// let b = [3, 4, 5];
// let c = [...a,...b]
// let narr = [...new Set(c)];
// console.log(narr)

// let a = [1, 2, 3];
// let b = [3, 4, 5];
// let c = [];

// [a,b].forEach(element => {
//     element.forEach(item=>{
//         if(!c.includes(item)){
//             c.push(item)
//         }
//     })
// });
// console.log(c);

//myself

// Task 8: Sort Numbers Ascending & Descending
// let nums = [42, 7, 19, 3, 25];
// let ascending = [...nums].sort((a,b) => a - b)
// let descending = [...nums].sort((a,b) => b - a)
// console.log(ascending)
// console.log(descending);

//myself

// Task 9: Find Second Largest Number
// let arr = [10, 25, 5, 30, 20];
// let descending = [...arr].sort((a,b) => b - a)
// console.log(`Second Largest: ${descending[1]}`);

//myself

//Task 10: Flatten a Nested Array
// let arr = [1, [2, [3, 4]], 5];
// let narr=arr.flat(Infinity)
// console.log(narr);
//myself

// Task 11: Square Each Number (Using map())
// let nums = [2, 4, 6, 8];
// const square = nums.map(num => num ** 2)
// console.log(square);
//myself

// Task 12: Filter Words by Length (Using filter())
// let words = ["sun", "planet", "moon", "star", "galaxy"];
// let fwords = words.filter(arr => arr.length > 4 )
// console.log(fwords);

//myself

//Task 13: Sum of Numbers (Using reduce())
// let numbers = [5, 10, 15, 20];
// let sum = numbers.reduce((a,b) => a + b)
// console.log(sum);
//myself

// Task 14: Find First Negative Number (Using find())
// let arr = [4, 8, -3, 9, -6];
// let negative = arr.find(a => a < 0)
// console.log(negative);
//myself

// Task 15: Sort Objects by Age
// let users = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 19 },
//   { name: "Charlie", age: 30 }
// ];
// let asc = [...users].sort((a,b) => a.age - b.age)
// console.log(asc);
//myself


// Task 16: Count Even and Odd Numbers (Using reduce())
// let nums = [1, 2, 3, 4, 5, 6];
// let count = {even :0 ,odd:0}
// let result = nums.reduce((acc,num)=>{
//     if(num%2==0){
//         count.even++
//     }else{
//         count.odd++
//     }
// },0)
// console.log(count);
//myself


// Task 17: Remove Falsy Values (Using filter())
// let arr = [0, "hello", false, 42, "", null, "JS", undefined];
// let value = arr.filter(i => i)
// console.log(value);
//myself

// Task 18: Capitalize Each Word (Using map())
// let words = ["apple", "banana", "cherry"];
// let cap_words = words.map(i => i[0].toUpperCase()+i.slice(1))
// console.log(cap_words);
//myself

// Task 19: Group Numbers by Even/Odd
// let numbers = [10, 15, 20, 25, 30];
// let even = []
// let odd = []
// for(i=0;i<numbers.length;i++){
//     if(numbers[i]%2==0){
//         even.push(numbers[i])
//     }else{
//         odd.push(numbers[i])
//     }
// }
// console.log("Even:" ,even);
// console.log("Odd:",odd);
//myself

// Task 20: Find Average Marks (Using reduce())
// let marks = [75, 80, 90, 85];
// let avg = marks.reduce((a,b) => a+b )/marks.length ;
// console.log("Average = ",avg);

//myself










