//GLOBAL:
//An event listener to change the shade of buttons (ie. all black to white) when you hover over them
//????? A general "story" button that always fades current element and activates to display the next?


//STORY:
const title = document.querySelector(".title")
const story1 = document.querySelector(".story1")
document.querySelector("#titleNext").addEventListener("click", () => {
    title.classList.add("hide")
    story1.classList.remove("hide")
})

const story2 = document.querySelector(".story2")
document.querySelector("#storyNext").addEventListener("click", () => {
    story1.classList.add("hide")
    story2.classList.remove("hide")
})


const story3 = document.querySelector(".story3")
document.querySelector("#storyNext2").addEventListener("click", () => {
    story2.classList.add("hide")
    story3.classList.remove("hide")
})


//BATTLE
const enemyShip = {
    attack: Math.floor(Math.random() * (95 - 45) + 45),
    speed: Math.floor(Math.random() * (80 - 20) + 20),
    loot: Math.floor(Math.random() * (175000 - 50000) + 50000)}
const myShip = {attack: 70, speed: 52, health: 100, loot: 50000}

const story4 = document.querySelector(".story4")
const lookout = document.querySelector("#lookout")
document.querySelector("#storyNext3").addEventListener("click", () => {
    story3.classList.add("hide")
    story4.classList.remove("hide")
    
})

let myShipHealth = document.querySelector("#health")
let myShipLoot = document.querySelector("#loot")
let battleChoice = document.querySelector(".battleChoice")
let attackWin = document.querySelector(".attackWin")
let attackLose = document.querySelector(".attackLose")
let result = document.querySelectorAll("result")
do {
   

    document.querySelector("#storyNext4").addEventListener("click", () => {
        if (myShip.attack > enemyShip.attack) {
            lookout.innerHTML = "We've got an enemy ahead. It'd be a hard fight, but we might stand a chance."
        } else if (myShip.attack < enemyShip.attack) {
            lookout.innerHTML = "Yikes boss. Massive ship just popped up on the radar. <br> They are armed to the teeth."
            
        }
        console.log(enemyShip.attack)
        console.log(enemyShip.speed)
        console.log(enemyShip.loot)
        story4.classList.add("hide")
        myShipHealth.classList.remove("hide")
        myShipHealth.innerHTML = "Health: " + myShip.health
        myShipLoot.classList.remove("hide")
        myShipLoot.innerHTML = "Health: " + myShip.loot
        battleChoice.classList.remove("hide")

    
    })


//BATTLE CHOICE
  
    document.querySelector("#next5-attack").addEventListener("click", () => {
        if (myShip.attack > enemyShip.attack) {
            let moreLoot = myShip.loot += enemyShip.loot
            myShipLoot.innerHTML = "Loot: " + moreLoot
            myShip.health += (Math.floor(enemyShip.attack / 10))
            myShipHealth.innerHTML = "Health: " + myShip.health
            battleChoice.classList.add("hide") 
            attackWin.classList.remove("hide")
        } else { 
            let lessLoot = myShip.loot -= (enemyShip.loot / 10)
            myShipLoot.innerHTML = "Loot: " + lessLoot
            Math.floor(myShip.health -= (enemyShip.attack / 2))
            myShipHealth.innerHTML = "Health: " + myShip.health
            battleChoice.classList.add("hide")
            attackLose.classList.remove("hide")
        }
        // console.log(myShip.loot)
        // console.log(myShip.health)
    })

    const runWin = document.querySelector(".runWin")
    const runLose = document.querySelector(".runLose")
    document.querySelector("#next5-run").addEventListener("click", () => {
        if (myShip.speed > enemyShip.speed) {
            battleChoice.classList.add("hide")
            runWin.classList.remove("hide")
        } else {
            let partialLootLoss = myShip.loot -= (Math.floor(enemyShip.loot / 4))
            myShipLoot.innerHTML = "Loot: " + partialLootLoss
            let partialHealthLoss = myShip.health -= Math.floor((enemyShip.attack / 4))
            myShipHealth.innerHTML = "Health: " + partialHealthLoss
            battleChoice.classList.add("hide")
            runLose.classList.remove("hide")
        }    
    })
    
    const gameOver = document.querySelector("#game-over")
    document.querySelector("#start-over").addEventListener("click", () => {
    gameOver.classList.add("hide")
    story1.classList.remove("hide")
    })
    if (myShip.health <= 0 || myShip.loot <=0) {
        result.classList.add("hide")
        gameOver.classList.remove("hide")
    }

    document.querySelector("#next6").addEventListener("click", () => {
        result.classList.add("hide")
        battleChoice.classList.remove("hide")
    })
} while (myShip.health <= 0 || myShip.loot <= 0)



// //ENDING RESULT


// const survived = document.querySelector("#survived")
// document.querySelector("#start-over").addEventListener("click", () => {
//     survived.classList.add("hide")
//     story1.classList.remove("hide")
// })

// const thrived = document.querySelector("#thrived")
// document.querySelector("#start-over").addEventListener("click", () => {
//     thrived.classList.add("hide")
//     story1.classList.remove("hide")
// })


// currentSlideOff = document.querySelector(".title").style.display = "none";
// newSlideOn = document.querySelector(".story1").style.display = "flex";

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
//Game elements:
    //Ship selection: there are 3 different choices
    //3 choices: attack, run, or ally/negotiate
    //If "game over", have an option to either "keep playing" or "start over"
    //After third ship, "we need to head home. "
    //ATTACK reactions: if user > enemy && enemy attack is within 5 pts, the user still takes some damage. 
    //Loot values: dependent on attack stat of ship || dependent on the ratio of comparison values
    //Different, semi-random lookout alerts (3-4 options for either "greater" or "lesser")
//Styling:
//Music for various sections (title & story slides, ship display, each enemy ship, battle outcome, each 3 ending)