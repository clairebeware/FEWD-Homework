
var inventory = ["cool rock", "sword"];

//figure out how to change current page!
var currentPage = storyChoices.page1;

var choices = currentPage.choices;

document.addEventListener('DOMContentLoaded', function(event) {
    //adds the .explanation text to the paragraph on the page
    let explanation = currentPage.text;
    let explanationText = document.querySelector("#explanation");
    explanationText.innerText = explanation;

    function pageReload() {
        //goes through the array of choices (for now), and adds them to the page as buttons
        for(i=0;i<choices.length;i++) {
            let newOption = document.createElement('button');
            newOption.value = choices[i].next;
            // console.log(choices[i].next);
            newOption.innerText = choices[i].text;
            document.querySelector('#options-go-here').appendChild(newOption);
            newOption.classList.add("list-group-item");
            newOption.classList.add("list-group-item-action");
            newOption.classList.add("option");
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
    
        //if story.newItem == true, add new item?
        //create inventory
        for(k=0;k<inventory.length;k++) {
            let newitem = document.createElement('li');
            newitem.value = inventory[k];
            newitem.innerText = inventory[k];
            document.querySelector('#items-go-here').appendChild(newitem);
            newitem.classList.add("list-group-item");
            // newitem.classList.add("item");
          };
    
    };

    //calls the function, does everything above
    pageReload();
    
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
        let activeChoice = document.querySelector(".active");
        let nextPage = activeChoice.value;
        //not working because it's not reloading maybe?
        currentPage = storyChoices.nextPage;
        //calls the function again when the next button is clicked, need to figure out how to delete what's already there because right now it's just adding elements in addition to what's there already
        pageReload();
        console.log(nextPage);
    });
});