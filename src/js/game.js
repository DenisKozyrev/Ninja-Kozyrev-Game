"use strict";

const _ = require('lodash');

import Player from "./player";
import Monster from "./monster";
import Spell from "./spell";
import Task from "./task";
import Score from "./score";

class Game {
    constructor() {
        this.player = new Player();
        this.monster = new Monster();
        this.spell = new Spell();
        this.task = new Task();
        this.score = new Score();
        this.gameSoundtreck = new Audio('../src/assets/audio/gameSoundtreck.mp3');
        this.newGameButton = document.querySelector('#newGameButton');
        this.newGameButtons = document.querySelector('#newGameButtons');
        this.checkinBlock = document.querySelector('#checkinBlock');
        this.playerProfilePage = document.getElementById('playerProfilePage');
        this.profileForm = document.getElementById('profileForm');
        this.playerFirstName = document.getElementById('playerFirstName');
        this.playerLastName = document.getElementById('playerLastName');
        this.gameFild = document.getElementById('gameFild');
        this.roundHeading = document.getElementById('roundHeading');
        this.roundCounter;
        this.gameBackground = 0;
        this.spellType = "";
        this.chooseSpellButton = document.getElementById('chooseSpellButton');
        this.spellWindowConteiner = document.getElementById('spellWindowConteiner');
        this.attackSpellButton = document.getElementById('attackSpell');
        this.healingSpell = document.getElementById('healingSpell');
        this.playerHealthPoints = document.getElementById('playerHealthPoints');
        this.monsterHealthPoints = document.getElementById('monsterHealthPoints');
        this.taskInput = document.getElementById('taskInput');
        this.taskAnswerButton = document.getElementById('taskButton');
        this.taskForm = document.getElementById('taskForm');
        this.taskWindow = document.getElementById('taskWindowConteiner');
        this.tableWindow = document.getElementById('tableWindow');
        this.startAgainButton = document.getElementById('startAgainButton');
    }

    newGameCreate() {
        newGameButton.addEventListener('click', () => {
            this.newGameButtons.style.display = "none";
            this.checkinBlock.style.display = "block";
        });
        this.profileForm.addEventListener('submit', () => {
            if (this.playerFirstName.value != "" && this.playerLastName.value != "") {
                this.startGame();
            };
            event.preventDefault();
        });
        this.chooseSpellButton.addEventListener('click', () => {
            this.spell.spellRender();
        });
        this.attackSpellButton.addEventListener('click', () => {
            this.spellWindowConteiner.style.display = "none";
            this.spellType = "attack";
            this.task.random();
            this.taskInput.focus();
            if (this.task.taskRandomResult !== this.task.dragDropTask) {
                this.taskAnswerButton.disabled = true;
            }
        });
        this.healingSpell.addEventListener('click', () => {
            this.spellWindowConteiner.style.display = "none";
            this.spellType = "health";
            this.task.random();
            this.taskInput.focus();
            if (this.task.taskRandomResult !== this.task.dragDropTask) {
                this.taskAnswerButton.disabled = true;
            }
        });
        this.taskAnswerButton.addEventListener('click', () => {
            this.taskExpressionResult = this.task.getTaskResult();
            this.taskSolveCheck();
            this.taskInput.value = "";
            this.taskAnswerButton.disabled = true;
        });
        this.taskInput.addEventListener('keyup', (e) => {
            this.taskAnswerButton.disabled = this.taskInput.value === "";
            if (e.keyCode == 13) {
                this.taskExpressionResult = this.task.getTaskResult();
                if (this.taskInput.value !== "") {
                    this.taskSolveCheck();
                    this.taskInput.value = "";
                    this.taskAnswerButton.disabled = true;
                }
            }
        });
        this.startAgainButton.addEventListener('click', () => {
            this.tableWindow.style.display = "none";
            this.startGame();
        });
    }

    startGame() {
        this.gameSoundtreck.play();
        this.gameSoundtreck.loop = true;
        this.gameSoundtreck.volume = 0.8;
        this.playerProfilePage.style.display = "none";
        this.gameFild.style.display = "flex";
        this.roundCounter = 0;
        this.gameBackground = 0;
        this.player.healthPoints = 100;
        this.player.healthPointsLine = 250;
        this.player.hpGreenLine.style.width = '250px';
        this.player.render();
        this.newRound();
    }

    newRound() {
        if (this.gameBackground === 4) {
            this.gameBackground = 1;
        } else {
            this.gameBackground += 1;
        };
        this.spellWindowConteiner.style.display = "none";
        this.gameFild.classList.remove(`game-fild-background${this.gameBackground - 1}`)
        this.gameFild.classList.add(`game-fild-background${this.gameBackground}`);
        this.monster.healthPoints = 100;
        this.monster.healthPointsLine = 250;
        this.monster.hpGreenLine.style.width = '250px'
        this.roundHeading.innerHTML = `Round ${this.roundCounter + 1}`;
        this.monster.render();
    }

    taskSolveCheck() {
        if (this.spellType === "attack" && this.taskExpressionResult.includes(this.taskInput.value) === true) {
            this.taskWindow.style.display = "none";
            this.player.attack();
            this.spell.attackSpellAudioPlay();
            setTimeout(() => {
                this.monster.healthDecrease();
                this.monsterHealthCheck();
            }, 1100);
        };
        if (this.spellType === "attack" && this.taskExpressionResult.includes(this.taskInput.value) === false) {
            this.taskWindow.style.display = "none";
            this.monster.attack();
            this.spell.attackSpellAudioPlay();
            setTimeout(() => {
                this.player.healthDecrease();
                this.playerHealthCheck();
            }, 1100)
        };
        if (this.spellType === "health" && this.playerHealthPoints.innerHTML !== "100hp" && this.taskExpressionResult.includes(this.taskInput.value) === true) {
            this.taskWindow.style.display = "none";
            this.spell.healthAudioPlay();
            this.player.healthIncrease();
            this.player.health();
        };
        if (this.spellType === "health" && this.playerHealthPoints.innerHTML !== "100hp" && this.taskExpressionResult.includes(this.taskInput.value) === false && this.monsterHealthPoints.innerHTML !== "100hp") {
            this.taskWindow.style.display = "none";
            this.spell.healthAudioPlay();
            this.monster.healthIncrease();
            this.monster.health();
        };
        if (this.spellType === "health" && this.playerHealthPoints.innerHTML === "100hp" && this.monsterHealthPoints.innerHTML === "100hp") {
            this.taskWindow.style.display = "none";
        };
        if (this.spellType === "health" && this.playerHealthPoints.innerHTML !== "100hp" && this.taskExpressionResult.includes(this.taskInput.value) === false && this.monsterHealthPoints.innerHTML === "100hp") {
            this.taskWindow.style.display = "none";
        }
        if (this.spellType === "health" && this.playerHealthPoints.innerHTML === "100hp" && this.taskExpressionResult.includes(this.taskInput.value) === false && this.monsterHealthPoints.innerHTML !== "100hp") {
            this.taskWindow.style.display = "none";
            this.spell.healthAudioPlay();
            this.monster.healthIncrease();
            this.monster.health();
        };
    }

    playerHealthCheck() {
        if (this.player.healthPoints === 0) {
            this.player.dead();
            this.spell.deadAudioPlay();
            setTimeout(() => {
                this.showScorePage();
            }, 1000);
        } else {
            this.player.damage();
        };
    }

    monsterHealthCheck() {
        if (this.monster.healthPoints === 0) {
            this.monster.dead();
            this.spell.deadAudioPlay();
            setTimeout(() => {
                this.roundCounter += 1;
                this.newRound();
            }, 1000)
        } else {
            this.monster.damage();
        };
    }

    showScorePage() {
        this.gameFild.style.display = "none";
        this.spellWindowConteiner.style.display = "none";
        this.tableWindow.style.display = "flex";
        if (
            localStorage.hasOwnProperty(
                this.playerFirstName.value + " " + this.playerLastName.value
            )
        ) {
            if (
                this.roundCounter >=
                localStorage[this.playerFirstName.value + " " + this.playerLastName.value]
            ) {
                localStorage.setItem(
                    this.playerFirstName.value + " " + this.playerLastName.value,
                    this.roundCounter
                );
            }
        } else {
            localStorage.setItem(
                this.playerFirstName.value + " " + this.playerLastName.value,
                this.roundCounter
            );
        }
        this.score.render();
    }

}

const newGame = new Game();

window.addEventListener('load', () => {
    newGame.newGameCreate();
});