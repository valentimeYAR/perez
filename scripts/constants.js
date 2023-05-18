const Constants = {
    firstScreen: document.querySelector('.first-screen'),
    timerBlock: document.querySelector('.timer-screen'),
    gameTitle: document.querySelector('#game-about'),
    mainScreen: document.querySelector('.main-screen'),
    resultScreen: document.querySelector('.result-screen'),
    time: document.querySelector('#time'),
    level: document.querySelector('#level'),
    bonus: document.querySelector('#bonus'),
    scores: document.querySelector('#scores'),
    resetBtn: document.querySelector("#reset"),
    colorValue: document.querySelector('#color-value'),
    colorName: document.querySelector('#color-name'),
    colorBlocks: document.querySelectorAll('.color-block'),
    yesBtn: document.querySelector('#color-yes'),
    noBtn: document.querySelector('#color-no'),
    rightScores: document.querySelector('#right'),
    resultScores: document.querySelector('#result'),
    accuracyScores: document.querySelector('#accuracy'),
    startButton: document.getElementById('start'),
    timer: document.getElementById('timer'),
    gameResult: false,
    gameTimer: 3,
    timerSeconds: 3,
    totalAttempts: 1,
    rightAttempts: 0,
    levelValue: 1,
    bonusValue: 1,
    colorsArray: ['blue', 'green', 'red', 'black'],
    wordsArray: ['Синий', 'Зелёный', 'Красный', 'Чёрный'],
    functions: {
        randomizerValue: function (wordsArray, colorsArray) {
            const randomValueColor1 = Math.floor(Math.random() * wordsArray.length);
            const randomNameColor1 = Math.floor(Math.random() * colorsArray.length);
            return {randomValueColor1, randomNameColor1};
        },
        randomizerValue2: function (wordsArray, colorsArray) {
            const randomValueColor2 = Math.floor(Math.random() * wordsArray.length);
            const randomNameColor2 = Math.floor(Math.random() * colorsArray.length);
            return {randomValueColor2, randomNameColor2};
        },
    }

};


export default Constants;