//empty array that gets new items pushed into it depending on what choices you make
var inventory = [];
//to keep track of lost items for if you go back, to get them back again
var itemLost = [];
//if true sends to credits
var endOfGame = Boolean;
//array to keep track of your choices so you can use the back button
var storyRoute = ["index.html", 1];

//will be added to highlights in the credits, shows items found, friends made, and enemies made
var achievements = [];

var friends = [];

var enemies = [];

//removes elements from the page, to be used with the options and the inventory items
function removeElements(elements){
    for(var m = 0; m < elements.length; m++){
        elements[m].parentNode.removeChild(elements[m]);
    };
};

//looks through the arrays for inventory and friends, and if they're not empty, adds them to the achievements array with text to go in the credits
function addAchievements(inventory, friends, enemies){
    if(inventory.length != 0 && inventory.length != undefined){
        for(q=0; q<inventory.length; q++){
            let addItem = `Item found: ${inventory[q]}!`;
            achievements.push(addItem);
        };
    };
    if(friends.length != 0 && friends.length != undefined){
        for(r=0; r<friends.length; r++){
            let makeFriend = `Friend made: ${friends[r]}!`;
            achievements.push(makeFriend);
        };
    };

    if(enemies.length != 0 && enemies.length != undefined){
        for(v=0; v<enemies.length; v++){
            let makeEnemy = `Enemy made: ${enemies[v]}!`;
            achievements.push(makeEnemy);
        };
    };
};

//function similar to how the inventory is created, with the contents of the achievements array being added as li's to the credits page
function writeCredits(){
    if(achievements.length == 0 || achievements.length == undefined){
        let noAchievements = document.createElement('li');
        noAchievements.innerText = "No highlights";
        document.querySelector("#highlights-go-here").appendChild(noAchievements);
        noAchievements.classList.add("list-group-item");
    } else{
        for(p=0; p<achievements.length; p++){
            let achievementLi = document.createElement('li');
            achievementLi.innerText = achievements[p];
            document.querySelector("#highlights-go-here").appendChild(achievementLi);
            achievementLi.classList.add("list-group-item");
        };
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
        if(choices != undefined){
            for(i=0;i<choices.length;i++) {
                let newOption = document.createElement('button');
                newOption.value = choices[i].next;
                newOption.innerText = choices[i].text;
                document.querySelector('#options-go-here').appendChild(newOption);
                newOption.classList.add("list-group-item");
                newOption.classList.add("list-group-item-action");
                newOption.classList.add("option");
            };
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
        //if there are no items in the inventory, it writes text that says it's empty
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
        };
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

                //gives you back the lost item if you click back before the point at which you lost it
                for(t=0; t<itemLost.length; t++){
                    if(itemLost[t] == storyChoices[storyRoute.slice(-1)[0]].lostItem){
                        let indexOfLostItem = itemLost.indexOf(itemLost[t]);
                        inventory.push(itemLost[t]);
                        itemLost.splice(indexOfLostItem, 1);
                    };
                };

                //deals with removing friend from list in credits if you go back to before where it gets added
                for(s=0; s<friends.length; s++){
                    if(friends[s] == storyChoices[storyRoute.slice(-1)[0]].newFriend){
                        let indexOfFriend = friends.indexOf(friends[s]);
                        friends.splice(indexOfFriend, 1);
                    };
                };

                //deals with removing enemy from list in credits if you go back to before where it gets added
                for(u=0; u<enemies.length; u++){
                    if(enemies[u] == storyChoices[storyRoute.slice(-1)[0]].newEnemy){
                        let indexOfEnemy = enemies.indexOf(enemies[u]);
                        enemies.splice(indexOfEnemy, 1);
                    };
                };

                //reloads the page with the previous page
                pageReload(storyChoices[storyRoute.slice(-2)[0]]);
                storyRoute.pop();
            };
        });
    


    //eventlistener for the next button
    let nextBtn = document.querySelector(".next");
    nextBtn.addEventListener("click", function(e){
        e.preventDefault();

        //only does something if there's a choice selected
        if(document.querySelector(".active") != null){
            let nextPage = document.querySelector(".active").value;
    
            //if there's not a new item, it will just be undefined and the if statement below will keep it from being added
            let addItem = storyChoices[nextPage].newItem;
            // if it's not undefined, add the new item to the inventory array
            if(addItem != undefined && inventory.indexOf(addItem) == -1){
                inventory.push(addItem);
            };
    
            //for items you lose
            let loseItem = storyChoices[nextPage].lostItem;
            if(loseItem != undefined && itemLost.indexOf(loseItem) == -1){
                itemLost.push(loseItem);
                let deleteItem = inventory.indexOf(loseItem);
                inventory.splice(deleteItem, 1);
            };
    
            //same as addItem but for friends
            let addFriend = storyChoices[nextPage].newFriend;
            //if it's not undefined, add to friends array
            if(addFriend != undefined && friends.indexOf(addFriend) == -1){
                friends.push(addFriend);
            };

            //same as addItem but for enemies
            let addEnemy = storyChoices[nextPage].newEnemy;
            //if it's not undefined, add to enemies array
            if(addEnemy != undefined && enemies.indexOf(addEnemy) == -1){
                enemies.push(addEnemy);
            };

            endOfGame = storyChoices[nextPage].endOfGame;
    
            //adds the nextPage (as in new page) to the storyRoute array as an integer
            storyRoute.push(parseInt(nextPage));
            //calls the function again when the next button is clicked, reloads the page with the new options
            if(nextPage != undefined){
                pageReload(storyChoices[nextPage]);
                if(endOfGame == true){
                    document.querySelector(".body").classList.toggle("end-of-game");
                    addAchievements(inventory, friends, enemies);
                    writeCredits();
                };
            };
        };
    });

    //mobile inventory toggle
    document.querySelector("#inventory-toggle").addEventListener('click',function(e){
        e.preventDefault();

        document.querySelector(".body").classList.toggle("mobile-inventory-mode");

        //changes the text of the button when the inventory is open to show that you should click it again to get back to the choices
        if(document.querySelector("#inventory-toggle").innerText == "Inventory"){
            document.querySelector("#inventory-toggle").innerText = "Choices";
        } else {
            document.querySelector("#inventory-toggle").innerText = "Inventory";
        };
    });
});
