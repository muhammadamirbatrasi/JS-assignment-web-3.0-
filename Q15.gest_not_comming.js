// Not comming Guest
let guests = ["Abdullah", "Ahmed", "Hasnain", "Tayyeb", "Javed"];
const friendNotComing = "Ahmed";
console.log(guests);

guests.map((guest, i) => {
        if(guest === friendNotComing){
            guests.splice(i,1, "Mustafa");
            console.log(`Hi, ${guests[i]}, You are invited for dinner at my home.`);
        }else {
            console.log(`Hi, ${guest}, You are invited for dinner at my home.`);
        }

    });

console.log(guests);