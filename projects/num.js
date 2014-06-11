function runScript(e) {
    if (e.keyCode == 13) {
        guessnum();
    }
}

  var lives = 3;
  var num = Math.floor((Math.random()*101)+1); 
  //var guess = document.forms['form1'].value;
  var guess = document.getElementById("guessNum");
  alert("Choose a number from 1 to 100, then click 'Enter' ");

function guessnum () {
  while (lives !== 0) {
    //guess = prompt("Choose a number from 1 to 100, then click 'OK' ");
    guess = parseInt(document.getElementById("guessNum").value);
      if (typeof(guess)!== "number") {
        alert("You must enter a number!");
        return;
      }
/*     else if (guess < num) {
        lives --;
          if (lives===0) {
            alert("No, your guess is too low. You have 0 remaining guesses. Game Over.");
          }
          else {
          alert("No, your guess is too low. Guess again! You have " + lives + " remaining guesses");
          }
          return;
        }
        else if (guess > num) {
          lives--;
          if (lives===0) {
            alert("No, your guess is too low. You have 0 remaining guesses. Game Over.");
          } else {
          alert("No, your guess is too high. Guess again! You have " + lives + " remaining guesses");
          }
          return;
        } 
*/
      else if (guess < num) {
        lives --;
        switch(lives) {
          case (0):
            alert("No, your guess is too low. You have 0 remaining guesses. Game Over.");
            break;
          case (1):
            alert("No, your guess is too low. Guess again! You have " + lives + " remaining guess.");
            break;
          case (2): 
            alert("No, your guess is too low. Guess again! You have " + lives + " remaining guesses.");
            break;
          default:
            alert("There is something wrong with your input. Reload the page to restart the game.");
            break;
        }
        return;
      }
      else if (guess > num) {
        lives--;
        switch(lives) {
          case (0):
            alert("No, your guess is too high. You have 0 remaining guesses. Game Over.");
            break;
          case (1):
            alert("No, your guess is too high. Guess again! You have " + lives + " remaining guess.");
            break;
          case (2): 
            alert("No, your guess is too high. Guess again! You have " + lives + " remaining guesses.");
            break;
          default:
            alert("There is something wrong with your input. Reload the page to restart the game."); 
            break;
          } 
        return;
      }
             
        else if (guess === num) {
          alert("You're a winner!");
          lives = 0;
          return;
        }
        else {
          alert("you are doing something wrong");
          break;
        }
      }
}