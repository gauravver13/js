// conditional statement :

// Switch Statement::
switch(Math.floor(Math.random()*3 + 1)) {
    case 1:
        console.log(1);
        break;
    case 2:
        console.log(2);
        break;
    case 3:
        console.log(3);
        break;
    default:
        console.log('no match');
}

let playerOne='scissor';
let computer='paper';

switch(playerOne){
    case computer:
        console.log('Tie Game');
        break;
    case 'rock':
        if(computer==='paper'){
            console.log('computer wins!');
        } else {
            console.log('playerOne wins!');
        }
        break;
    case 'paper':
        if(computer==='scissor'){
            console.log('computer wins!');
        } else {
            console.log('playerOne wins!');
        }   
        break;     
    case 'scissor':
        if(computer==='rock'){
            console.log('computer wins!');
        } else {
            console.log('playerOne wins!');
        } 
        break;
    default:
        console.log("Invalid move");

}