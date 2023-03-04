const player1Container = document.querySelector(".player-1")
const player2Container = document.querySelector(".player-2")
const player1TotalScore = document.querySelector(".player-1-score")
const player1CurrentContainer = document.querySelector(".p1-c-score")
const player1CurrentText = document.querySelector(".p1-c")
const player1CurScore = document.querySelector(".p1-s")
const newGameBtn = document.querySelector(".new-game")
const rollDiceBtn = document.querySelector(".Roll-Dice")
const holdBtn = document.querySelector(".Hold")
const player2TotalScore = document.querySelector(".player-2-score")
const player2CurrentContainer = document.querySelector(".p2-c-score")
const player2CurrentText = document.querySelector(".p2-c")
const player2CurScore = document.querySelector(".p2-s")
const diceImage = document.querySelector("img")

let activePlayer;
let player1CurrentScore = 0
let player2CurrentScore = 0
let playr1TotalScore = 0;
let playr2TotalScore = 0;

const disableBtn = (btn) => {
    console.log(btn);
    btn.disabled = true
    btn.style.opacity = 0.5
    btn.style.cursor = 'not-allowed'

}
const enableBtn = (btn) => {
    console.log(btn);
    btn.disabled = false
    btn.style.opacity = 1
    btn.style.cursor = 'pointer'

}

disableBtn(rollDiceBtn)
disableBtn(holdBtn)
newGameBtn.addEventListener('click', (e) => {
    enableBtn(rollDiceBtn)
    enableBtn(holdBtn)
    diceImage.hidden = true
    const playerNum = Math.ceil(Math.random() * 2)
    activePlayer = playerNum
    console.log(playerNum);
    activatePlayer(playerNum)

    player2CurScore.textContent =
        player1CurScore.textContent =
        player1TotalScore.textContent =
        player2TotalScore.textContent = 0
})

const activatePlayer = (playerNum) => {
        activePlayer = playerNum
        if (playerNum === 1) {
            player2Container.style.opacity = 0.5
            player2Container.style.background = '#cc6f6f'
            player1Container.style.background = '#ffd8d8'
            player1Container.style.opacity = 1
        } else {
            player1Container.style.opacity = 0.5
            player1Container.style.background = '#cc6f6f'
            player2Container.style.background = '#ffd8d8'
            player2Container.style.opacity = 1
        }
    }
    /*
    new game
    -hide dice image
    -randomly choose player 1 or 2
    - hide opposite player
    - turn all scores and current scores to 0
    */


holdBtn.addEventListener('click', (e) => {

        if (activePlayer === 1) {
            playr1TotalScore += Number(player1CurScore.textContent)
            player1TotalScore.textContent = playr1TotalScore
            player1CurScore.textContent = 0
            player1CurrentScore = 0
            activatePlayer(2)
            console.log(playr1TotalScore);
        } else {
            playr2TotalScore += Number(player2CurScore.textContent)
            player2TotalScore.textContent = playr2TotalScore
            player2CurScore.textContent = 0
            player2CurrentScore = 0
            activatePlayer(1)

            console.log(playr2TotalScore);
        }


    })
    /*
    hold

    - make  current score 0
    -update score = score + current score
    - hide current player
    - show opposite player
    */


rollDiceBtn.addEventListener('click', (e) => {
        const diceNum = Math.ceil(Math.random() * 6)
        console.log(diceNum);
        const imgName = 'dice-' + diceNum + '.jpg'
        diceImage.src = 'images/' + imgName
        diceImage.hidden = false
        if (diceNum === 1) {
            if (activePlayer === 1) {
                player1CurScore.textContent = 0
                activatePlayer(2)
            } else {
                player2CurScore.textContent = 0
                activatePlayer(1)
            }
        } else {
            if (activePlayer === 1) {

                console.log(`=========dice`, diceNum);
                player1CurrentScore += diceNum
                console.log(`=========current`, player1CurrentScore);
                player1CurScore.textContent = player1CurrentScore

            } else {

                console.log(`=========dice`, diceNum);
                player2CurrentScore += diceNum

                console.log(`======dice`, player1CurrentScore);
                player2CurScore.textContent = player2CurrentScore

            }
        }
    })
    /*
    roll a dice
    - random no. generate + number dice select + show dice image
    -if random no. = 1 then turn current score = 0 && switch player toggle

    -else current player score = currentscore + random no.


    */