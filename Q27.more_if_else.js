const checkColors = (alien_color) => {
    if (alien_color === "green"){
        console.log("player just earned 5 points.")
    }else if(alien_color === "yellow"){
        console.log("player just earned 10 points.")
    }else if(alien_color === "red"){
        console.log("player just earned 15 points.")
    }
}

checkColors('green')
checkColors('yellow')
checkColors('red')