import Constants from './constants.js';

Constants.startButton.addEventListener('click', () => {
    Constants.firstScreen.style.display = 'none'
    Constants.timerBlock.style.visibility = 'visible'
    const interval = setInterval(() => {
        Constants.timerSeconds -= 1;
        Constants.timer.innerText = Constants.timerSeconds;
        if (Constants.timerSeconds === 0) {
            clearInterval(interval)
            Constants.timerBlock.style.display = 'none'
            Constants.mainScreen.style.visibility = 'visible'
            gameTimerFunction()
            game()
            if (Constants.mainScreen.style.visibility === 'visible') {
                Constants.gameTitle.classList.add('animateTitle')
                Array.from(Constants.colorBlocks).map(el => el.classList.add('animateColorBlock'))
            }
        }
    }, 1000)
})

const game = () => {
    const {
        randomValueColor1,
        randomNameColor1
    } = Constants.functions.randomizerValue(Constants.wordsArray, Constants.colorsArray);
    const {
        randomValueColor2,
        randomNameColor2
    } = Constants.functions.randomizerValue2(Constants.wordsArray, Constants.colorsArray)

    Constants.colorValue.innerText = Constants.wordsArray[randomValueColor1];
    Constants.colorValue.style.color = Constants.colorsArray[randomNameColor1];

    Constants.colorName.innerText = Constants.wordsArray[randomValueColor2];
    Constants.colorName.style.color = Constants.colorsArray[randomNameColor2];

    const color = Constants.colorsArray.indexOf(Constants.colorName.style.color)
    const value = Constants.wordsArray.indexOf(Constants.colorValue.innerText)
    if (color !== value) {
        Constants.gameResult = false
    } else if (color === value) {
        Constants.gameResult = true
    }
};

const gameTimerFunction = () => {
    const interval = setInterval(function () {
        Constants.gameTimer -= 1
        Constants.time.innerText = Constants.gameTimer + ' сек'
        if (Constants.gameTimer === 0) {
            clearInterval(interval)
        }
    }, 1000)
}
let scoresValue = 0;
Constants.yesBtn.addEventListener('click', () => {
    if (Constants.gameTimer === 0) {
        resultInfo();
    }
    if (Constants.gameResult === true) {
        Constants.rightAttempts += 1;
        Constants.levelValue += 1;
        Constants.level.innerText = Constants.levelValue;

        if (Constants.levelValue >= 9) {
            Constants.bonusValue = 3;
        } else if (Constants.levelValue >= 6) {
            Constants.bonusValue = 2;
        } else if (Constants.levelValue >= 3) {
            Constants.bonusValue = 1.5;
        } else {
            Constants.bonusValue = 1;
        }

        scoresValue += Constants.bonusValue * 100;
        Constants.bonus.innerText = Constants.bonusValue;
        Constants.scores.innerText = scoresValue;
    } else {
        scoresValue -= 400;
        Constants.scores.innerText = scoresValue;
    }

    Constants.totalAttempts += 1;
    game();
});
Constants.noBtn.addEventListener('click', () => {
    if (Constants.gameTimer === 0) {
        resultInfo();
    }
    if (Constants.gameResult === false) {
        Constants.rightAttempts += 1;
        Constants.levelValue += 1;
        Constants.level.innerText = Constants.levelValue;

        if (Constants.levelValue >= 9) {
            Constants.bonusValue = 3;
        } else if (Constants.levelValue >= 6) {
            Constants.bonusValue = 2;
        } else if (Constants.levelValue >= 3) {
            Constants.bonusValue = 1.5;
        } else {
            Constants.bonusValue = 1;
        }

        scoresValue += Constants.bonusValue * 100;
        Constants.bonus.innerText = Constants.bonusValue;
        Constants.scores.innerText = scoresValue;
    } else {
        scoresValue -= 400;
        Constants.scores.innerText = scoresValue;
    }
    Constants.totalAttempts += 1;
    game();
})

Constants.resetBtn.addEventListener('click', () => {
    location.reload()
    window.scrollTo(0, 0)
})

const resultInfo = () => {
    Constants.mainScreen.style.visibility = 'hidden'
    Constants.mainScreen.style.display = 'none'
    Constants.resultScreen.style.visibility = 'visible'
    Constants.resultScores.innerText = scoresValue
    Constants.rightScores.innerText = Constants.rightAttempts + ' из ' + Constants.totalAttempts
    Constants.accuracyScores.innerText = Math.floor((Constants.rightAttempts / Constants.totalAttempts) * 100) + " %"
}