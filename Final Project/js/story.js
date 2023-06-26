var storyChoices = {
    1:{
        "text": "You wake up in the castle dungeons after taking part in a fight in the local tavern. Your sister's wedding is taking place today, and you absolutely cannot miss it. There is a figure sleeping on the other cot in the room, something on the ledge by the window, and a guard in the hallway. You know you need to escape somehow, what do you do?",
        "choices": [{
            "text": "Try to talk to the sleeping figure",
            "next": 2
            }, {
            "text": "Investigate the window",
            "next": 3
            }, {
            "text": "Try to talk to the guard",
            "next": 4
            }, {
                //fix later so it works
            "text": "Do nothing and miss the wedding",
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
        "text": "You loudly wake up the figure. It works, but she's very unhappy with you. Nevertheless, when you explain your situation to her she decides to help you escape the castle. Will you steal the guard's keys while she distracts him, or will you wait out the rest of your sentence and miss the wedding?",
        "choices": [{
            "text": "Distract the guard",
            "next": 11
        }, {
            "text": "Wait out the rest of your sentence, and miss your sister's wedding",
            "next": "credits.html"
        }]
    },
    7:{
        "text": "You take the cool rock! There is still a figure sleeping on the cot and the guard in the hallway. What do you do next?",
        "newItem": "Cool rock",
        "choices": [{
            "text": "Go talk to the sleeping figure",
            "next": 12
        }, {
            "text": "Go talk to the guard",
            "next": 13
        }]
    },
    8:{
        "text": "The guard refuses to talk to you again.",
        "choices": [{
            "text": "Go back to options",
            "next": 4
        }]
    },
    9:{
        "text": "There's a cool rock. Do you take it?",
        "choices": [{
            "text": "Take the cool rock",
            "next": 14
        }, {
            //fix?
            "text": "Do not take the cool rock.",
            "next": 4
        }]
    },
    10:{
        "text": "You go over to the person who just woke up, and bond over your mutual dislike of the guard. After hearing about your sister's wedding, she tells you that she thinks she knows a way to escape, with you distracting the guard and her stealing the keys. Do you go along with her plan, or do you wait out the rest of your sentence and miss the wedding?",
        "choices": [{
            "text": "Go along with the plan, distract the guard.",
            "next": 15
        }, {
            "text": "Wait out the rest of your sentence and miss the wedding.",
            "next": "credits.html"
        }]
    },
    11:{
        //TBD
    },
    12:{
        "text": "You go over to talk to the sleeping figure. What do you do?",
        "choices": [{
            "text": "Try to quietly wake them up",
            "next": 16
        },{
            "text": "Try to loudly wake them up",
            "next": 17
        }]
    },
    13:{
        "text": "You go over to the guard to try and talk to them, and he notices your cool rock. He yells at you about having contraband, and confiscates it from you. The sleeping figure wakes up. What do you do next?",
        "choices": [{
            "text": "Try to convince the guard to give you back your rock",
            "next": 18
        }, {
            "text": "Go over and talk to the (now awake) person",
            "next": 19
        }]
    },
    14:{
        "text": "Cool rock acquired! The figure on the cot comes over to talk to you.",
        "choices": [{
            "text": "Talk to them",
            "next": 20
        }, {
            "text": "Offer them the cool rock",
            "next": 21
        }]
    },
    15:{
        //TBD
    },
    16:{
        //not working
        "text": "They won't wake up. What do you do?",
        "choice": [{
            "text": "Try again",
            "next": 16
        }, {
            "text": "Try to loudly wake them up",
            "next": 17
        }]
    },
    17:{
        "text": "She's mad that you woke her up. Do you try to appease her by offering her your cool rock?",
        "choices": [{
            "text": "Yes",
            "next": 22
        }, {
            "text": "No",
            "next": 23
        }]
    },
    18:{
        //finish
        "text": "The guard refuses to speak to you. The (now awake) person comes over to talk to you. She ",
        "choices": [{

        }]
    }
}