let names = ["Abdullah", "Ahmed", "Hasnain","Tayyeb", "Javed"];

const show_magicians = (magicians) => {
  magicians.forEach(magician=> {
    console.log(magician)
  });
}

const make_great = () => {
  names.map(name => `Great ${name}`)
}

make_great();
show_magicians(names);