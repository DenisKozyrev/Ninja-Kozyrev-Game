"use strict";

const _ = require('lodash');

import {
    translateWordLibrary
} from "./wordTranslateLibrary";
import {
    listeningWordLibrary
} from "./wordListeningLibrary";
import {
    riddleLibrary
} from "./riddleLibrary";
import {
    dragDropLibrary
} from "./dragDropLibrary";

import {
    edibleInedibleLibrary
} from "./edibleInedibleLibrary";

import {
    capitalsLibrary
} from "./capitalsLibrary";


export default class Task {
    constructor() {
        this.taskWindowConteiner = document.getElementById('taskWindowConteiner');
        this.mediaBlock = document.getElementById('mediaBlock');
        this.task = document.getElementById('taskHeading');
        this.taskInput = document.getElementById('taskInput');
        this.taskCollection = [this.mathTask, this.transateTask, this.listeningTask, this.riddleTask, this.dragDropTask, this.edibleInedibleTask, this.capitalsTask];
    }

    random() {
        this.taskRandomResult = this.taskCollection[_.random(0, this.taskCollection.length - 1)];
        this.taskRandomResult.call(this);
    }

    mathTask() {
        this.mediaBlock.innerHTML = "";
        this.taskInput.style.visibility = 'visible';
        this.taskWindowConteiner.style.display = "flex";
        this.mathOperationsCollection = ['+', '-', '*', '/'];
        this.task.style.fontSize = "40px"
        this.mathOperationsCollectionIndex = _.random(0, this.mathOperationsCollection.length - 1);
        if (this.mathOperationsCollectionIndex === 3) {
            this.taskExpression = (_.random(0, 50) + _.random(0, 50)) + " " + "/" + " " + 2;
        } else if (this.mathOperationsCollectionIndex === 2) {
            this.taskExpression = _.random(0, 50) + " " + "*" + " " + 3;
        } else {
            this.taskExpression = _.random(0, 50) + " " + this.mathOperationsCollection[this.mathOperationsCollectionIndex] + " " + _.random(0, 50);
        }
        this.task.innerHTML = "Solve The Task:<br>" + '\"' + this.taskExpression + '\"';
        this.taskExpressionResult = String(eval(this.taskExpression));
    }

    transateTask() {
        this.mediaBlock.innerHTML = "";
        this.taskInput.style.visibility = 'visible';
        this.taskWindowConteiner.style.display = "flex";
        this.task.style.fontSize = "40px"
        this.randomWord = Object.keys(translateWordLibrary)[_.random(0, Object.keys(translateWordLibrary).length - 1)];
        this.task.innerHTML = "Translate a word into Russian:<br>" + " " + '\"' + this.randomWord + '\"';
        this.transateTaskResult = translateWordLibrary[this.randomWord];
    }

    listeningTask() {
        this.mediaBlock.innerHTML = "";
        this.taskInput.style.visibility = 'visible';
        this.taskWindowConteiner.style.display = "flex";
        this.task.innerHTML = '\"' + "Type what you heard" + '\"';
        this.audioWordBlock = document.createElement('audio');
        this.audioWordBlock.setAttribute('controls', '');
        this.task.style.fontSize = "40px"
        this.mediaBlock.appendChild(this.audioWordBlock);
        this.randomAudioWord = Object.keys(listeningWordLibrary)[_.random(0, Object.keys(listeningWordLibrary).length - 1)];
        this.audioWordBlock.src = this.randomAudioWord;
        this.listeningTaskResult = listeningWordLibrary[this.randomAudioWord];
    }

    riddleTask() {
        this.mediaBlock.innerHTML = "";
        this.taskInput.style.visibility = 'visible';
        this.taskWindowConteiner.style.display = "flex";
        this.randomRiddle = Object.keys(riddleLibrary)[_.random(0, Object.keys(riddleLibrary).length - 1)];
        this.task.innerHTML = "Guess a riddle:<br>" + " " + '\"' + this.randomRiddle + '\"';
        this.task.style.fontSize = "30px"
        this.riddleTaskResult = riddleLibrary[this.randomRiddle];
    }

    dragDropTask() {
        this.mediaBlock.innerHTML = "";
        this.taskInput.style.visibility = 'hidden';
        this.taskWindowConteiner.style.display = "flex";
        this.task.innerHTML = "Arrange in the right order";
        this.dragDropRandomWord = Object.keys(dragDropLibrary)[_.random(0, Object.keys(dragDropLibrary).length - 1)];
        this.dragDropRandomWordLetters = this.dragDropRandomWord.split('').sort(function () {
            return Math.random() - 0.5;
        });;
        this.dragDropRandomWordLetters.forEach((letter) => {
            this.letterBlock = document.createElement('div');
            this.letterBlock.classList.add('dd-letter-blocks');
            this.letterBlock.innerHTML = letter;
            this.mediaBlock.appendChild(this.letterBlock);
        });
        $(function () {
            $('#mediaBlock').sortable();
            $('#mediaBlock').disableSelection();
        });
        this.dragDropTaskResult = dragDropLibrary[this.dragDropRandomWord];
    }

    edibleInedibleTask() {
        this.mediaBlock.innerHTML = "";
        this.taskInput.style.visibility = 'visible';
        this.taskWindowConteiner.style.display = "flex";
        this.task.innerHTML = "Enter name of an edible item";
        this.randomEdibleItem = Object.keys(edibleInedibleLibrary)[_.random(0, Object.keys(edibleInedibleLibrary).length - 1)];
        edibleInedibleLibrary[this.randomEdibleItem].forEach((elem) => {
            this.edableImage = document.createElement('img');
            this.edableImage.src = elem;
            this.mediaBlock.appendChild(this.edableImage);
        });
        this.edibleInedibleResult = [this.randomEdibleItem];
    }

    capitalsTask() {
        this.mediaBlock.innerHTML = "";
        this.mediaBlock.innerHTML = "";
        this.taskInput.style.visibility = 'visible';
        this.taskWindowConteiner.style.display = "flex";
        this.task.innerHTML = "Enter the capital of this country";
        this.randomEdibleItem = Object.keys(capitalsLibrary)[_.random(0, Object.keys(capitalsLibrary).length - 1)];
        this.countryFlagImg = document.createElement('img');
        this.countryFlagImg.src = this.randomEdibleItem;
        this.mediaBlock.appendChild(this.countryFlagImg);
        this.capitalsTaskResult = capitalsLibrary[this.randomEdibleItem];
    }


    getTaskResult() {
        if (this.taskRandomResult === this.mathTask) {
            return this.taskExpressionResult;
        } else if (this.taskRandomResult === this.transateTask) {
            return this.transateTaskResult;
        } else if (this.taskRandomResult === this.listeningTask) {
            return this.listeningTaskResult;
        } else if (this.taskRandomResult === this.riddleTask) {
            return this.riddleTaskResult;
        } else if (this.taskRandomResult === this.dragDropTask) {
            this.dragDropLetters = document.querySelectorAll('.dd-letter-blocks');
            this.dragDropInput = "";
            this.dragDropLetters.forEach((letterBlock) => {
                this.dragDropInput = this.dragDropInput + letterBlock.innerHTML;
            });
            this.taskInput.value = this.dragDropInput;
            return this.dragDropTaskResult;
        } else if (this.taskRandomResult === this.edibleInedibleTask) {
            return this.edibleInedibleResult;
        } else if (this.taskRandomResult === this.capitalsTask) {
            return this.capitalsTaskResult;
        }
    }
}