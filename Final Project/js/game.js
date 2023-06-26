//empty array that gets new items pushed into it depending on what choices you make
//maybe have some text that says you have nothing in your inventory when it's empty?
var inventory = [];

//array to keep track of your choices so you can use the back button
var storyRoute = ["index.html", 1];

//removes elements from the page, to be used with the options and the inventory items
function removeElements(elements){
    for(var m = 0; m < elements.length; m++){
        elements[m].parentNode.removeChild(elements[m]);
    };
};


document.addEventListener('DOMContentLoaded', function(event) {
    function pageReload(pageNumber) {
        //removes the previous options
        removeElements(document.querySelectorAll(".option"));
        //removes the previous items
        removeElements(document.querySelectorAll(".item"));

        var choices = pageNumber.choices;
        //adds the .explanation text to the paragraph on the page
        let explanation = pageNumber.text;
        let explanationText = document.querySelector("#explanation");
        explanationText.innerText = explanation;

        //goes through the array of choices and adds them to the page as buttons
        for(i=0;i<choices.length;i++) {
            let newOption = document.createElement('button');
            newOption.value = choices[i].next;
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
    
        //create inventory
        //if there are no items in the inventory, write text that says it's empty
        if(inventory.length == 0){
            let emptyInventoryLi = document.createElement('li');
            emptyInventoryLi.innerText = "You don't have any items in your inventory";
            document.querySelector('#items-go-here').appendChild(emptyInventoryLi);
            emptyInventoryLi.classList.add("list-group-item");
            emptyInventoryLi.classList.add("item");
        } else{
            for(k=0;k<inventory.length;k++) {
                let newitem = document.createElement('li');
                newitem.value = inventory[k];
                newitem.innerText = inventory[k];
                document.querySelector('#items-go-here').appendChild(newitem);
                newitem.classList.add("list-group-item");
                newitem.classList.add("item");
              };
        }
    };

    //calls the function, does everything above for pageReload
    pageReload(storyChoices[storyRoute.slice(-1)[0]]);

    //eventlistener for the back button
    let backBtn = document.querySelector(".back");
    backBtn.addEventListener("click", function(e){
        //if it's the first page it will take you back to index.html
            if(storyRoute.slice(-2)[0] == "index.html"){
                backBtn.setAttribute("href", "index.html");
            } else {
                e.preventDefault();
                //deals with removing the item from your inventory if you go back to before where it gets added
                for(n=0; n<inventory.length; n++){
                    if(inventory[n] == storyChoices[storyRoute.slice(-1)[0]].newItem){
                        let indexOfItem = inventory.indexOf(inventory[n]);
                        inventory.splice(indexOfItem, 1);
                    };
                };
                //reloads the page with the previous page
                pageReload(storyChoices[storyRoute.slice(-2)[0]]);
                storyRoute.pop();
            };
        });
    


    //eventlistener for the next button
    //change so that if you click next without choosing an option it just doesn't do anything rather than reloading, maybe add an alert
    let nextBtn = document.querySelector(".next");
    nextBtn.addEventListener("click", function(e){
        //changes the current page to the next page
        // if(document.querySelector(".active").value != undefined && document.querySelector(".active").value != false){
            
        //need to fix the uncaught typeError when newItem isn't defined (larger problem of choice not existing, but also causing problems for trying to send to credits.html)
        e.preventDefault();
        let nextPage = document.querySelector(".active").value;

        //create a conditional where if removeItem == true, it removes the item from the inventory, and adds it to another array where it will stay so if you undo that choice it will be added back.
        console.log(nextPage);
        //if next page is to the credits, sends you to the credits
        if(nextPage == "credits.html"){
            nextBtn.setAttribute("href", "credits.html");
        } else {
            e.preventDefault();
        };

        //if there's not a new item, it will just be undefined and the if statement below will keep it from being added
        let addItem = storyChoices[nextPage].newItem;
        // if it's not undefined, add the new item to the inventory array
        if(addItem != undefined && inventory.indexOf(addItem) == -1){
            inventory.push(addItem);
        }

        //adds the nextPage (as in new page) to the storyRoute array as an integer
        storyRoute.push(parseInt(nextPage));
        //calls the function again when the next button is clicked, reloads the page with the new options
        if(nextPage != undefined){
            pageReload(storyChoices[nextPage]);
        };
    });
    //create a separate js file for the credits? Or put it below maybe
    //populate the list with accomplishments, such as items recieved, items lost, people befriended, enemies made, whether or not you make it to the wedding
    //change so it's in the same html file maybe? I don't know how to keep the arrays and such from resetting when the page reloads


    //mobile inventory toggle
    document.querySelector("#inventory-toggle").addEventListener('click',function(e){
        e.preventDefault();

        document.querySelector(".body").classList.toggle("mobile-inventory-mode");

        //changes the text of the button when the inventory is open to show that you should click it again to get back to the choices
        if(document.querySelector("#inventory-toggle").innerText == "Inventory"){
            document.querySelector("#inventory-toggle").innerText = "Choices";
        } else {
            document.querySelector("#inventory-toggle").innerText = "Inventory";
        }
        

    });
});
