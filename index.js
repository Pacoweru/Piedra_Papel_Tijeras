

const options = ["piedra", "papel", "tijeras"];

function getComputerChoice(){
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}

function checkWinner(playerSelection, computerSelection){
    if(playerSelection == computerSelection){
        return "Empate";
    }
    else if(
        (playerSelection == "piedra" && computerSelection == "tijeras") ||
        (playerSelection == "papel" && computerSelection == "piedra") ||
        (playerSelection == "tijeras" && computerSelection == "papel")
        ){
        return "Player";
    }
    else{
        return "Computer"
    }
}

function playRound(playerSelection, computerSelection){
const result = checkWinner(playerSelection, computerSelection);
if(result == "Empate"){
    return "Es un empate!"
}
else if(result == "Player"){
    return `Has ganado! ${playerSelection} gana a ${computerSelection}`
}
else{
    return `Has perdido! ${computerSelection} gana a ${playerSelection}`
}
}

function getPlayerChoice(){
    let validatedInput = false
    while(validatedInput == false){
        const choice = prompt("piedra papel tijeras");
        if(choice == null){
            continue;
        }
        const choiceInLower = choice.toLocaleLowerCase();
        if(options.includes(choiceInLower)){
            validatedInput = true;
            return choiceInLower;
        }
    }
}

function game(){
    let scorePlayer = 0;
    let scoreComputer = 0;
    console.log("Welcome!")
    for (let i = 0; i < 5; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection)); 
        console.log("=================");
        if(checkWinner(playerSelection, computerSelection) == "Player"){
            scorePlayer++;
        }
        else if(checkWinner(playerSelection, computerSelection) == "Computer")
            scoreComputer++;
     }
     console.log("Game Over")
     if(scorePlayer > scoreComputer ){
        console.log("El jugador es el ganador!");
     }
     else if(scorePlayer < scoreComputer){
        console.log("El ordenador es el ganador!");
     }
     else{
        console.log("Es un empate!");
     }

}

game()
