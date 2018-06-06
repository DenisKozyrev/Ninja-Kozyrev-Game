"use strict";


import Player from "./player";
import Monster from "./monster";
import Spell from "./spell";
import Task from "./task";

class Game {
    constructor() {
        this.player = new Player();
        this.monster = new Monster();
        this.spell = new Spell();
        this.task = new Task();
        this.newGameButton = document.querySelector('#newGameButton');
        this.newGameButtons = document.querySelector('#newGameButtons');
        this.checkinBlock = document.querySelector('#checkinBlock');
        this.playerProfilePage = document.getElementById('playerProfilePage');
        this.profileForm = document.getElementById('profileForm');
        this.playerFirstName = document.getElementById('playerFirstName');
        this.playerLastName = document.getElementById('playerLastName');
        // this.myCanvas = document.getElementById('myCanvas');
        this.gameFild = document.getElementById('gameFild');
        this.spellWindowConteiner = document.getElementById('spellWindowConteiner');
        this.attackSpellButton = document.getElementById('attackSpell');
        this.healingSpell = document.getElementById('healingSpell');
        this.taskInput = document.getElementById('taskInput');
        this.taskAnswerButton = document.getElementById('taskButton');
        this.taskForm = document.getElementById('taskForm');
        this.taskWindow = document.getElementById('taskWindowConteiner');
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
        })
        this.attackSpellButton.addEventListener('click', () => {
            this.spellWindowConteiner.style.display = "none";
            this.task.mathTask();
        });
        this.healingSpell.addEventListener('click', () => {
            this.spellWindowConteiner.style.display = "none";
            this.task.mathTask();
        });
        this.taskForm.addEventListener('click', () => {
            if (this.taskInput.value !== "") {
                this.taskSolve();
            }
            event.preventDefault();
        })
    }
    startGame() {
        this.playerProfilePage.style.display = "none";
        this.gameFild.style.display = "flex";
        this.player.playerRender();
        this.monster.monsterRender()
        setTimeout(() => {
            this.spell.spellRender();
        }, 2000)
    }

    taskSolve() {
        this.taskExpressionResult = this.task.getTaskResult();
        if (this.taskInput.value == this.taskExpressionResult) {
            this.taskWindow.style.display = "none";
            this.player.attack();
            setTimeout(() => {
                this.player.healhDecrease()
            }, 100)
        }
    }

}



const newGame = new Game();
newGame.newGameCreate();