var prompt = require('prompt-sync')();


let balance = 10

    function coinFlip(result) {
    const flip = (Math.random() <= 0.5 ? "H" : "T");
    return result === flip ? true : false;
    }
console.log(coinFlip(answer));

function winningBet(bet) {
    return balance += Number(bet)
}

function losingBet(bet) {
    return balance += Number(bet)
}

do{
    let bet = const playerBet = prompt('How much would you like to bet? ');
    
    if (balance < bet) {
        console.log();
        break;
    }
    console.log(`${bet}`)

    let flip = prompt("Heads or Tails? [H/T] ");

    if(coinFlip())

} while (balance > 0)


