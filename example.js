// function analyzeMarks(marks) {
//     let total = 0;
//     for (let m of marks) {
//         total += m;
//     }
//     let average = total / marks.length;
//     let highest = Math.max(...marks);
//     let lowest = Math.min(...marks);
//     return {
//         total,
//         average,
//         highest,
//         lowest
//     };
// }
// console.log(analyzeMarks([78, 90, 65, 88, 92]));


//check password strong or weak

// function checkPassword(pwd) {
//     let hasNumber = /[0-9]/.test(pwd);
//     let hasSpecial = /[!@#$%^&*]/.test(pwd);
//     let longEnough = pwd.length >= 8;

//     if (hasNumber && hasSpecial && longEnough) {
//         return "Strong";
//     }
//     return "Weak";
// }

// let userPwd = prompt("Enter your password:");
// let result = checkPassword(userPwd);
// console.log("Password Strength:", result);


//create todo list

//let todos = [];
// function add(todo) {
//     todos.push(todo);
// }
// function remove(index) {
//     todos.splice(index, 1);
// }

// function list() {
//     return todos;
// }

// while (true) {
//     let choice = prompt(
//         "1. Add Todo\n2. Remove Todo\n3. View Todos\n4. Exit\nEnter your choice:"
//     );

//     if (choice == "1") {
//         let item = prompt("Enter todo:");
//         add(item);
//     } 
//     else if (choice == "2") {
//         let idx = Number(prompt("Enter index to remove:"));
//         remove(idx);
//     } 
//     else if (choice == "3") {
//         console.log(list());
//     } 
//     else if (choice == "4") {
//         break;
//     } 
//     else {
//         console.log("Invalid choice");
//     }
// }



//create bank account manager


// const account = {
//     balance: 0,

//     deposit(amount) {
//         this.balance += amount;
//     },

//     withdraw(amount) {
//         if (amount <= this.balance) {
//             this.balance -= amount;
//         } else {
//             console.log("Insufficient funds");
//         }
//     },

//     getBalance() {
//         return this.balance;
//     }
// };

// while (true) {
//     let choice = prompt(
//         "1. Deposit\n2. Withdraw\n3. Check Balance\n4. Exit\nEnter choice:"
//     );

//     if (choice == "1") {
//         let amt = Number(prompt("Enter deposit amount:"));
//         account.deposit(amt);
//     } 
//     else if (choice == "2") {
//         let amt = Number(prompt("Enter withdraw amount:"));
//         account.withdraw(amt);
//     } 
//     else if (choice == "3") {
//         console.log("Balance:", account.getBalance());
//     } 
//     else if (choice == "4") {
//         break;
//     }
// }


// Object 
// add function
// removed
// showw
// edit
// amount calculate

// let umar = {
//     ram: [],
//     // add function
//     addExpense(amount, cata) {
//        umar.ram.push({amount,cata})
//        console.log(`The added amount is ${amount} and category is ${cata}`)
//     },
//     // removed function
//     remove(i) {

//         let removed = umar.ram.splice(i,1)
//         console.log(`The Removed amount is ${removed[0].amount} and category is ${removed[0].cata}`)
//     },
//     // showw function
//     show(){
//         let a = "Lists Are!!\n"
//         umar.ram.map(s => {
//             a+=`Amount : ${s.amount}\t category : ${s.cata}\n`
//         })
//         console.log(a)
//     },
//     // edit function
//     edit(e,namount,ncata){
//         let ed = umar.ram[e]
//         if(ed){
//             if(namount) ed.amount = namount
//             if(ncata) ed.cata = ncata
//             console.log("Index udated!!")
//         }else{
//             console.log("Index not found!!")
//         }
//     },
//     // amount calculate function
//     calculate(){
//         let count = 0;
//         umar.ram.map(c => {
//           for (let key in c){
//             if(key === "amount"){
//                 count+=c[key]
//             }
//           }
//         })
//         console.log(`The sum of amount is : ${count}`)
//     }
// }

// umar.addExpense(222,"butterScotch")
// umar.addExpense(333,"butterScotch")
// // umar.remove(0)
// umar.show()
// umar.edit(1,444,"Venila")
// umar.show()
// umar.calculate()



// let account = {
//     balance : 0,
//  deposit(amt){
//     this.balance+=amt
//     console.log(`deposited amount: ${amt}\t balance amount: ${this.balance}\n`)
// },

//  withdraw(amt){
//     if(amt <= this.balance ){
//         this.balance-=amt
//         console.log(`Withdraw amount: ${amt}\t balance amount: ${this.balance}\n`);
        
//     }else{
//        console.log( "invalid balance")
//     }
// },
//  chk_bal(){
//     console.log(this.balance)
// }
// }
// while(true){
//     let ch = prompt("1.depoist\n 2.withdraw\n 3.cchec balance \nEnter your choice:")
//     if(ch=="1"){
//         let d = Number(prompt("Enter deposit amount:"))
//         account.deposit(d)
//     }else if(ch=="2"){
//           let w = Number(prompt("Enter withdraw amount:"))
//         account.withdraw(w)
//     }else if(ch=="3"){
//         account.chk_bal()
//     }else if(ch == "4" || null){
//         break
//     }
//     else{
//        console.log( "invalid selection")
//     }
// }