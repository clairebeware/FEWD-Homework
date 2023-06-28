//setting page 113 as the end page

var storyChoices = {
    1:{
        "text": "You wake up in the castle dungeons after taking part in a fight in the local tavern. Your sister's wedding is taking place today, and you absolutely cannot miss it. There is a woman sleeping on the other cot in the room, something on the ledge by the window, and a guard in the hallway. You know you need to escape somehow, what do you do?",
        "choices": [{
            "text": "Try to talk to the sleeping woman",
            "next": 2
            }, {
            "text": "Investigate the window",
            "next": 3
            }, {
            "text": "Try to talk to the guard",
            "next": 4
            }, {
            "text": "Do nothing and miss the wedding",
            "next": 113
            }
        ]
    },
    2:{
        "text": "The woman is sleeping. Do you: try to quietly wake her up, loudly wake her up, or go back to options?",
        "choices": [{
            "text": "Try to quietly wake her up",
            "next": 5
        }, {
            "text": "Try to loudly wake her up",
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
        "text": "You try to go over to talk to the guard, but when he sees you get closer to the bars, he yells at you to back away. The sleeping woman appears to wake up at the noise. What do you do?",
        "choices": [{
            "text": "Try to talk to the guard again",
            "next": 8
        }, {
            "text": "Investigate the window",
            "next": 9
        }, {
            "text": "Try to talk to the woman that just woke up",
            "next": 10
        }]
    },
    5:{
        "text": "You try to quietly wake up the woman on the cot, but she is still deeply asleep.",
        "choices": [{
            "text": "Try to loudly wake up the woman",
            "next": 6
        }, {
            "text": "Go back to other options",
            "next": 1
        }]
    }, 
    6:{
        "text": "You loudly wake up the woman. It works, but she's very unhappy with you. Nevertheless, when you explain your situation to her she decides to help you escape the castle. Will you steal the guard's key while she distracts him, or will you wait out the rest of your sentence and miss the wedding?",
        "choices": [{
            "text": "Steal the guard's key",
            "next": 11
        }, {
            "text": "Wait out the rest of your sentence, and miss your sister's wedding",
            "next": 113
        }]
    },
    7:{
        "text": "You take the cool rock! There is still a woman sleeping on the cot and the guard in the hallway. What do you do next?",
        "newItem": "Cool rock",
        "choices": [{
            "text": "Go talk to the sleeping woman",
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
            "text": "Do not take the cool rock",
            "next": 4
        }]
    },
    10:{
        "text": "You go over to the person who just woke up, and she introduces herself as Sarah. You bond over your mutual dislike of the guard. After hearing about your sister's wedding, she tells you that she thinks she knows a way to escape, with you distracting the guard and her stealing the keys. Do you go along with her plan, or do you wait out the rest of your sentence and miss the wedding?",
        "newFriend": "Sarah",
        "choices": [{
            "text": "Go along with Sarah's plan, distract the guard",
            "next": 15
        }, {
            "text": "Wait out the rest of your sentence and miss the wedding",
            "next": 113
        }]
    },
    11:{
        "text": "You wait until she goes over to the bars and starts yelling, and then when the guard comes closer to investigate, you slip your hand through the bars and grab the key off of the keyring. The guard sees that you have the key and starts yelling for back-up, so you quickly unlock the door and both you and the woman that was in the cell with you start running down the hallway. The guard tries to grab you and you look back and shake him off, but when you turn back again the woman is gone. Your two options for escape are the doors at the end of the hallway, which one do you go through?",
        "newEnemy": "the dungeon guard",
        "choices": [{
            "text": "Enter the door on the right",
            "next": 24
        }, {
            "text": "Enter the door on the left",
            "next": 25
        }]
    },
    12:{
        "text": "You go over to talk to the sleeping woman. What do you do?",
        "choices": [{
            "text": "Try to quietly wake her up",
            "next": 16
        },{
            "text": "Try to loudly wake her up",
            "next": 17
        }]
    },
    13:{
        "text": "You go over to the guard to try and talk to them, and he notices your cool rock. He yells at you about having contraband, and confiscates it from you. The sleeping woman wakes up. What do you do next?",
        "lostItem": "Cool rock",
        "choices": [{
            "text": "Try to convince the guard to give you back your rock",
            "next": 18
        }, {
            "text": "Go over and talk to the (now awake) person",
            "next": 19
        }]
    },
    14:{
        "text": "Cool rock acquired! The woman on the cot comes over to talk to you.",
        "newItem": "Cool rock",
        "choices": [{
            "text": "Talk to her",
            "next": 20
        }, {
            "text": "Offer her the cool rock",
            "next": 21
        }]
    },
    15:{
        "text": "You decide to go along with Sarah's plan. You go over to the bars and start yelling at the guard, who comes over and starts yelling back at you to be quiet. When he comes closer, Sarah sneaks up to him and slips his key off his keyring without him noticing. You stop yelling and go back further into the cell, and the guard, believing that he's been successful in getting you to quiet down, goes back to not paying attention. A few minutes later, when he walks further down the hall to patrol, you and Sarah quietly escape the cell and run down the hall before the guard can notice. At the end of the hall are two doors. Sarah enters the door on the right.",
        "newEnemy": "the dungeon guard",
        "choices": [{
            "text": "Enter the door on the right with Sarah",
            "next": 19
        }, {
            "text": "Leave Sarah and enter the door on the left",
            "next": 25
        }]
    },
    16:{
        "text": "She won't wake up. What do you do?",
        "choices": [{
            "text": "Try to loudly wake her up",
            "next": 17
        }, {
            "text": "Go back to options",
            "next": 12
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
        "text": "The guard refuses to speak to you. The (now awake) person comes over to talk to you. She introduces herself as Sarah, and commiserates with you over how mean the guard is. When you tell her about your sister's wedding, Sarah says she has an idea for how to escape. Will you go along with her plan?",
        "newFriend": "Sarah",
        "choices": [{
            "text": "Distract the guard while Sarah steals the key",
            "next": 15
        }, {
            "text": "Do nothing and wait out the rest of your sentence",
            "next": 113
        }]
    },
    19:{
        "text": "You appear to have entered the laundry room for the castle. You and Sarah change into spare servant's clothes to blend in as you escape the castle. You both leave the laundry room in your new clothes and go through the other door, and enter the castle kitchen. There are a lot of people running around, and a beautiful cake sitting out on a tray on the counter. Sarah elbows you and gestures to the cake. Do you take it?",
        "choices": [{
            "text": "Take the cake and leave",
            "next": 26
        }, {
            "text": "Leave without taking the cake",
            "next": 27
        }]
    }, 
    20:{
        "text": "The woman comes over to you and introduces herself as Sarah. The noise of the guard yelling at you had woken her up and she commiserates with you about how awful he is. You tell her about your sister's wedding, and she tells you that she thinks she might know a way to escape. Will you distract the guard while she steals the key?",
        "newFriend": "Sarah",
        "choices": [{
            "text": "Distract the prison guard and escape with Sarah",
            "next": 15
        }, {
            "text": "Wait out the rest of your sentence and miss the wedding",
            "next": 113
        }]
    }, 
    21:{
        "text": "She happily takes the cool rock, and introduces herself as Sarah. You tell her about your sister's wedding and she tells you that she might have a way to escape. Will you distract the guard while she steals the key?",
        "newFriend": "Sarah",
        "lostItem": "Cool rock",
        "choices": [{
            "text": "Distract the guard, try to escape",
            "next": 15
        }, {
            "text": "Wait out the rest of your sentence, miss the wedding",
            "next": 113
        }]
    },
    22:{
        "text": "She accepts the rock and forgives you for waking her up. She introduces herself as Sarah, and when you tell her about your sister's wedding, she tells you that she has an idea for how to escape. Will you distract the guard while she steals the key?",
        "lostItem": "Cool rock",
        "newFriend": "Sarah",
        "choices": [{
            "text": "Distract the guard while Sarah steals the key",
            "next": 15
        }, {
            "text": "Do nothing and wait out the rest of your sentence, missing the wedding",
            "next": 113
        }]
    }, 
    23:{
        "text": "She's still mad at you, but when you explain your situation to her she decides to help you escape the castle. Will you steal the guard's key while she distracts him, or will you wait out the rest of your sentence and miss the wedding?",
        "choices": [{
            "text": "Steal the guard's key",
            "next": 11
        }, {
            "text": "Wait out the rest of your sentence and miss your sister's wedding",
            "next": 113
        }]
    },
    24:{
        "text": "You enter the door on the right. It appears to be the laundry room for the castle. There are all kinds of clothes here, including some servant's uniforms. Do you take one and put it on?",
        "choices": [{
            "text": "Put on a servant's uniform and then leave and enter the other door",
            "next": 32
        }, {
            "text": "Don't put on the servant's uniform, leave and enter the other door",
            "next": 25
        }]
    }, 
    25:{
        "text": "You go through the door on the left and enter the castle kitchen. There are a lot of people running around, and a beautiful cake sitting out on a tray on the counter. Do you take it?",
        "choices": [{
            "text": "Take the cake",
            "next": 35
        },{
            "text": "Leave without taking the cake",
            "next": 34
        }]
    },
    26:{
        "text": "You take the cake and leave. A few people glance at you, but assume from your servant's uniform that you're supposed to be there. You and Sarah leave the kitchens out of the back door and are out of the castle. You have successfully escaped the dungeons! Now you just need to make it to your sister's wedding.",
        "newItem": "Cake",
        "newEnemy": "the castle cook",
        "choices": [{
            "text": "Thank Sarah for her help and head to the wedding",
            "next": 28
        }, {
            "text": "Invite Sarah to come to the wedding",
            "next": 29
        }]
    },
    27:{
        "text": "You leave without taking the cake. You and Sarah leave the kitchens out of the back door and are out of the castle. You have successfully escaped the dungeons! Now you just need to make it to your sister's wedding.",
        "choices": [{
            "text": "Thank Sarah for her help and head to the wedding",
            "next": 30
        }, {
            "text": "Invite Sarah to come to the wedding",
            "next": 31
        }]
    }, 
    28:{
        "text": "You make it to your sister's wedding in time, and she's very happy to see you, and very pleased with the cake you've brought. Congratulations, you've completed the game!",
        "endOfGame": true
    },
    29:{
        "text": "You make it to your sister's wedding in time, and she's very happy to see you and to meet your new friend Sarah, and very pleased with the cake you've brought. Congratulations, you've completed the game!",
        "endOfGame": true
    },
    30:{
        "text": "You make it to your sister's wedding in time, and she's very happy to see you. Congratulations, you've completed the game!",
        "endOfGame": true
    },
    31:{
        "text": "You make it to your sister's wedding in time, and she's very happy to see you and to meet your new friend Sarah. Congratulations, you've completed the game!",
        "endOfGame": true
    }, 
    32:{
        "text": "You go through the other door and enter the castle kitchen. There are a lot of people running around, and a beautiful cake sitting out on a tray on the counter. Do you take it?",
        "choices": [{
            "text": "Take the cake and leave",
            "next": 33
        }, {
            "text": "Leave without the cake",
            "next": 34
        }]
    }, 
    33:{
        "text": "You take the cake. A few people glance at you, but assume from your servant's uniform that you're supposed to be there. You leave the kitchens through the back door and successfully escape the castle and the dungeon! You make it to your sister's wedding in time, and she's very happy to see you, and very happy with the cake you've brought. Congratulations, you've completed the game!",
        "newItem": "Cake",
        "newEnemy": "the castle cook",
        "endOfGame": true
    },
    34:{
        "text": "You don't take the cake. You leave the kitchens through the back door and successfully escape the castle and the dungeon! You make it to your sister's wedding in time, and she's very happy to see you. Congratulations, you've completed the game!",
        "endOfGame": true
    },
    35:{
        "text": "You try to take the cake and leave. A few people glance at you, and upon seeing that you're not wearing a servant's uniform, they start yelling at you for taking the cake. You quickly put it back down again and run out of the back door and leave the castle. You make it to your sister's wedding in time, and she's very happy to see you. Congratulations, you've completed the game!",
        "newEnemy": "the castle cook",
        "endOfGame": true
    },
    113:{
        "text": "You wait out the rest of your sentence, having had no adventures and missing your sister's wedding.",
        "endOfGame": true
    }
}