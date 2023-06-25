var storyChoices = {
    1:{
        "text": "You wake up in the castle dungeons after taking part in a fight in the local tavern. Your sister's wedding is taking place today, and you absolutely cannot miss it. There is a figure sleeping on the other cot in the room, something on the ledge by the window, and a guard in the hallway. You know you need to escape somehow, what do you do?",
        "choices": [{
            "text": "Try to talk to the sleeping figure",
            "newItem": false,
            "next": 2
            }, {
            "text": "Investigate the window",
            "newItem": false,
            "next": 3
            }, {
            "text": "Try to talk to the guard",
            "newItem": false,
            "next": 4
            }, {
                //fix later so it works
            "text": "Do nothing and miss the wedding",
            "newItem": false,
            "next": "credits.html"
            }
        ]
    },
    2:{
        "text": "The figure is sleeping. Do you: try to quietly wake up the person, loudly wake up the person, or go back to options?",
        "choices": [{
            "text": "Try to quietly wake up the person",
            "next": 5
        }, {
            "text": "Try to loudly wake up the person",
            "next": 6
        }, {
            "text": "Go back to other options",
            "next": 1
        }]
    },
    3:{
        "text": "You go over to the window to look closer at what's there. It appears to be a cool looking rock. Do you take it?",
        "choices": [{
            "text": "Take the rock",
            "next": 7
        }, {
            "text": "Leave the rock where it is and go back to options",
            "next": 1
        }]
    },
    4:{
        "text": "You try to go over to talk to the guard, but when he sees you get closer to the bars, he yells at you to back away. The sleeping figure appears to wake up at the noise. What do you do?",
        "choices": [{
            "text": "Try to talk to the guard again",
            "next": 8
        }, {
            "text": "Investigate the window",
            "next": 9
        }, {
            "text": "Try to talk to the person that just woke up",
            "next": 10
        }]
    },
    5:{
        "text": "You try to quietly wake up the figure on the cot, but they are still deeply asleep.",
        "choices": [{
            "text": "Try to loudly wake up the figure",
            "next": 6
        }, {
            "text": "Go back to other options",
            "next": 1
        }]
    }, 
    6:{
        "text": "You loudly wake up the figure. It works, but she's very unhappy with you. Nevertheless, when you explain your situation to her she decides to help you escape the castle. Will you distract the guard while she steals his keys, or will you wait out the rest of your sentence and miss the wedding?",
        "choices": [{
            "text": "Distract the guard",
            "next": 11
        }, {
            "text": "Wait out the rest of your sentence, and miss your sister's wedding",
            "next": 12
        }]
    },
    7:{
        "text": "you take the cool rock!",
        "newItem": "Cool rock",
        "choices": [{
            "text": "test",
            "next": 1
        }]
    }
}