function displayTitle() {
    "use strict";
    
    window.alert("Welcome to the Rock, Paper, Scissors Game!");
}

function playGame() {
    "use strict";
    
    // Get a random number between 0 & 9
    const computerChoice = Math.floor(Math.random() * 10);
    const choice = window.prompt("Choose Rock (R), Paper (P) or Scissors (S):");

    const isRock = Boolean (computerChoice >= 0 && computerChoice <= 2);
    const isPaper = Boolean (computerChoice >= 3 && computerChoice <= 5);
    const isScissors = Boolean (computerChoice >= 6 && computerChoice <= 9);

    const isUserChoiceRock = Boolean (choice.toUpperCase() == "R" || choice.toLowerCase() == "rock");
    const isUserChoicePaper = Boolean (choice.toUpperCase() == "P" || choice.toLowerCase() == "paper");
    const isUserChoiceScissors = Boolean (choice.toUpperCase() == "S" || choice.toLowerCase() == "scissors");

    if (isRock) {
        //Result is Rocks

        if (isUserChoiceRock) {
            window.alert("It's a draw.");
        } else if (isUserChoicePaper) {
            window.alert("You win!");
        } else if (isUserChoiceScissors) {
            window.alert("You lose.");
        } else {
            window.alert("Invalid choice.");
        }
    } else if (isPaper) {
        //Result is Paper
        
        if (isUserChoicePaper) {
            window.alert("It's a draw.");
        } else if (isUserChoiceScissors) {
            window.alert("You win!");
        } else if (isUserChoiceRock) {
            window.alert("You lose.");
        } else {
            window.alert("Invalid choice.");
        }
    } else {
        // Result is Scissors

        if (isUserChoiceScissors) {
            window.alert("It's a draw.");
        } else if (isUserChoiceRock) {
            window.alert("You win!");
        } else if (isUserChoicePaper) {
            window.alert("You lose.");
        } else {
            window.alert("Invalid choice.")
        }
    }
}

function main() {
    "use strict";
    
    displayTitle();
    var playagain = "y";
    while (playagain === "y") {
        playGame();
        playagain = window.prompt("Do you want to play again (y/n)?");
    }
    window.alert("Thanks for playing!");
}

main();