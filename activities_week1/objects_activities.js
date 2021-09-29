console.log("--------------activity 1------------------")
const person = {
    name: "Kasia",
    age: 34,

    sayHello(){
        return console.log(`Hello my name is ${this.name}.`)
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
        return console.log(`${this.name} is eating snack.`)
    },
    drink(){
        return console.log(`${this.name} is drinking milk.`)
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
            return console.log("You ordered : " ,this.foodWithPrices[0][0],"£",this.foodWithPrices[1][0]," and ", this.foodWithPrices[0][1] ,"£",this.foodWithPrices[1][1],"with total coast: £", this.foodWithPrices[1][0] + this.foodWithPrices[1][1] )
        },
        drinkOrder(){
            return console.log("You ordered : " ,this.drinksWithPrices[0][0],"£",this.drinksWithPrices[1][0]," and ",this.drinksWithPrices[0][1], "£",this.drinksWithPrices[1][1],"with total coast: £",this.drinksWithPrices[1][0] + this.drinksWithPrices[1][1] )
        }}
    coffeeShop.foodOrder();
    coffeeShop.drinkOrder();