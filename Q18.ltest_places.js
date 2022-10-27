// Latest five Places

let places = ['Sawat', 'Kalam', "Neelum", "Basham", "chitral"];

//origial array
console.log(places);

let splicedplaces = places.slice();

// sorted alphabetically
let sortedAlphabetically = splicedplaces.sort();
console.log(sortedAlphabetically);

//origial array
console.log(places);

// alphabetically reversed
let reversed = splicedplaces.reverse();
console.log(reversed);

//origial array
console.log(places);

// reversing original array
places.reverse();
console.log(places);
places.reverse();
console.log(places);

// sorting original array alphabetically

places.sort();
console.log(places);

// reversing original sorted array
places.reverse();
console.log(places);