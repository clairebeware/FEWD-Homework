var storyChoices = {
    "page1":{
        "back": "index.html",
        "text": "You wake up in the castle dungeons after taking part in a fight in the local tavern. Your sister's wedding is taking place today, and you absolutely cannot miss it. There is a figure sleeping on the other cot in the room, something on the ledge by the window, and a guard in the hallway. You know you need to escape somehow, what do you do?",
        "choices": [{
            "numberChoice": "choice1",
            "text": "Try to talk to the sleeping figure",
            "newItem": false,
            "next": "page2"
            }, {
            "numberChoice": "choice2",
            "text": "Investigate the window",
            "newItem": false,
            "next": "page3"
            }, {
            "numberChoice": "choice3", 
            "text": "Try to talk to the guard",
            "newItem": false,
            "next": "page4"
            }, {
            "numberChoice": "choice4",
            "text": "Do nothing and miss the wedding",
            "newItem": false,
            "next": "credits.html"
            }
        ]
    },
    "page2":{
        "back": "page1",
        "text": "test"
    }
}