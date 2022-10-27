// Conditional

let car = 'subaru';
const guests = ["Abdullah", "Mustafa", "Hasnain", "Tayyeb", "Javed"];
const x1 = 5;
const x2 = 6;


console.log("Is car == 'subaru'? I predict True.")
console.log(car == 'subaru');

let match = "win"
console.log("Is match == 'win'? I predict True.")
console.log(match == "win");

let  fifa = "football"
console.log("Is fifa == 'football'? I predict True.")
console.log(fifa == "football");

let country = "pakistan" 
console.log("Is country == 'pakistan'? I predict True.")
console.log(country == "pakistan")

console.log("Is country == 'pakistan'? I predict false.")
console.log(country == "turkey");

console.log("Is fifa == 'football'? I predict false.")
console.log(fifa == 'cricket')

console.log("Is match == 'lose'? I predict false.")
console.log(match == 'win');

console.log("Is car == 'subaru'? I predict false.")
console.log(car == 'BMW');

console.log("Is car === 'subaru'? I predict false.")
console.log(car[5] === 'Ferrari');

console.log("Is car == 'subaru'? I predict false.")
console.log(car === 'Range Rover');


console.log("Is x1 == x2? I predict False.")
console.log(x1 === x2);

console.log("Is x1 !== x2? I predict True.")
console.log(x1 !== x2);

console.log("Is x1 > x2? I predict False.")
console.log(x1 > x2);

console.log("Is x1 < x2? I predict true.")
console.log(x1 < x2);

console.log("Is x1 >= x2? I predict False.")
console.log(x1 >= x2);

console.log("Is x1 <= x2? I predict true.")
console.log(x1 <= x2);

console.log("Is x1 < x2 or x1 == x2? I predict true.")
console.log(x1 < x2 || x1 === x2);

console.log("Is x1 < x2 and x1 == x2? I predict false.")
console.log(x1 < x2 && x1 === x2);

console.log("Is Ahmed in names? I predict false.")
console.log(guests.includes('Ahmed'));

console.log("Is Abdullah in names? I predict false.")
console.log(guests.includes('Abdullah'));