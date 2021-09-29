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

const cashWithdrawal = (amount,pin) =>{
    if(pin== pinCode && balance > amount){
        balance -= amount;
        console.log(`You have withdrawn ${amount} . Balance: ${balance}`);
    }else if (pin !== pinCode){
        console.log(`${pin} - pin is not correct.`);
    }else if(amount > balance){
        console.log(`${amount} is bigger then your balance.`)
    }
}
cashWithdrawal(30,1234);
cashWithdrawal(3,2222);
cashWithdrawal(330000,1234);

// const cashWithdrawal1 = (amount) =>{
// let readline = require('readline');
// let rl = readline.createInterface(
//         process.stdin, process.stdout);

// rl.setPrompt(`Enter pin code `);
// rl.prompt();
// rl.on('line', (pin) => {
//     if(pin == pinCode){ 
//     console.log(`Ur pin: ${pin}`);
//     }else{
//         console.log("pin incorrect")
        
//     }
//     rl.close();
// });
//     if( balance > amount && rl === pinCode){
//         balance -= amount;
//         console.log(`You withdraw ${amount}.Your balance is ${balance}`);
//     }
// }
// cashWithdrawal1(30);
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
