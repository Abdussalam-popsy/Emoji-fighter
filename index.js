let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")


// console.log(fighter2)

fightButton.addEventListener("click", function() {
    // Challenge:
    // When the user clicks on the "Pick Fighters" button, pick two random 
    // emoji fighters and display them as i.e. "🦀 vs 🐢" in the "stage" <div>.
    
    // create random index
    let randomIndex1 = Math.floor(Math.random() * fighters.length) + 1; 
    let randomIndex2 = Math.floor(Math.random() * fighters.length) + 1;
    // create fighters
    let fighter1 = fighters[randomIndex1]
    let fighter2 = fighters[randomIndex2]

    stageEl.textContent =  fighter1 + " vs " + fighter2
})


/* 
Note:
If you put the random index numbers and fighters outside the function.

Thy'd only work once, so, that means variables in functions are very important in multiple scenarios
*/