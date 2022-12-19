// conditional statement: If statement 

// Decision Tree 
// Rock Paper Sizzer game ::
console.log('Hello world');
if(playerOne === computer){
    // tie game
} else if (playerOne === 'rock'){
    if(computer === 'paper'){
        // computer wins
    } else {
        // playerOne wins 
    }
} else if (playerOne === 'paper'){
    if(computer === 'scissors'){
        // computer wins
    } else {
        // playerOne wins 
    }
} else if  (playerOne === 'scissors'){
    if(computer === 'rock'){
        // computer wins
    } else {
        // playerOne wins 
    }
}