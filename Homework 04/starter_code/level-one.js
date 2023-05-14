/*
 * DOTS: Level One
 *
 */
let score = 0;
let ballEl = document.querySelector('.js-ball');
let scoreEl = document.querySelector('.js-score');

//click on ball, points get added to the score, which is shown at the top
//once the score has reached a certain number, user wins

function declareWinner() {
  document.body.classList.add('game-over');
}

//function for adding points
//if/else to keep the score 4 digits and to declare the user wins
function addPoints() {
  score += 10;
  if(score <= 90){
    scoreEl.innerHTML = "00" + score.toString();
  } else {
    scoreEl.innerHTML = "0" + score.toString();
    declareWinner();
  }
}

//event listener
ballEl.addEventListener("click", addPoints);