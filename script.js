const randomDamage = () => Math.floor(Math.random() * 11)

// console.log(randomDamage())

const chooseOption = (opt1, opt2) => {
    let randNum = Math.floor(Math.random() * 2);
    return randNum === 0 ? opt1 : opt2
}

// console.log(chooseOption("word", "um"))

const attackPlayer = function(health) {
    return health - randomDamage();
}

const logHealth = (player, health) => { 
    console.log(`${player} health: ${health}`)
}

// logHealth('Henry', '90')

const logDeath = (winner, loser) => { 
    console.log(`${winner} defeated ${loser}`)
}

// logDeath('Henry', 'Louise')

const isDead = (health) => { 
    return (health <= 0)
}

function fight(player1, player2, player1Health, player2Health) {
    while (true) {
        let attacker = chooseOption(player1, player2); 
        if (attacker === player1) {
        player2Health = attackPlayer(player2Health);
        logHealth(player2, player2Health);
        let death = isDead(player2Health); 
        if (death === true) {
        logDeath(player1, player2);
        break; 
        }  
    } else {
        player1Health = attackPlayer(player1Health);
        logHealth(player1, player1Health);
        let death = isDead(player1Health);
        if (death === true) {
        logDeath(player2, player1);
        break;
        }
    } 
}
}

fight('Henry', 'Louise', 100, 100)