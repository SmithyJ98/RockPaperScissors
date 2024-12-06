//Prompt the user when they open the page if the want to start the game. DONE
//Create a function to start the game DONE
//Prompt asking the user for their name DONE
//Prompt the user to pick from rock paper and scissors DONE
//Generate a random choice for the computer to pick DONE
//Compare the users choice with the computers choice DONE
//Alert the results of each choice and the result of the match DONE
//and show the new point total of the user and the computer DONE
//prompt if they want to play again from the RPS choice DONE

//Potential list of functions
//prompt()
//alert()
//Math.floor Math.random
//get (variable)
//playGame playRound
//comparison

// list of variables
let userChoice;
let computerChoice;
let userName;
let userScore = 0;
let computerScore = 0;
let roundResult;
let playAgain;
let roundNumber = 0;
let leaverMessageChoice;


//Pop-up to start the game
console.log("%cDo you want to play Rock, Paper, Scissors?","color: green; font-size: 20px; font-weight: bold");
let playGame = confirm("Do you want to play Rock, Paper, Scissors?");
 if (!playGame) {
     alert("Sorry to see you go!");
     exit;
 } else {
     askName();
}
console.log(`%cHi, ${userName}!`, "color: cyan; font-size: 16px; font-weight: bold")

//Get the users name and store
function askName() {
    userName = prompt("What is your name?", "Delete this and write name or something fun!");
     if (userName === null || userName === "") {
         askName();
     }
    return userName;

}

// Get the userChoice and stores
function getUserChoice() {
    userChoice = prompt("What do you choose: rock, paper or scissors?");
//Limits input to only rock paper or scissors
    if ((userChoice != "rock")&& (userChoice != "paper") && (userChoice != "scissors") ){
        console.log("%cPlease type either 'rock', 'paper' or 'scissors.","color: red; font-size: 16px; font-weight: bold" )
        getUserChoice();
    } 
    return userChoice;
}

//geenrate random number range and applies to computer choice variable
function getComputerChoice() {
    const options = ["rock", "paper", "scissors"];    
    //random number gen, apply array choice based of number
    computerChoice = options[Math.floor((Math.random() * 3))];

    return computerChoice;
}

//Collects both choices and compares for result. Tracks and changes user and computer score
function playRound() {
    //alert("Please type either rock, paper or scissors");
    getUserChoice();
    getComputerChoice();
    if (userChoice === computerChoice) {
        roundResult = "draw";
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") || 
        (userChoice === "paper" && computerChoice === "rock") || 
        (userChoice === "scissors" && computerChoice === "paper")) 
    {
        roundResult = "win";
        userScore++;
    } else if (
        (userChoice === "rock" && computerChoice === "paper") || 
        (userChoice === "paper" && computerChoice === "scissors") || 
        (userChoice === "scissors" && computerChoice === "rock")) 
    {
        roundResult = "lose";
        computerScore++;
    }
//tracks and increases round number
    roundNumber++
}  

//Pop-up message showing the user and computer choices for the round, the round result and current scores
function publishResult() {
    alert(`Computer: ${computerScore} ${userName}: ${userScore} \n
            ${userName} picked ${userChoice}. Computer picked ${computerChoice}.\n 
            You ${roundResult}!`)
             console.log(`%cRound number - ${roundNumber}\n %c${userName} score:${userScore}\n %cComputer score:${computerScore}`,
                        "color: pink; font-size: 16px; font-weight: bold",
                        "color: magenta; font-size: 16px; font-weight: bold",
                        "color: magenta; font-size: 16px; font-weight: bold"
             );
}

//Picks from 3 random leaver messages
function randomLeaverMessage() {
    const leaverMessages = ["Booooooooo! Live a little...", "Thank you for playing our game", "See you next time!"]; 
    //random number gen, apply array choice based of number
    leaverMessageChoice = leaverMessages[Math.floor((Math.random() * leaverMessages.length))];
    return leaverMessageChoice;
}

//Used to loop the round if the user want to play again
function fullGame() {
    playRound();
    publishResult();
    restartGame();
    }

//Gives user option to play again or quit
function restartGame() {
    playAgain = confirm("Do you want to play again?");
    if (playAgain === true) {
        fullGame()
    } else {
        alert(randomLeaverMessage());
    }
}

//Call to start the first round of the game
fullGame() 


//If we were to do more, we looked into added audio. Below is an example we found of how to potentially do this
// function beep() {
//     var snd = new Audio("");  
//     snd.play();
// }
// beep();