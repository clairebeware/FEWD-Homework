
//will be replaced with json file
var choices = ["choice 1", "choice 2", "choice 3", "choice 4"];



document.addEventListener('DOMContentLoaded', function(event) {
    //goes through the array of choices (for now), and adds them to the page as buttons
    for(i=0;i<choices.length;i++) {
        let newOption = document.createElement('button');
        // newOption.value = choices[i];
        newOption.innerText = choices[i];
        document.querySelector('#options-go-here').appendChild(newOption);
        newOption.classList.add("list-group-item");
        newOption.classList.add("list-group-item-action");
        newOption.classList.add("option");
        // document.querySelector('.option').addEventListener("click", function(){
        //     console.log('hello');
        // });
        // also add classlist for active
      };

      //creates an array of everything with the class option
      let optionsArray = document.querySelectorAll(".option");
      //adds eventlistener for each option
      optionsArray.forEach(function(eachOpt) {
          eachOpt.addEventListener("click", function(){
            let anyActive = document.getElementsByClassName("active");
            //removes all previous classes of active when a new one is clicked
            for(j = 0; j < anyActive.length; j++){
                anyActive[j].classList.remove("active");
            };
            //adds the active class to the new clicked option
            eachOpt.classList.add("active");
          });
        });
    
    //eventlistener for the back button
    let backBtn = document.querySelector(".back");
    backBtn.addEventListener("click", function(e){
        //create a condition where if it's the first page it will take you back to index.html
        e.preventDefault();
        //change out the console.log for function later
        console.log("back");
    });

    //eventlistener for the next button
    let nextBtn = document.querySelector(".next");
    nextBtn.addEventListener("click", function(e){
        //create a condition where the next button would lead the user to the credits page
        if(1 == 2){
            nextBtn.setAttribute("href", "credits.html");
        } else {
            e.preventDefault();
        };
        //change out the console.log for function later
        console.log("next");
    });


    // console.log('hey');
    // let AllOptions = document.querySelectorAll('#option');
    // document.querySelector('.option').addEventListener('click', function(){
    //     console.log('hello');
    // });
});