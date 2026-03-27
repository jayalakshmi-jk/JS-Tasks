// count vowels
// let a = "education"
// let count = 0

// for(let i=0;i<a.length;i++){
//     // console.log(a[i]);
//     if(a[i] == "a" || a[i]=="e" || a[i] == "i" || a[i] =="o"|| a[i]=="u"){
//         count++
//     }
// }
// console.log(count);

// second largest number
// let arr = [10,5,8,20,15,35]
// arr.sort((a,b)=>b-a)
// console.log(arr);
// console.log(`Second Largest Number:${arr[1]}`);

//non repeat first character
// let a = "aabbcddeegh";
// a=a.split("")
// for (let i = 0; i < a.length; i++) {
//   if(a.indexOf(a[i])==a.lastIndexOf(a[i])){
//     console.log(a[i])
//     break;
//   }
// }

// group anagram
// function anagram(){
// let a = "stop";
// let b = "tops";
// return a.split("").sort().join("") == b.split("").sort().join("")
// }
// console.log(anagram())

// var groupAnagrams = function (strs) {
//   let arr = [];
//   for (i = 0; i < strs.length; i++) {
//     let ar = [];
//      ar.push(strs[i])
//     for (j = i + 1; j < strs.length; j++) {

//         if(strs[i]||strs[j]==""){
//             arr.push(strs)
//             return arr
//         }

//       let a = strs[i].split("").sort().join("");
//       let b = strs[j].split("").sort().join("");
//       if (a == b) {
//         ar.push( strs[j]);
//         strs.splice(j,1)
//       }
//     }
//     arr.push(ar);
//   }
//   return arr;
// };
// console.log(groupAnagrams(["","",""]));

// var groupAnagrams = function(strs) {
//     let obj = {};

//     for (let str of strs) {
//         let key = str.split("").sort().join("");

//         if (!obj[key]) {
//             obj[key] = [];
//             // console.log(obj);

//         }

//         obj[key].push(str);
//         // console.log(obj);

//     }

//     return Object.values(obj);
// };

// console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));

// var findAnagrams = function (s, p) {
//         //   let char = "";
//   let arr = []

//   for (i = 0; i < s.length; i++) {
//     let char = "";
//     for (j = i; j < s.length; j++) {
//       if (char.length != p.length) {
//         if (!char.includes(s[j])) {
//           char += s[j];
//           char.length = 3;
//         } else {
//           break;
//         }
//       }
//     }
//     // console.log(char);
//     char = char.split("").sort().join("");
//     // console.log(char);

//     if (char == p) {
//      arr.push(i)
//     }
//   }

//   return arr

// };
// console.log(findAnagrams("baa", "aa"));

// var findAnagrams = function (s, p) {
//   let arr = [];
//   p = p.split("").sort().join("");

//   for (let i = 0; i <= s.length - p.length; i++) {
//     let substring = s.substring(i, i + p.length);
//     let str = substring.split("").sort().join("");
//     console.log(substring);

//     if (str === p) {
//       arr.push(i);
//     }
//   }

//   return arr;
// };

// console.log(findAnagrams("baa", "aa"));
// var countOperationsToEmptyArray = function (nums) {
// let map={};
//     var n=nums.length,p=0;
//     var ans=n;
//     for(let i=0;i<n;i++){
//         map[nums[i]]=i;
//     }
//     console.log(map);

//     nums.sort((a,b)=>a-b);
//     console.log(nums);

//     for(let i=0;i<n;p=map[nums[i++]]){
//         if(map[nums[i]]<p){
//             ans+=n-i;

//         }

//     }
//     return ans
//   }
//   console.log(countOperationsToEmptyArray([3,4,-1]));




//Longest Palindromic Substring

// let s = "babad";
// let a = "";
// for (i = 0; i < s.length; i++) {
//   let str = "";
//   for (j = i; j < s.length; j++) {
//     if (!str.includes(s[j])) {
//       str += s[j];
//     } else {
//       break;
//     }
//   }
//   console.log(str);
// }


// let s = "babad";
// let longest = "";

// for (let i = 0; i < s.length; i++) {
//   for (let j = i; j < s.length; j++) {
//     let sub = s.slice(i, j + 1);
//     let rev = sub.split("").reverse().join("");

//     if (sub === rev && sub.length > longest.length) {
//       longest = sub;
//     }
//   }
// }

// console.log(longest);