// const cofe = {
//     name: "whiteship",
//     seatingCapacity: 100,
//     hasSpecialOffers: true,
//     drinks:[
//         "Cappucino",
//         "Latte",
//         "Filter coffe",
//         "Tea",
//         "Hot chocolate"
//     ]
// };

// const person = {
//     name: "Kasia",
//     age: 34,
// }

// console.log(person.age);
// console.log(person["name"]);

// let offer = "none";
// let time = 0900;

// const cafe = {
//     name: "Whitesheep",
//     seatingCapacity: 100,
//     hasSpecialOffers: true,
//     drinks: [
//     "Cappucino",
//     "Latte",
//     "Filter Coffee",
//     "Tea",
//     "Hot Chocolate"
//     ],
//     breakfastOffer: "Free croissant with coffee",
//     lunchOffer: "Free drink with surprisingly priced sandwich",
//     noOffer: "Sorry no offer"
// };
// if (time < 1100){
//     offer = cafe.breakfastOffer;
//     console.log(cafe.breakfastOffer);
// }else if (time < 1500){
//     offer= cafe.lunchOffer
//     console.log(cafe.lunchOffer);

// }
// let day = "Saturday";
// let alarm = "";

// const alarmSys = {
//     weekendAlarm : "no alarm needed",
//     weekdayAlarm : "get up at 7"
// };
// if(day=== "Saturday" || day === "Sunday"){
//     alarm = alarmSys.weekendAlarm;
//     console.log(`${alarm}`)
// }else{
//     alarm = alarmSys.weekdayAlarm;
//     console.log(`${alarm}`)
// };
// cafe.biscuites= ["Shortbread", "Rich Tea"];
// console.log(cafe.biscuits);

let offer = "none";
let time = 0900;

const cafe = {
    name: "Whitesheep",
    seatingCapacity: 100,
    hasSpecialOffers: true,
    drinks: [
    "Cappucino",
    "Latte",
    "Filter Coffee",
    "Tea",
    "Hot Chocolate"
    ],
    breakfastOffer: "Free croissant with coffee",
    lunchOffer: "Free drink with surprisingly priced sandwich",
    noOffer: "Sorry no offer",

    openCafe(){
        if (this.hasSpecialOffers){
        return "Time for special offer!";}
    },
    closeCafe(){
        return "We are closed, come back tomorrow.";
    }
}
console.log(cafe.openCafe());
console.log("--------------activity 1------------------")
const person = {
    name: "Kasia",
    age: 34,

    sayHello(){
        return console.log(`Hello my name is ${this.name}`)
    }
}
person.sayHello();
console.log("--------------activity 2------------------")

const pet = {
    name : "Blur",
    typeOfPet: "cat",
    age : 3,
    colour : "gray",

    eat(){
        return console.log(`${this.name} is eating snack`)
    },
    drink(){
        return console.log(`${this.name} is drinking milk`)
    }}

    pet.eat();
    pet.drink();
    console.log("--------------activity 3------------------")

    const coffeeShop = {
        branch : "Manchester",
        drinksWithPrices : [
            ["Latte", "Mocha","WhiteFlat"],
            [3.20 , 3.05 , 4,20]
        ],
        foodWithPrices : [
            ["Salad", "Panini", "Soup"],
            [5.25, 1.99 , 3.20]
        ], 

        foodOrder(){
            return console.log("You ordered :" ,this.foodWithPrices[0][0],this.foodWithPrices[1][0]," and ", this.foodWithPrices[0][1] ,this.foodWithPrices[1][1],"with total coast: ", this.foodWithPrices[1][0] + this.foodWithPrices[1][1] )
        },
        drinkOrder(){
            return console.log("You ordered :" ,this.drinksWithPrices[0][0],this.drinksWithPrices[1][0]," and ",this.drinksWithPrices[0][1], this.drinksWithPrices[1][1],"with total coast: ",this.drinksWithPrices[1][0] + this.drinksWithPrices[1][1] )
        }}
    coffeeShop.foodOrder();
    coffeeShop.drinkOrder();