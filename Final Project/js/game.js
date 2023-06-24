//change later to an empty array that you will use the story.js to add to
var inventory = ["cool rock", "sword"];

//starts out on page 1 but gets changed with the next button eventlistener
var currentPage = storyChoices[1];


document.addEventListener('DOMContentLoaded', function(event) {
    function pageReload(pageNumber) {
        var choices = pageNumber.choices;
        console.log(choices);
        //adds the .explanation text to the paragraph on the page
        let explanation = pageNumber.text;
        let explanationText = document.querySelector("#explanation");
        explanationText.innerText = explanation;

        //goes through the array of choices and adds them to the page as buttons
        for(i=0;i<choices.length;i++) {
            let newOption = document.createElement('button');
            newOption.value = choices[i].next;
            console.log(choices[i].next);
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
            newitem.classList.add("item");
          };

        //eventlistener for the back button, right now only works if it's the first page, have to edit later
        let backBtn = document.querySelector(".back");
        backBtn.addEventListener("click", function(e){
            //create a condition where if it's the first page it will take you back to index.html
            if(pageNumber.back == "index.html"){
                backBtn.setAttribute("href", "index.html");
            } else {
                e.preventDefault();
            };
            //change out the console.log for function later
            console.log("back");
        });
    
    };

    //removes elements from the page, to be used with the options and the inventory items
    //and the explanation maybe?
    function removeElements(elements){
        for(var m = 0; m < elements.length; m++){
            elements[m].parentNode.removeChild(elements[m]);
        };
    };

    //calls the function, does everything above for pageReload
    pageReload(currentPage);
    


    //eventlistener for the next button
    let nextBtn = document.querySelector(".next");
    nextBtn.addEventListener("click", function(e){
        //create a condition where the next button would lead the user to the credits page
        //not working :(
        if(currentPage.choices.next == "credits.html"){
            nextBtn.setAttribute("href", "credits.html");
        } else {
            e.preventDefault();
        };

        //changes the current page to the next page
        let nextPage = document.querySelector(".active").value;
        let test = eval(storyChoices.nextPage);

        //removes the previous options
        removeElements(document.querySelectorAll(".option"));
        //removes the previous items
        removeElements(document.querySelectorAll(".item"));
        // //removes the explanation text
        // removeElements(document.querySelectorAll(".explanation"));
        //calls the function again when the next button is clicked, need to figure out how to change the options to the new choices
        pageReload(storyChoices[nextPage]);
    });
});