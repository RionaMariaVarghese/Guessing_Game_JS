var randNumber = Math.floor(Math.random() * 20) + 1;
console.log(randNumber);

const textBox = document.getElementsByClassName('guess')[0];
const message = document.getElementsByClassName('message')[0];
const reset = document.getElementsByClassName('again')[0];
const ansCheck = document.getElementsByClassName('check')[0];
const score = document.getElementsByClassName('score')[0];
const highScore = document.getElementsByClassName('highscore')[0];
const guessBox = document.getElementsByClassName('number')[0];
const bodyTag = document.getElementsByTagName('body')[0];

// Answer Check Funtion
ansCheck.onclick = () => {
    var textValue = Number(textBox.value);

    // Limit Checking of Input Values
    if (textValue > 20 || textValue < 1) {
        message.textContent = "Enter number between 1-20";
    }

    // The Guessing Logic
    else if (textValue === randNumber) {
        message.textContent = "Your Guess was right!";
        highScore.textContent = (highScore.textContent > score.textContent) ? highScore.textContent : score.textContent;
        guessBox.textContent = randNumber;
        bodyTag.style.backgroundColor = '#60b347';
    }

    else {
        const currScore = document.getElementsByClassName('score')[0];
        currScore.textContent = Number(currScore.textContent) - 1;

        if (textValue > randNumber) {
            message.textContent = "Too High!";
        } else if (textValue < randNumber) {
            message.textContent = "Too Low!";
        }
    }
}


// Reset the Game
reset.onclick = () => {
    randNumber = Math.floor(Math.random() * 20) + 1;

    const bodyTag = document.getElementsByTagName('body')[0];
    const guessBox = document.getElementsByClassName('number')[0];
    const score = document.getElementsByClassName('score')[0];

    guessBox.textContent = "?";
    score.textContent = "20";
    message.textContent = "Start guessing...";
    textBox.value = "";
    bodyTag.style.backgroundColor = '#222';
}