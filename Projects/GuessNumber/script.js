const TryAgainBtn = document.querySelector(".try-again")
const guessedNumberStatus = document.querySelector('.right-column p')
const NumberGuessStatusText = document.querySelector(".large-font")
const correctNumberText = document.querySelector(".question-mark")
const guessNumberField = document.querySelector(".guessNumber")
const checkNumberBtn = document.querySelector('.check-button')
const roundScore = document.querySelector(".score")
const highScoreText = document.querySelector(".highscore")


let number = Math.ceil(Math.random() * 20)
let score = 20
let highScore = 0
highScoreText.textContent = highScore

const updateTryAgainBtn = (disabled) => {
    TryAgainBtn.disabled = disabled
    if (disabled) {
        TryAgainBtn.style.background = 'gray'
        TryAgainBtn.style.cursor = 'auto'
    } else {

        TryAgainBtn.style.background = ''
        checkNumberBtn.style.cursor = 'pointer'
    }
}

updateTryAgainBtn(disabled = true)
console.log(number);

checkNumberBtn.addEventListener('click', (e) => {
    if (!guessNumberField.value) {
        NumberGuessStatusText.textContent = "No Number!"
        NumberGuessStatusText.style.color = "red"
    } else if (guessNumberField.value != number) {
        incorrectGuess()
        gameLostUIUpdate(score)
    } else if (score >= 1) {
        gameWonUIUpdate()
    } else {
        gameLostUIUpdate()
    }

})
TryAgainBtn.addEventListener('click', (e) => {
    resetUIUpdate()
    updateTryAgainBtn(true)
})

const incorrectGuess = () => {
    guessedNumberStatus.textContent = guessNumberField.value > number ? "Number too high" : "Number too low"
    score--;
    roundScore.textContent = score
}
const disableNumberTextAndBtn = () => {
    guessNumberField.style.color = 'gray'
    guessNumberField.style.opacity = 0.8
    guessNumberField.disabled = true

    checkNumberBtn.style.background = 'gray'
    checkNumberBtn.disabled = true
    checkNumberBtn.style.cursor = 'auto'
}

const gameLostUIUpdate = (score) => {
    if (score < 1) {
        correctNumberText.textContent = number
        document.querySelector('body').style.background = '#ff4e4e'
        guessedNumberStatus.textContent = "Game Lost Try Again?"
        NumberGuessStatusText.textContent = "you lost the game"
        updateTryAgainBtn(false)
        disableNumberTextAndBtn()
    }
}
const gameWonUIUpdate = () => {
    guessedNumberStatus.textContent = "Correct Number"
    NumberGuessStatusText.textContent = "Correct Guess"
    correctNumberText.textContent = guessNumberField.value
    document.querySelector('body').style.background = '#6cff9b'
    score++;
    roundScore.textContent = score

    highScore = highScore < score ? score : highScore
    highScoreText.textContent = highScore
    disableNumberTextAndBtn()
    updateTryAgainBtn(false)
}
const resetUIUpdate = () => {
    number = Math.ceil(Math.random() * 20)
    console.log(number);
    score = 20
    guessNumberField.style.color = ''
    guessNumberField.style.opacity = 1
    guessNumberField.disabled = false
    guessNumberField.value = ''
    NumberGuessStatusText.style.color = 'black'
    checkNumberBtn.style.background = ''
    checkNumberBtn.disabled = false
    checkNumberBtn.style.cursor = 'pointer'

    correctNumberText.textContent = '?'
    document.querySelector('body').style.background = '#f0eee9'
    guessedNumberStatus.textContent = "Start Guessing:"
    NumberGuessStatusText.textContent = "Guess the Number!"
    roundScore.textContent = ''
}