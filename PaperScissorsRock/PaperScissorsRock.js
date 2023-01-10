let humanTally = 0;
let computerTally = 0;

function playRound(humanChoice){
    const inputMap = new Map ([
        ["rock", 0],
        ["paper", 1],
        ["scissors",2]
    ]);
    const outputMap = new Map ([
        [0,"Draw!"],
        [1,"Human wins!"],
        [2,"Computer wins!"]
    ]);
    humanChoice = humanChoice.toLowerCase();
    let humanValue = inputMap.get(humanChoice);                    // human's choice as 0,1,2 value
    let computerValue = inputMap.get(computerPlay());              // computer's choice as 0,1,2 value
    let resultValue = (humanValue - computerValue + 3) % 3;        // combined value based on modular arithmetic 
    let resultString = outputMap.get(resultValue);

    if (resultValue == 2){computerTally++; document.getElementById("result-text").textContent = "it was roboto"};
    if (resultValue == 1){humanTally++; document.getElementById("result-text").textContent = "human win wow"};
    if (resultValue == 0){document.getElementById("result-text").textContent = "oh draw nice"};

    document.getElementById("humanTally").textContent = humanTally;
    document.getElementById("computerTally").textContent = computerTally;
    document.getElementById("humanTallyImage").src="images/"+"tally"+humanTally+".png";
    document.getElementById("computerTallyImage").src="images/"+"tally"+computerTally+".png";
    document.getElementById("matchup-text").textContent = "computer doing " + computerValue;

    if (humanTally == 5){alert("ez clap")}
    if (computerTally == 5){alert("oof 5 rekt")}
    if (humanTally == 5 || computerTally == 5){ computerTally = 0; humanTally = 0} // reset the game if a player reaches 5 wins
}
    // Modular arithmetic concept
    
    // 0 means draw
    // 1 means human win
    // 2 means computer win
    
    // Equivalence classes for Mod % 3
    // -3,0,3,6,9,12... = 0
    // -2,1,4,7,10,13... = 1
    // ...-4,-1,2,5,8,11,14... = 2
    
    // draw                   =  0 draw
    // rock paper       = 0-1 = -1 right wins
    // paper rock       = 1-0 =  1 left wins
    // rock scissors    = 0-2 = -2 left wins
    // scissors rock    = 2-0 =  2 right wins
    // paper scissors   = 1-2 = -1 right wins
    // scissors paper   = 2-1 =  1 left wins

function computerPlay(){
    let randomNumber = Math.floor(Math.random()*3); // generates random number between 1-3
    if (randomNumber == 0) return "rock";
    if (randomNumber == 1) return "paper";
    if (randomNumber == 2) return "scissors";
}

// trust me i am human i'm just allergic to white space
//
// const inputMap = new map ([["rock", 0],["paper", 1],["scissors",2]]);
// const outputMap = new map ([[0,"Draw!"],[1,"Human wins!"],[2,"Computer wins!"]]);
// alert("Human chooses " + humanChoice + ", Computer counters with " + computerChoice + " :::: " + outputMap.get((inputMap.get(humanChoice.toLowerCase) - Math.floor(Math.random()*3) + 3) % 3));