//GLOBAL:
//An event listener to change the shade of buttons (ie. all black to white) when you hover over them
//????? A general "story" button that always fades current element and activates to display the next?



//TITLE:
//An event listener for "START" button to:
    //1. fade out current div-title element
    //2. activate proceeding div-background element


//BACKGROUND:
//An event listener to "SCROLL" button that scroll through text
//An event listener to:
    //1. fade out current div-setting element
    //2. activate proceeding div-ship-selection element


//ENEMY SHIP:
//Math.floor & math.random to fill in each(3) stat component:
    //1. HEALTH
    //2. SPEED
    //3. LOOT (***Loot value is 50 - 100k, or other relative/substantial range)


// LOOKOUT ALERT MESSAGE:
//Enemy ship stats (attack, speed, loot) are randomly generated (Math.floor & Math.random)
//Using if functions, text is printed based on enemy ship stats
    //If ship is above 70 attack: "text"
    //If ship is 40-70 attack: "text"
    //If the ship is 0-40 attack: "text"
//An event listener to:
    //1. fade out current div-lookout element
    //2. activate proceeding div-background element


//ATTACK/RUN CHOICE:
//Two Options:
//1 - clicking a button with no confirmation:
    //An event listener on "ATTACK" button to trigger a function that compares user to enemy ATTACK stats
    //An event listener on "GTFO" button to trigger a function that compares user to enemy SPEED stats
    //  Button click automatically moves to next screen/div element
//2 - clicking is essentially checking a box
    //An event listener that runs one of two functions
    //ATTACK chain of events***:
        //Compare user to enemy ATTACK value
        //If user > enemy, steal loot***
            //Print "text" result
        //If user < enemy, decrement to HEALTH and LOOT values
            //Print "text" result  
    //GTFO chain of events:
        //Compare user to enemy SPEED value
        //If user < enemy, decrement to HEALTH value that is fraction of enemy's ATTACK value.
            //Print "text".
        //If user > enemy, no value changes.
            //Print "Made it out unscathed"
        


//LOOP FUNCTION:
//-Start a loop function that runs the above function sequence three times (4 iterations/enemy ships total) 
//  ENEMY-SHIP, LOOKOUT-ALERT MESSAGE, and ATTACK/RUN CHOICE
//IF STATEMENTS to exit loop: 
    //If: HEALTH < 0, print GAME OVER div element.
    //If: All 4 repetitions completed && LOOT value < x, print SURVIVED div element
    //If: all 4 repetitions completed && LOOT value > x, print THRIVED div element
//

















//IF YOU GOT EXTRA TIME IDEAS (marked with ***):
//3 choices: attack, run, or ally
//ATTACK reactions: if user > enemy && enemy attack is within 5 pts, the user still takes some damage. 
//Loot values: dependent on attack stat of ship || dependent on the ratio of comparison values