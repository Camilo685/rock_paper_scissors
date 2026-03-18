 let getRandomInt = (max) => Math.floor(Math.random() * max);
 let getComputerChoice = (randomN) => (randomN == 0) ? "rock" : (randomN == 1) ? "paper" : "scissor";
 let getHumanChoice = () => prompt("Rock, paper or scissors?", "null");

 let keepPlaying = true;
 let score = [0, 0, 0];
 let scoreMessage = (scre) => `Current score: Wins = ${scre[0]}, Ties = ${scre[1]}, Loses = ${scre[2]}`;
 while (keepPlaying){
    let choice = getHumanChoice();
    if (choice) {
        if (choice != "rock" && choice != "paper" && choice != "scissor") {
            console.log("Invalid option");
        } else {
            let computerChoice = getComputerChoice(getRandomInt(3));
            if (computerChoice == choice){
                console.log("Tie!");
                score[1] += 1;
            } else if (computerChoice == "rock") {
                if (choice == "paper") {
                    console.log("Win!");
                    score[0] += 1;
                } else {
                    console.log("Lose!");
                    score[2] += 1;
                }
            } else if (computerChoice == "paper") {
                if (choice == "rock") {
                    console.log("Lose!");
                    score[2] += 1;
                } else {
                    console.log("Win!");
                    score[0] += 1;
                }
            } else {
                if (choice == "paper") {
                    console.log("Lose!");
                    score[2] += 1;
                } else {
                    console.log("Win!");
                    score[0] += 1;
                }
            }
            console.log(scoreMessage(score));
        }
    } else {
        keepPlaying = false;
        console.log("Thanks for playing! " + scoreMessage(score).replace("Current", "Final"));
    }
 }