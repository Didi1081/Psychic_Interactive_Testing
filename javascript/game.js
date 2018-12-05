
    // These are the choices that the player has to guess. 
    //  <link rel="stylesheet" type="text/css" media="screen" href="main.css"/>
    const computerGuesses =  ["d","i","d","i"];


    // This is where the wins, losses and scoring are
    let wins = 0;
    let losses = 0;
    let guessesLeft = 10;
    let wrongGuess= [];

// This will be the reset of the game, it makes it start to 10 again, but doesn't clear out the 
    
    function resetGame() {
    guessesLeft = 10;
    wrongGuess = [];
    computerGuess = "";
    }

    

    // This is where the references will be.
    let directionsHere = document.getElementById("directions");
    let userLettersHere = document.getElementById("userChooses");
    let computerChoiceHere = document.getElementById("computerChooses");
    let winsText = document.getElementById("winspara");
    let lossesText = document.getElementById("lossespara");
    let guessesText = document.getElementById("numberOfGuessesLeft");
    let computerGuess;
    let userGuess;
    //let guessesLeftText = document.getElementByID("numberOfGuessesLeft" + guessesLeft);
   
    
    //The user needs to press a key and it needs to be detected
    document.onkeyup = function (event) { if( event.keyCode >= 65 && event.keyCode <= 90){

      let userGuess = event.key;
      computerGuess = computerGuesses[Math.floor(Math.random() * computerGuesses.length)];

      

      if (userGuess){guessesLeft--}

      if (guessesLeft===0){resetGame()}

      if (userGuess === computerGuess) {
        wins++;
        resetGame();
        
      } else {
        losses++;
        wrongGuess.push(userGuess);
      }
      document.getElementById("wrongGuess").innerHTML = " Wrong Guess: " + wrongGuess;
// ----------
// 
    
      directionsHere.textContent = "";

      userLettersHere.innerHTML = "You chose: " + userGuess;
      console.log(computerGuess)
      //computerChoiceHere.innerHTML = "The computer chose: " + computerGuess;
      winsText.innerHTML = "Wins: " + wins;
      lossesText.innerHTML = "Losses: " + losses;
      guessesText.innerHTML = "" + guessesLeft;

    }
  }