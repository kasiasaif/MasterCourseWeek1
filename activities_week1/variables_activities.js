console.log("--------------------activity 1---------------------")

let name = "Mike";
let age = 20;
let favColour = "blue";
console.log(`His name is ${name}. He is ${age} years old. His fauvorite colour is ${favColour}.`);

name = "Ryan";
age = 34;
favColour = "red";
console.log(`His name is ${name}. He is ${age} years old. His fauvorite colour is ${favColour}.`);

console.log("--------------------activity 2---------------------");
let breakfast = "shake";
let lunch = "salad";
let dinner = "pasta";
console.log(`I ate on breakfast ${breakfast}, on lunch I will have ${lunch} and on dinner ${dinner}.`);

breakfast = "sandwich";
lunch = "spagetti";
dinner = "fish&chips";
console.log(`Tomorrow on breakfast I will eat ${breakfast}, on lunch ${lunch} and on dinner ${dinner}.`);
console.log("--------------------activity 3---------------------");
let today = new Date();
let birthDate = new Date(today.getFullYear(), 12,16);
if ( today.getMonth()==1 && today.getDay()>16){
birthDate.setFullYear(birthDate.getFullYear +1)}
var oneDay = 1000*60*60*24;
console.log(Math.ceil((birthDate.getTime()- today.getTime())/(oneDay))+ " days left to my birthday!")

let newYear = new Date(today.getFullYear(), 11,31);
if ( today.getMonth()==1 && today.getDay()>16){
newYear.setFullYear(newYear.getFullYear +1)}
console.log(Math.ceil((newYear.getTime()- today.getTime())/(oneDay))+ " to New Year!")
console.log("--------------------activity 4---------------------");
let space1 = "x";
let space2 = "o";
let space3 = "|";
let space4 = "--------------------  ";
let space5 = "  ";
let space6 = "     ";
let space7 = " ";

console.log(` ${space6}${space3}${space6}${space7}${space3}`)
console.log(`${space5}${space1}${space5} ${space3} ${space5}${space2}${space7}${space7}${space3}${space6}`)
console.log(` ${space6}${space3}${space6}${space7}${space3}`)
console.log(`${space4}`)
console.log(` ${space6}${space3}${space6}${space7}${space3}`)
console.log(`${space5}${space1} ${space5}${space3} ${space5}${space1}${space7}${space7}${space3}${space6}`)
console.log(` ${space6}${space3}${space6}${space7}${space3}`)
console.log(`${space4}`)
console.log(` ${space6}${space3}${space6}${space7}${space3}`)
console.log(`${space5}${space2}${space5} ${space3} ${space5}${space7}${space5}${space3}${space6}`)
console.log(` ${space6}${space3}${space6}${space7}${space3}`)
console.log("---------other way-----------------")
let s1 = "      |       |   ";
let s2 = "  x   |   o   |   ";
let s3 = "  x   |   x   |   ";
let s4 = "  o   |       |   ";
let s5 = "---------------------- "
console.log(`${s1}`)
console.log(`${s2}`)
console.log(`${s1}`)
console.log(`${s5}`)
console.log(`${s1}`)
console.log(`${s3}`)
console.log(`${s1}`)
console.log(`${s5}`)
console.log(`${s1}`)
console.log(`${s4}`)
console.log(`${s1}`)
