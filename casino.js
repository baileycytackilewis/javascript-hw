var prompt = require('prompt-sync')();

const playerBet = prompt('How much would you like to bet? ');
const answer = prompt("Heads or Tails? [H/T] ");

    function coinFlip(result) {
    const flip = (Math.random() <= 0.5 ? "H" : "T");
    return result === flip ? true : false;
    }
console.log(coinFlip(answer));
    let i = 10;

    if(i > 0){
    while(true) {
    function win(i, playerBet) {
        return i + playerBet;
        };
        console.log(`Congrats! Your new balance is $${win(i + playerBet)}.`);
    }
    
    
    }else {
        
    function lose(i, playerBet) {
        return i - playerBet
    }
    console.log(`Your answer was incorrect. Your new balance is $${lose(i - playerBet)}`);
    }



