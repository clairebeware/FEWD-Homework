/*
 * DOTS: Level Two
 *
 */
let score = 0;
let arenaEl = document.querySelector('.js-arena');
let scoreEl = document.querySelector('.js-score');

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
  //goes through each element in js-arena and if it has a class of js-ball it adds an event listener to it
  arenaEl.addEventListener("click", function(event){
  if(event.target.classList.contains("js-ball")){
   addPoints();
  }
})