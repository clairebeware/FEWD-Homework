/*
 * DOTS: Level Three
 *
 */
let score = 0;
let arenaEl = document.querySelector('.js-arena');
let scoreEl = document.querySelector('.js-score');

function declareWinner() {
    document.body.classList.add('game-over');3
  }
  
  //function for adding points
  //if/else to keep the score 4 digits and to declare the user wins
  //parameter numPts defined in the event listener according to which ball is clicked
  function addPoints(numPts) {
    score += numPts;
    if(score <= 95){
      scoreEl.innerHTML = "00" + score.toString();
    } else {
      scoreEl.innerHTML = "0" + score.toString();
      declareWinner();
    }
  }

  //event listener
  //goes through each element in js-arena and if it has a class of js-ball it adds an event listener to it
  //if the instance of js-ball has a data-increment == 20, gives 20 pts
  //same for if increment == 10 or == 5, gives 10 or 5 pts
  arenaEl.addEventListener("click", function(event){
  if(event.target.classList.contains("js-ball")){
   if(event.target.dataset.increment == "20"){
    addPoints(20);
   } else if(event.target.dataset.increment == "10"){
    addPoints(10);
   } else {
    addPoints(5);
   }
  }
})
