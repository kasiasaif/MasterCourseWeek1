// let coffeeOrder=[
//     "Alex-Cortado",
//     "Ben- Cortado",
//     "Charlie- Whatever's new",
// ];
// console.log(coffeeOrder);
// console.log(coffeeOrder[2])
// coffeeOrder[1]= "Ann - Vanilla late"
// console.log(coffeeOrder);
// console.log(coffeeOrder.length);
// coffeeOrder.push("Chris= Mocha");
// console.log(coffeeOrder);
// coffeeOrder.pop();
// console.log(coffeeOrder);
// console.log("------------------acivity 1-------------------")

// // favSongs.push("Other - Song","Any - Song")
// // console.log(favSongs)
// // favSongs.pop()
// // console.log(favSongs)
// // favSongs.splice(1,"Some some")
// // console.log(favSongs)
// // favSongs.unshift(2,3)
// // console.log(favSongs)
// // favSongs.shift()
// // console.log(favSongs)
// let favDrink = [
//     "Coke",
//     "Fanta",
//     "Tonic",
//     "Red Bull"
// ]
// for(let i = 0; i <favDrink.length; i ++){
//     console.log(favDrink[i])
// }
// console.log("    ")
// for(let i = favDrink.length - 1; i >=0; i --){
//     console.log(favDrink[i])
// }
// let multiplesTwo = [];
// for (let i  = 0; i < 20; i ++){
//     if( i % 2 == 0){
//         multiplesTwo.push(i);
//     }
// }
// console.log(` Numbers divisible by 2, between 0 and 20 : ${multiplesTwo}`)

// let age = 15;
// while(age <18){
//     console.log("You are a child");
//     age ++;
// }
// console.log("You are adult!")

// let cards = [ "Diamond", "Spade", "Heart", "Club"];
// let currentCard = "Club";
// while (currentCard != "Spade"){
//     console.log(currentCard);
//     currentCard = cards[Math.floor(Math.random()*4)];
// }
// console.log(currentCard);
console.log("----------------- activity 1 ---------------------------")
let favFilms = [
    "Film 1",
    "Film 2",
    "Film 3",
    "Film 4",
    "Film 5"
]
favFilms.push("Film 6", "Film 7");
console.log(favFilms);

for (let i = 0; i < favFilms.length; i++) {
    console.log(favFilms[i]);
    
}
console.log("----------------- activity 2 ---------------------------")
for (let i = 0; i < 6; i++) {
    console.log(Math.floor(Math.random()*50));  
}
console.log("----------------- activity 3 ---------------------------")
for (let i = 0; i < 10; i++) {
    console.log (i);  
}
console.log("reverse")
for (let i = 9; i >= 0; i--) {
    console.log (i);  
}
console.log("----------------- activity 4 ---------------------------")
let films = [
    "Film 1",
    "Film 2",
    "Ghostbusters",
    "Film 4",
]
for (let i = 0; i < 1; i++) {
    if( films[2]=="Ghostbusters"){
        console.log("Yeah")
    }else{
        console.log("We want Ghostbusters!")
    } 
}
console.log("----------------- activity 5 ---------------------------")



for (let i = 0; i < 6; i++) {
    let num = (Math.floor(Math.random()*30));
    if (num % 7 == 0){
        console.log(`${num} is divisible by 7`)
    }else{
        console.log(`${num} is not divisible by 7`)
    }

}
console.log("----------------- activity 6 ---------------------------")

let bobsFollowers = [
    "Andy",
    "Cindy",
    "John",
    "Luis"
]
let craigsFollowers = [
    "Linda",
    "Josh",
    "John",
    "Luis"
]
for (let i = 0; i < bobsFollowers.length; i++) {
    for (let j = 0; j < craigsFollowers.length; j++) {
        if(bobsFollowers[i]==craigsFollowers[j] ){
            console.log(bobsFollowers[i], craigsFollowers[j])
        }
    }
    
}
console.log("----------------- activity 6 ---------------------------")
