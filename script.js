let options = document.querySelectorAll("button");
let winP = document.querySelector(".win-header").querySelector("p");
let tieP = document.querySelector(".tie-header").querySelector("p");
let loseP = document.querySelector(".lose-header").querySelector("p");
let resultsP = document.querySelector(".results-container").querySelector("p");

let getRandomInt = (max) => Math.floor(Math.random() * max);

options.forEach((button, humanChoice) => button.addEventListener('click', () => {
    let computerChoice = getRandomInt(3);

    if (computerChoice == humanChoice){
        resultsP.textContent = "It's a tie!";
        tieP.textContent = +tieP.textContent + 1;
    } else if (computerChoice == 0) {
        if (humanChoice == 1) {
            resultsP.textContent = "Paper beats rock, you win!";
            winP.textContent = +winP.textContent + 1;
        } else {
            resultsP.textContent = "Rock beats scissors, you lose!";
            loseP.textContent = +loseP.textContent + 1;
        }
    } else if (computerChoice == 1) {
        if (humanChoice == 0) {
            resultsP.textContent = "Paper beats rock, you lose!";
            loseP.textContent = +loseP.textContent + 1;
        } else {
            resultsP.textContent = "Scissors beats paper, you win!";
            winP.textContent = +winP.textContent + 1;
        }
    } else {
        if (humanChoice == 1) {
            resultsP.textContent = "Scissors beats paper, you lose!";
            loseP.textContent = +loseP.textContent + 1;
        } else {
            resultsP.textContent = "Rock beats scissors, you win!";
            winP.textContent = +winP.textContent + 1;
        }
    }
}));