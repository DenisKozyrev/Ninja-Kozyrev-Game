"use strict";

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
        this.newGameButton = document.querySelector('#newGameButton');
        this.newGameButtons = document.querySelector('#newGameButtons');
        this.checkinBlock = document.querySelector('#checkinBlock');
        this.playerProfilePage = document.getElementById('playerProfilePage');
        this.profileForm = document.getElementById('profileForm');
        this.playerFirstName = document.getElementById('playerFirstName');
        this.playerLastName = document.getElementById('playerLastName');
        this.gameFild = document.getElementById('gameFild');
        this.roundHeading = document.getElementById('roundHeading');
        this.roundCounter = 0;
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
        this.tableWindow = document.getElementById('tableWindow')
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
        })
        this.attackSpellButton.addEventListener('click', () => {
            this.spellWindowConteiner.style.display = "none";
            this.spellType = "attack";
            this.task.mathTask();
        });
        this.healingSpell.addEventListener('click', () => {
            this.spellWindowConteiner.style.display = "none";
            this.spellType = "health";
            this.task.mathTask();
        });
        this.taskForm.addEventListener('submit', () => {
            if (this.taskInput.value !== "") {
                this.taskSolveCheck();
            }
            event.preventDefault();
        })
    }

    startGame() {
        this.playerProfilePage.style.display = "none";
        this.gameFild.style.display = "flex";
        this.player.render();
        this.newRound()
    }

    newRound() {
        this.monster.healthPoints = 100;
        this.monster.healthPointsLine = 250;
        this.monster.hpGreenLine.style.width = '250px'
        this.roundHeading.innerHTML = `Round ${this.roundCounter + 1}`
        this.monsterSprite = this.monster.monsterSpritesCollection[_.random(0, this.monster.monsterSpritesCollection.length - 1)];
        this.monsterName = this.monster.nameCollection[0][_.random(0, this.monster.nameCollection[0].length - 1)] + " " + this.monster.nameCollection[1][_.random(0, this.monster.nameCollection[1].length - 1)]; //+ " " + this.nameCollection[2][_.random(0, this.nameCollection[2].length - 1)]
        this.monster.render(this.monsterSprite, this.monsterName);
    }

    taskSolveCheck() {
        this.taskExpressionResult = this.task.getTaskResult();
        if (this.spellType === "attack" && this.taskInput.value == this.taskExpressionResult) {
            this.taskWindow.style.display = "none";
            this.player.attack();
            setTimeout(() => {
                this.monster.healthDecrease();
                this.healthCheck()
            }, 1500);
        };
        if (this.spellType === "attack" && this.taskInput.value != this.taskExpressionResult) {
            this.taskWindow.style.display = "none";
            this.monster.attack();
            setTimeout(() => {
                this.player.healthDecrease()
                this.healthCheck()
            }, 1500)
        };
        if (this.spellType === "health" && this.playerHealthPoints.innerHTML !== "100hp" && this.taskInput.value == this.taskExpressionResult) {
            this.taskWindow.style.display = "none";
            setTimeout(() => {
                this.player.healthIncrease()
            }, 1500);
        };
        if (this.spellType === "health" && this.playerHealthPoints.innerHTML !== "100hp" && this.taskInput.value != this.taskExpressionResult && this.monsterHealthPoints.innerHTML !== "100hp") {
            this.taskWindow.style.display = "none";
            setTimeout(() => {
                this.monster.healthIncrease()
            }, 1500);
        };
        if (this.spellType === "health" && this.playerHealthPoints.innerHTML === "100hp" && this.monsterHealthPoints.innerHTML === "100hp") {
            this.taskWindow.style.display = "none";
        };
        if (this.spellType === "health" && this.playerHealthPoints.innerHTML !== "100hp" && this.taskInput.value != this.taskExpressionResult && this.monsterHealthPoints.innerHTML === "100hp") {
            this.taskWindow.style.display = "none";
        }
        if (this.spellType === "health" && this.playerHealthPoints.innerHTML === "100hp" && this.taskInput.value != this.taskExpressionResult && this.monsterHealthPoints.innerHTML !== "100hp") {
            this.taskWindow.style.display = "none";
            setTimeout(() => {
                this.monster.healthIncrease()
            }, 1500);
        };
    }

    healthCheck() {
        if (this.monster.healthPoints === 0) {
            this.newRound();
            this.roundCounter += 1;
        };
        if (this.player.healthPoints === 0) {
            this.showScorePage();
            this.roundCounter = 0;
        };
    }

    showScorePage() {
        this.gameFild.style.display = "none";
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

newGame.newGameCreate();