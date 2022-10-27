const make_shirt = (size, message) => {
    if(size === 'L' || size === 'M'){
        console.log("I love Javascript");
    }else{
        console.log(`${size} size shirt with message ${message} on it`);
    }
}

make_shirt('L','Good man');
make_shirt('M','Good man');
make_shirt('XL','Good man');
make_shirt('XXL','Good man');
make_shirt('S','Good man');