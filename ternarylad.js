// console.log('Hello World');

// Rock Paper scissor game using ternary operator

let playerOne = 'scissor';
let computer = 'paper';

let result = playerOne === computer? 'Tie Game'
:playerOne ==='rock'&&computer==='paper'? 'computer wins!'
:playerOne ==='paper'&&computer==='scissor'? 'computer wins!'
:playerOne ==='scissor'&&computer==='rock'? 'computer wins!'
:"playerOne wins!";

console.log(result);