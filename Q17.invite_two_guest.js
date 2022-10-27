// invite only two Guest

let guests = ["Abdullah", "Mustafa", "Hasnain", "Tayyeb", "Javed"];
function invitation(){
    guests.forEach(guest => (
        console.log(`Hi, ${guest}, You are invited for dinner at my home.`)
    ));
}

guests.unshift("Bilal");
guests.splice(3,0,"Waseem");
guests.push("Waqas")
console.log(guests);
invitation();

console.log("Sorry firends! I can only invite 2 people");

let totalGuests = guests.length -1;

console.log(totalGuests);
for(let i= totalGuests; i > 1; i--){
    console.log(`Sorry ${guests[i]}, you are not invited!`);
    guests.pop();
}

console.log(guests);

invitation();

guests.length = 0;

console.log(guests);