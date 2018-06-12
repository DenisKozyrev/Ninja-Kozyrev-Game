"use strict";

const _ = require('lodash');
import {
    translateWordLibrary
} from "./wordTranslateLibrary";
import {
    listeningWordLibrary
} from "./wordListeningLibrary";

export default class Task {
    constructor() {
        this.taskWindowConteiner = document.getElementById('taskWindowConteiner');
        this.mediaBlock = document.getElementById('mediaBlock');
        this.task = document.getElementById('taskHeading');
        this.mathOperationsCollection = ['+', '-', '*', '/'];
        this.taskCollection = [this.mathTask, this.transateTask, this.listeningTask];
    }

    random() {
        this.taskRandomResult = this.taskCollection[_.random(0, this.taskCollection.length - 1)];
        this.taskRandomResult.call(this);
    }

    mathTask() {
        this.mediaBlock.innerHTML = "";
        this.taskWindowConteiner.style.display = "flex";
        this.mathOperationsCollectionIndex = _.random(0, this.mathOperationsCollection.length - 1);
        if (this.mathOperationsCollectionIndex === 3) {
            this.taskExpression = (_.random(0, 50) + _.random(0, 50)) + " " + "/" + " " + 2;
        } else if (this.mathOperationsCollectionIndex === 2) {
            this.taskExpression = _.random(0, 50) + " " + "*" + " " + 3;
        } else {
            this.taskExpression = _.random(0, 50) + " " + this.mathOperationsCollection[this.mathOperationsCollectionIndex] + " " + _.random(0, 50);
        }
        this.task.innerHTML = "Solve The Task: " + '\"' + this.taskExpression + '\"';
        this.taskExpressionResult = [String(eval(this.taskExpression))];
    }

    transateTask() {
        this.mediaBlock.innerHTML = "";
        this.taskWindowConteiner.style.display = "flex";
        this.randomWord = Object.keys(translateWordLibrary)[_.random(0, Object.keys(translateWordLibrary).length - 1)];
        this.task.innerHTML = "Translate the word: " + '\"' + this.randomWord + '\"';
        this.transateTaskResult = translateWordLibrary[this.randomWord];
    }

    listeningTask() {
        this.mediaBlock.innerHTML = "";
        this.taskWindowConteiner.style.display = "flex";
        this.task.innerHTML = '\"' + "Type what you heard" + '\"';
        this.audioWordBlock = document.createElement('audio');
        this.audioWordBlock.setAttribute('controls', '');
        this.mediaBlock.appendChild(this.audioWordBlock);
        this.randomAudioWord = Object.keys(listeningWordLibrary)[_.random(0, Object.keys(listeningWordLibrary).length - 1)];
        this.audioWordBlock.src = this.randomAudioWord;
        this.listeningTaskResult = listeningWordLibrary[this.randomAudioWord];
    }



    getTaskResult() {
        if (this.taskRandomResult === this.mathTask) {
            return this.taskExpressionResult;
        } else if (this.taskRandomResult === this.transateTask) {
            return this.transateTaskResult;
        } else if (this.taskRandomResult === this.listeningTask) {
            return this.listeningTaskResult;
        }
    }

}