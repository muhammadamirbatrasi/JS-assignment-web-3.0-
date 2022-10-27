const current_users = ["Abdullah", "Ahmed", "Hasnain", "ADMIN","Tayyeb", "Javed"];
const new_users = ["Abdullah", "Ahmed", "Hasnain", "Admin","Tayyeb", "Tahir"];

new_users.forEach(name => {
  if(current_users.includes(name)){
    console.log(`Use different user name`);
  }else{
    console.log(`Username ${name} is available`);
  }
})