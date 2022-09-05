const computerScore = document.getElementByID("computer-score");
const userScore = document.getElementByID("user-score");
const computerLose = document.getElementByID("computer-lose");
const userLose = document.etElementByID("user-lose");
const computerButton = document.getElementsByClassName("computer-buttom");
const heroImage = dpcument.getElementByID("hero-image");
const buttons = document.getElementsByClassName("user-button")
const choices = ["rock","paper","scissors"];

for ( let button of buttons){
    button.addEventlistener("click", function(){
        let userChoice = this.getAttribute("data-choice");
        playGame(userChoice);
    })
    
}


function playGame(userChoice) {

    let computerChoice = Math.floor(Math.random() * 3);
    let result = checkWinner(choices[computerChoice], choices[userChoice])

    updateScores(result);

}






function updateScores()

function computerChoice()

function imageChange()

function scoreUpdate()

