const users = ["Abdullah", "Ahmed", "Hasnain", "Admin","Tayyeb", "Javed"];


for (let i = 0; i < users.length; i++) {
  if (users[i] == "Admin") {
    console.log("Hello admin, would you like to see a status report?");
  } else {
    console.log(`Hello ${users[i]}, thank you for logging in again.`);
  }
}