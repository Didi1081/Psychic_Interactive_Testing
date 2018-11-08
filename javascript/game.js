
    // These are the choices that the player has to guess. 
    //  <link rel="stylesheet" type="text/css" media="screen" href="main.css"/>
    var computerGuesses =  ["d","i","d","i"];


    // This is where the wins, losses and scoring are
    var wins = 0;
    var losses = 0;
    var guessesLeft = 10;
    var wrongGuess= [];

// This will be the reset of the game, it makes it start to 10 again, but doesn't clear out the 
    
    function resetGame() {
    guessesLeft = 10;
    wrongGuess = [];
    computerGuess = "";
    }

    

    // This is where the references will be.
    var directionsHere = document.getElementById("directions");
    var userLettersHere = document.getElementById("userChooses");
    var computerChoiceHere = document.getElementById("computerChooses");
    var winsText = document.getElementById("winspara");
    var lossesText = document.getElementById("lossespara");
    var guessesText = document.getElementById("numberOfGuessesLeft");
    var computerGuess;
    var userGuess;
    //var guessesLeftText = document.getElementByID("numberOfGuessesLeft" + guessesLeft);
   
    
    //The user needs to press a key and it needs to be detected
    document.onkeyup = function (event) { if( event.keyCode >= 65 && event.keyCode <= 90){

      var userGuess = event.key;
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