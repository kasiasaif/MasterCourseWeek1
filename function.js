// let coffeeIsGrinding = false;

// const pressGrindBeans = () => {
//     if(coffeeIsGrinding){
//         console.log("Stopping the gring");
//         coffeeIsGrinding = false;
//     }else{
//     console.log("Grinding is about begin");
//     coffeeIsGrinding = true;
//     }
// } 
// pressGrindBeans();
// pressGrindBeans();
// pressGrindBeans();
// pressGrindBeans();
// pressGrindBeans();
// pressGrindBeans();
// pressGrindBeans();
// let balance = 10000;
// const cashWithdrawal = (amount, accnum) =>{
//     console.log(`Withdrawing ${amount} form account ${accnum}`);
//     balance -= amount;
//     console.log(balance);
// }

// cashWithdrawal(300,50449921);
// cashWithdrawal(40,12349921);
// cashWithdrawal(10,504345921);
// cashWithdrawal(5,50466921);

// const addUp = (num1, num2)=> {
//     return num1 + num2;
// }
// addUp(7,3);
// console.log(addUp(2,5));

// const addUp1 = (num1, num2)=> {
//     return num1 / num2;
// }
// addUp1(7,3);
// console.log(addUp1(2,5));

console.log("-------------------------activity 1----------------------------------")

function factorial (n) {
    if ((n ===0) || (n ===1)){
        return 1;
    }else{
        return(n* factorial(n-1));
    }
}
console.log(factorial(33))
console.log("-------------------------activity 2----------------------------------")

let orderCount = 0;

const takeOrder = (topping1, topping2) =>{
    console.log(`Pizza with ${topping1} and ${topping2}.`);
    orderCount++;
    console.log(`Order no : ${orderCount}`);
}
takeOrder("pineapple", "salami");
takeOrder("mushrooms", "pepperoni");
takeOrder("chicken", "olives");

console.log("-------------------------activity 3----------------------------------")
let balance = 2500;
let pinCode = 1234;

// var readline = require('readline');
// var rl = readline.createInterface(
//         process.stdin, process.stdout);

// rl.setPrompt(`Enter pin code `);
// rl.prompt();
// rl.on('line', (pin) => {
//     if(pin == pinCode){ 
//     console.log(`Ur pin: ${pin}`);
//     rl.close();
//     }
// });
// const cashWithdrawal = (amount,pin) =>{
//     if( pin== pinCode && balance > amount){
//         balance -= amount;
//         console.log(`You have withdrawn ${amount} .Balance:  ${balance}`);
//     }else {
//         console.log("Pin number or amount is incorrect")
    // }}
// cashWithdrawal(30);
// cashWithdrawal(3,2222);

const cashWithdrawal1 = (amount) =>{
let readline = require('readline');
let rl = readline.createInterface(
        process.stdin, process.stdout);

rl.setPrompt(`Enter pin code `);
rl.prompt();
rl.on('line', (pin) => {
    if(pin == pinCode){ 
    console.log(`Ur pin: ${pin}`);
    }else{
        console.log("pin incorrect")
        
    }
    rl.close();
});
    if( balance > amount && rl === pinCode){
        balance -= amount;
        console.log(`You withdraw ${amount}.Your balance is ${balance}`);
    }
}
cashWithdrawal1(30);

