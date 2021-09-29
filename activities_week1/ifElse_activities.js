console.log("----------------------activity 1---------------------------")
let age = 20;
let country = "UK";

if (age > 17 && country === "UK"){
    console.log("Yes, I can serve you.");
}else {
    console.log("Sorry, you arent old enough.");
}
console.log("----------------------activity 2---------------------------")
let topping = "fresh tomatoes";

switch(topping){
    case 'mushroom':
        console.log("add mushroom.");
        break;
    case 'pineapple':
        console.log("add pineapple.");
        break;
    case 'fresh tomatoes':
        console.log(`${topping}  is important ingredient for my pizza.`);
        break;
    case 'salami':
        console.log("add salami.");
        break;
    default:
        console.log("Sorry, no other topping.");
}
console.log("----------------------activity 3---------------------------")
let password = "thisispassword";
if ( password.length >= 8){
    console.log(password);
}else{
    console.log("Password is too short.");
}
let num = 15;
if( num % 3 == 0 || num % 5 == 0){
    console.log("This number is divisible by 3 or5.")
}else{
    console.log("This number is not divisible by 3 or 5.")
}
console.log("----------------------activity 4---------------------------")

let number = 15;

if( number % 3 == 0 && number % 5 == 0){
    console.log("fizz&&buzz");
}else if( number % 3 == 0){
    console.log("fizz");
}else if( number % 5 == 0){
    console.log("buzz");
}else{
    console.log(`${number}`)
    let num = 10

switch (true){
    case number%5 == 0:
        console.log("this number is divisible by 3 or 5")
        break;
    case number%3 == 0:
        console.log("this number is divisible by 3 or 5")
        break;
    default:
        console.log("this number is not divisible by 3 or 5")
}
}
console.log("_________________other way______________")
switch(true){
    case number % 3 == 0 && number % 5 == 0:
        console.log("fizz&buzz");
        break;
    case number % 5  == 0: 
        console.log("buzz");
        break;
    case number % 3 == 0:
        console.log("fizz");
        break;
    default:
        console.log("nthing");
}
console.log("----------------------activity 5---------------------------")
let string = "4004"; 
const len = string.length;  
    
for (let i = 0; i < len / 2; i++) {      
    if (string[i] !== string[len - 1 - i]) {  
        console.log('It is not a palindrome');  
        } else  console.log('It is a palindrome');


console.log("----------------------activity 6---------------------------")
let time = 7;
let placeOfWeek = "home";
let townOfHome = "Manchester";

if( time == 7){
    console.log(`At ${time} oclock I'm at ${placeOfWeek} in ${townOfHome}`)
}else if(time == 9 ){
    console.log(`At ${time} oclock and I'm at ${placeOfWeek} in ${townOfHome}`)
}else if(time == 12 ){
    console.log(`At ${time} pm and I'm  at ${placeOfWeek} in ${townOfHome}`)
}
console.log("----------------------activity 7---------------------------")
let longString = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshk";
console.log(longString.length -1)
console.log(longString[longString.length - 1 ])
console.log("----------------------activity 8---------------------------")
let word = "kasiak";
if(word[0] == word[word.length -1]){
    console.log(true)
}else{
    console.log(false)
}
console.log("----------------------activity 9---------------------------")
let num1 = 3;
let num2 = 3;
if ( (num1 + num2) % 2 == 0 ){
    console.log("Sum is even")
} else {
    console.log("Sum is not even")}}
