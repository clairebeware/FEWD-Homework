

// let truliaCards = document.getElementsByClassName("trulia-grid-item");



document.addEventListener('DOMContentLoaded', function(event) {

// Toggle the navigation





  let eachGrid = document.querySelectorAll("article.trulia-grid-item");
  // Loop through all the cards
  eachGrid.forEach((gridItem) => {
      // Add a click listener on each card
    gridItem.addEventListener("click", function(){
      // Remove the featured class
      for(var i = 0; i < eachGrid.length; i++){
        eachGrid[i].classList.remove("trulia-featured-grid-item");
      }
      // Add the featured class on the one clicked on
      this.classList.add("trulia-featured-grid-item");
    })
  })
});  



