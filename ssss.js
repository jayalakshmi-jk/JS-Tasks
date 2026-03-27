//1)
// let num = 121
// // num = num.toFixed()
// // let rev = num.split("").reverse().join("")
// // console.log(rev);
// num = Math.abs(num)
// num = Math.floor(num)
// let s;
// for(i=num;i>=1;i=i/10){
//     console.log(i);
//     s = num
// }
// // console.log(typeof s);

// console.log(s==num);

// //2)
// let str = "hello world jaya";
// str= str.split(" ").join("");
// console.log(str);
// let obj = {};
// for (let i = 0; i < str.length; i++) {
//   if (obj[str[i]]) {
//     obj[str[i]]++;
//   } else {
//     obj[str[i]] = 1;
//   }
// }
// console.log(obj);

//3)
// let arr = [1,2,3,4,5]
// let k=2;
// let s;
// for(let i=1;i<=k;i++){
//     // if(arr[i]==k){
//          s=arr.pop()
//         arr.unshift(s)
//         // console.log(arr);
//     //     break
//     // }
// }
// console.log(arr);

//4)
// let arr1 = [1,2,3,4,5,6,7]
// let arr2 = [3,4,7]
// let narr = []

// for(let i=0;i<arr1.length;i++){
//     for(let j=0;j<arr2.length;j++){
//         if(arr1[i]==arr2[j]){
//             narr.push(arr1[i])
//         }
//     }
// }
// console.log(narr);

//number palindrome
// let num=121
// let nums=num
// let str=num
// let Count=1
// let sum=0
// let mod=10
// let div=1
// while(num>9){
//     num=num/10
//     Count++
// }
// // console.log(Count);
// for(i=1;i<=Count;i++){
//     let char=nums%mod
//     let chars=char/div
//     sum+=chars*div
//     nums=nums-char
//     mod*=10
//     div*=10
// }
// console.log(sum);

// let num=121
// let nums=num
// let numss=num
// let Count=1
// let sum=0
// let mod=10
// let div=1
// while(num>9){
//     num=num/10
//     Count++
// }
// let counts=Count
// for(i=1;i<=Count;i++){
//     let char=nums%mod
//     let chars=char/div
//     sum+=chars*(10**counts/10)
//     nums=nums-char
//     mod*=10
//     div*=10
//     counts--
// }
// if(numss==sum){
//    console.log( "is palindrome");
// }else{
//    console.log( "is not");
// }

//Number palindrome
// function isPalindrome(num) {
//     if (num < 0) return 0;
//     let reversed = 0, n = num;
//     while (n) {
//         reversed = reversed * 10 + (n %10);
//         n = Math.floor(n / 10);
//     }
//     return reversed;
// }
// console.log(isPalindrome(120));

// var reverse = function(x) {
//     //  if (x < 0) return -x;
//      let negative = x<0 ? -1 :1;
//     let reversed = 0, n = Math.abs(x);
//     while (n) {
//         reversed = reversed * 10 + (n %10);
//         n = Math.floor(n / 10);
//     }
//     return reversed * negative;
// };
// console.log(reverse(1534236469));

//longest substring

// let str = "pwwkewe"
// let fullarr =[]
// let long =0
// let ans;

// let emp = ""
// for(i=0;i<str.length;i++){
//     let arr =""
//     for(j=i;j<str.length;j++){
//         if(!arr.includes(str[j])){
//             arr+=str[j]
//         }else{
//             break;
//         }
//     }
//     // fullarr.push(arr)
//     // arr=""
//     if(arr.length>emp.length){
//         emp=arr
//         // arr=""
//     }
// }
// for(let i of fullarr){
//     if(i.length>long){
//         long=i.length
//         ans = i
//     }
// }
// console.log(fullarr);
// console.log(ans);
// console.log(emp);

//find the intersections of arrays

// let a = [1, 2, 4]
// let b = [4,3,5]
// let arr = []

// let obj = {}

// for(let ch of a){
//     if(!obj[ch]){
//         obj[ch]=1
//     }
// }
// for(let ch of b){
//     if(obj[ch]){
//         arr.push(ch)
//     }
// }

// console.log(arr);

//longest substring
// let arr = "abcabcbb"
// let char=""

// for(i=0;i<arr.length;i++){
//     let str=""
//     for(j=i;j<arr.length;j++){

//         if (!str.includes(arr[j])){
//             str+=arr[j]
//         }
//         else{
//             break;
//         }
//     }
//     if (str.length>char.length){
//         char=str
//     }
// }

// console.log(char);

//Find the Intersection of Two Arrays
// let arr1=[1,2,3,3]
// let arr2=[2,4,5]
// let obj = {}

// for(let ch of arr1){
//     if(obj[ch]){
//         obj[ch]+=1
//     }else{
//         obj[ch]=1
//     }
// }

// for(let ch of arr2){
//     if(obj[ch]){
//         obj[ch]+=1
//     }else{
//         obj[ch]=1
//     }
// }
// for(let x in obj){
//     if(obj[x]>1){
//         console.log(x);
//     }
// }
// console.log(obj);

//output: 3

// let addBinary = function (a, b) {
//     let num = a.length - 1
//     let nums = b.length - 1

//     while (num >= 0 || nums >= 0) {
//         let carry = ""

//         if (carry.length == 0) {

//             if (a[num] == "1" && a[nums] == "1") {
//                 sum = "0"
//                 carry += 1
//             }
//             let sum = (parseInt(a[num]) + parseInt(b[nums])).toString()

//             if (sum.length > 1) {
//                 carry += 1
//             }
//             else {

//             }
//         }
//         else {
//             let sum = parseInt(a[num]) + parseInt(b[nums]) + parseIn(carry)
//         }

//         num--
//         nums--

//         //  let sum = BigInt("0b" + a) + BigInt("0b" + b);
//         //     let res=sum.toString(2)
//         //     return res.toString()
//     }
// }

// var coinChange = function(coins, amount) {

// };

// console.log(coinChange([1,2,5],11));

// var multiply = function(num1, num2) {
//     let a= BigInt(num1) * BigInt(num2)
//     return a.toString()
// };
// console.log(multiply("123456789","987654321"))

//  let nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// var merge = function(nums1, m, nums2, n) {
//     for(i=0;i<nums2.length;i++){
//         nums1.push(nums2[i])
//     }
//     nums1.sort((a,b)=>a-b)
//     // console.log(nums1);

//     for(j=0;j<nums1.length;j++){
//         if(nums1[j]==0){
//             nums1.splice(j,1)
//             j--
//         }
//         // console.log(nums1);

//     }

//     return nums1
// };
// console.log(merge(nums1,m,nums2,n));

// var removeElement = function(nums, val) {
//    let k=0;
//     for(let i=0;i<nums.length;i++){
//         if(nums[i]!==val){
//             nums[k]=nums[i]

//             k++
//         }
//     }
//     return k
// };
// console.log(removeElement([0,1,2,2,3,0,4,2],2));

// var chunk = function (arr, size) {
//   let a = [];
//    let ar = [];
//   for (i = 0; i < arr.length; i++) {
//     ar.push(arr[i])
//     if (ar.length == size) {
//       a.push(ar);
//       ar = []
//     }
//   }
//    if (ar.length >0) {
//       a.push(ar);
//     }

//   return a;
// };
// console.log(chunk([1, 2, 3, 4, 5], 3));

// var countOperationsToEmptyArray = function(nums) {
//     let count =0
//     // for(i=0;i<nums.length;i++){
//     //     if(nums[i]>nums[i+1]){
//     //       let a = nums.splice(i,1)
//     //       nums.push(parseInt(a))
//     //       count++
//     //     }
//     //     if(nums[0]<nums[1]){
//     //         nums.splice(0,1)
//     //         count++
//     //     }
//     // }
//     // console.log(count);

//     // return nums

//     // for(i=0;i<nums.length;i++){
//     //     for(j=i+1;j<nums.length;j++){
//     //         if(nums[i]>nums[j]){
//     //             let temp = nums[i]
//     //             nums[i]=nums[j]
//     //             nums[j]=temp

//     //         }
//     //     }
//     //     count++

//     // }
//     // console.log(count);

//     // for(i=0;i<nums.length;i++){
//     //     if(nums.length==0){
//     //         nums =nums.splice(i,1)
//     //         count++
//     //     }
//     // }
//     // console.log(count);

//     // return nums

//     while(nums.length>0){
//         let min = Math.min(...nums)

//         if(nums[0]==min){
//             nums.shift()
//         }else{
//             nums.push(nums.shift())
//         }
//         count++
//     }
//     console.log(nums);

//     return count
// };
// console.log(countOperationsToEmptyArray([1,2,3]));

// let arr = [1,4,4];
// let k =3;
// let sum ;
// let sum_arr = []

// for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j <= arr.length; j++) {
//        let sarr = arr.slice(i, j)
//     //    console.log(sarr);
//        if(sarr.length == k){
//             sum = sarr.reduce((a,c)=>a+c,0)
//             sum_arr.push(sum)
//        }

//     }
// }
// console.log(sum_arr);
// console.log(Math.max(...sum_arr));

// var isMonotonic = function (nums) {
//   let in_count = 0;
//   let de_count = 0;

//   // let num = nums.sort((a, b) => a - b)
//   for (let i = 0; i < nums.length-1; i++) {
//     // for (let j = i + 1; j < nums.length; j++) {
//     if (nums[i] < nums[i + 1]) {
//       console.log(nums[i], nums[i+1]);

//       in_count++;
//     } else if (nums[i] > nums[i + 1]) {
//       de_count++;
//     }
//   }
//   // }
//   console.log(in_count);
//   console.log(de_count);
//   if (de_count == 0 || in_count == 0) {
//     return true;
//   }

//   return false;
// };

// console.log(isMonotonic([1,2,3,4,4]));

// var mySqrt = function(x) {
//     x= Math.sqrt(x)
//     return Math.floor(x)
// };

// console.log(mySqrt(8));

// var plusOne = function(digits) {
//     let str="";
//     let arr = []
//     for(let i = 0 ; i<digits.length;i++){
//       str += digits[i]
//     }
//     console.log(str);

//     let res = BigInt(str)+1n;
//     console.log(res);

//     res = res.toString()
//     for(let j = 0 ;j<res.length;j++){
//       arr.push(Number(res[j]))
//     }
//     return arr

// };
// console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]));

// var isPossibleToSplit = function (nums) {

//   let obj = {};
//   for (let ch of nums) {
//     if (obj[ch]) {
//       obj[ch] += 1;
//     } else {
//       obj[ch] = 1;
//     }

//     if(obj[ch]>2){
//       return false
//     }

//   }
// console.log(obj);

//   return true;
// };
// console.log(isPossibleToSplit([1, 1, 2, 2, 3, 4]));

// var sortedSquares = function(nums) {
//     let arr=[]
//     for(i=0;i<nums.length;i++){
//         let n = Math.abs(nums[i])
//         n=n*n;
//         arr.push(n)
//     }
//     return arr.sort((a,b)=>a-b)
// };
// console.log(sortedSquares([-4,-1,0,3,10]));

// suffle the array
// var shuffle = function(nums, n) {
//     l = nums.length/2;
//     let arr1= [];
//     let s = nums.slice(0,l)
//     let s1 = nums.slice(l)
//     // console.log(s);
//     // console.log(s1);
//     for(let i=0;i<s.length;i++){
//         arr1.push(s[i])
//         for(let j=i;s1.length;j++){
//            arr1.push(s1[j])
//            break
//         }
//     }
//     // console.log(arr1);

//     return arr1
// };
// console.log(shuffle([2,5,1,3,4,7],3));

//longest palindromic substring
// let s = "babad";

// function palindrome(s) {
// let longest = "";

//   for (let i = 0; i < s.length; i++) {
//     for (let j = i + 1; j <= s.length; j++) {
//       let a = s.slice(i, j);

//       if (a === a.split("").reverse().join("")) {
//         if (a.length > longest.length) {
//           longest = a;
//         }
//       }
//     }
//   }

//   return longest;

// }

// console.log(palindrome(s));

//Relative sort array
// let arr1 = [28,6,22,8,44,17];
// let arr2 = [22,28,8,6]
// let narr1 = []
// let narr2 = []
// for(i=0;i<arr2.length;i++){
//     for(j=0;j<arr1.length;j++){
//         if(arr2[i] == arr1[j]){
//             narr1.push(arr1[j])
//         }
//     }
// }

// for(i=0;i<arr1.length;i++){
//     if(!narr1.includes(arr1[i])){
//              narr2.push(arr1[i])
//     }
// }
// narr2.sort((a,b)=>a-b)
// let a = [...narr1,...narr2]
// console.log(a);

//41. first missing positive
// var firstMissingPositive = function (nums) {
//   let l = nums.length;
//   nums = nums.sort((a, b) => a - b);

//   for(i=0;i<nums.length;i++){
//       if(nums[0] == 0 || nums[0]<0){
//     nums.splice(0,1)
//   }
//   }

// console.log(nums);

//   for (i = 0; i < l; i++) {
//     if (nums[i] !== i+1 ) {
//         return i+1
//     }
//   }

//   return l+1
// };
// console.log(firstMissingPositive([0,-1,3,1]));

//3151.special array

// var isArraySpecial = function (nums) {
//   if (nums.length == 1) {
//     return true;
//   }
// for (i = 0; i < nums.length; i++) {
//   if (nums[i] % 2 == 0) {
//     if (nums[i + 1] % 2 !== 0) {
//       return true;
//     }
//   } else {
//     if (nums[i + 1] % 2 == 0) {
//       return true;
//     }
//   }
// }
// return false;

//   for (i = 0; i < nums.length; i++) {
//       console.log(nums[i],nums[i+1]);

//     if (nums[i] % 2 == nums[i + 1] % 2) {
//       console.log(nums[i],nums[i+1]);

//       return false;
//     }
//   }

//   return true
// };
// console.log(isArraySpecial([4, 3, 1, 6]));

// 3152. special array

// var isArraySpecial = function (nums, queries) {
//   //  console.log(nums);
//   let arr =[];
//   for (i = 0; i < queries.length; i++) {
//     console.log(nums[queries[i][0]]);
//     console.log(nums[queries[i][1]]);

//     if((nums[queries[i][0]]%2 == 0 && nums[queries[i][1]]%2 !== 0)){
//       arr.push(false)
//     }else if(nums[queries[i][0]]%2 !== 0 && nums[queries[i][1]]%2 == 0){

//       arr.push(false)

//     }else if(nums[queries[i][0]]%2 == 0 && nums[queries[i][1]]%2 !== 0){
//       arr.push(true)
//     }
//   }
//   return arr;
// };
// console.log(isArraySpecial([4,3,1,6],[[0,2],[2,3]]));

//905  Sort Array By Parity

// var sortArrayByParity = function(nums) {
//     // let arr = []
//     for(i=0;i<nums.length;i++){
//         if(nums[i]%2==0){
//             let n =nums.splice(i,1)
//             nums.unshift(n[0])
//         }
//     }

//     return nums
// };
// console.log(sortArrayByParity([3,1,2,4]));

// ===========================================================================

//1470. Suffle the array
// var shuffle = function(nums, n) {
//     let arr1 = []
//     let ans = []
//     for(i=0;i<nums.length;i++){
//         arr1.push(nums.splice(0,n))
//     }
//     let a1 = arr1[0]
//     let a2 = arr1[1]
//     for(i=0;i<a1.length;i++){
//         ans.push(a1[i],a2[i])
//     }
//     return ans

// };
// console.log(shuffle([2,5,1,3,4,7],3));

//output
//[ 2, 3, 5, 4, 1, 7 ]

// 1122. Relative sort array
// let arr1 = [2,21,43,38,0,42,33,7,24,13,12,27,12,24,5,23,29,48,30,31]
// let arr2 = [2,42,38,0,43,21]
// let newarr=[]
// arr1=arr1.sort((a,b)=>a-b)
// for(i=0;i<arr2.length;i++){
//     for(j=0;j<arr1.length;j++){
//         if(arr2[i]==arr1[j]){
//             newarr.push(arr1[j])
//         }

//     }

// }

// console.log(newarr);

// for(i=0;i<arr1.length;i++){
//     if(!arr2.includes(arr1[i])){
//         newarr.push(arr1[i])
//     }
// }

// console.log(newarr);

//output
// [2,2,2,1,4,3,3,9,6,7,19]

//896. Monotonic Array

// var isMonotonic = function (nums) {

//     let arr1=[...nums].sort((a,b)=>a-b)

//     let arr2=[...nums].sort((a,b)=>b-a)

//     if(arr1.toString()==nums.toString()){
//        return true
//     }
//     else if(arr2.toString()==nums.toString()){
//         return true
//     }
//     else{
//         return false
//     }
// };

// console.log(isMonotonic([6,5,5,4,4]));

// let matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// let arr = [];

// for (let i = 0; i < matrix.length; i++) {

//   let curr = matrix[i];
//   for (let j = 0; j < curr.length; j++) {

//     console.log(curr[j]);
//   }
// }

//output:  [1,2,3,6,9,8,7,4,5]

//50. my pow(x,n)
// var myPow = function (x, n) {
//   function pow(x, n) {
//     if (n == 0) {
//       return 1;
//     }
//     if (n < 0) {
//       n = Math.abs(n);
//         let s = 1
//       for (i = 0; i < n; i++) {
//          s = s * x;
//         // console.log(s);
//       }
//       s= 1/s
//       return s

//     }
//     let sum = 1;
//     for (i = 0; i < n; i++) {
//       sum = sum * x;
//       // console.log(sum);
//     }
//     return sum;
//   }

//   return pow(x, n);
// };
// console.log(myPow(2, -2147483648));



//Third Maximum Number
let nums = [2, 1];
function max(nums) {
  
  
}
console.log(max(nums));


// nums=nums.sort((a,b)=>b-a)
// console.log(nums);
