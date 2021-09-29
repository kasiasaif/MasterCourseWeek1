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
for (let i = 0; i <=9; i++) {
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
            console.log("Bob and Craig have same followers :", bobsFollowers[i])
        }
    }
    
}