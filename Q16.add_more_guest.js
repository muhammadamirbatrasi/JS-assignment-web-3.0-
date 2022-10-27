// add more Guests

console.log("Hey Friends I found a bigger space for the dinner, lets invite some more friends!");
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

