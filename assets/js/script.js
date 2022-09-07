const buttons = document.getElementsByClassName("user-button");
const computerButton = document.getElementsByClassName("computer-button")
const playerScore = document.getElementById("user-score");
const computerScore = document.getElementById("computer-score");
const computerImage = document.getElementById("hero-image-computer");

const choices = ["rock","paper","scissors"];

for (let button of buttons) {
    button.addEventListener("click", function() {
        let playerChoice = this.getAttribute("data-choice");
        playGame(playerChoice);
        console.log(playerChoice)
    });
    
}

function playGame(playerChoice) {
    
    let computerChoice = Math.floor(Math.random() * 3);

    


    computerImage.src = `assets/images/${choices[computerChoice]}.png`;
    computerImage.alt = choices[computerChoice];


        
}

    let result = checkWinner(choices[computerChoice], choices[playerChoice]);
    


    updateScores(result)




function updateScores() {

}

function checkWinner() {
    
    
    

}


