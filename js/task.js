"use strict";

const _ = require('lodash');
import {
    translateWordLibraru
} from "./wordLibraru";

export default class Task {
    constructor() {
        this.taskWindow = document.getElementById('taskWindowConteiner');
        this.task = document.getElementById('taskHeading');
        this.mathOperationsCollection = ['+', '-', '*', '/'];
        this.taskCollection = [this.mathTask, this.transateTask];
    }

    random() {
        this.taskRandomResult = this.taskCollection[_.random(0, this.taskCollection.length - 1)];
        this.taskRandomResult.call(this);
    }

    mathTask() {
        this.taskWindow.style.display = "flex";
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
        this.taskWindow.style.display = "flex";
        this.randomWord = Object.keys(translateWordLibraru)[_.random(0, Object.keys(translateWordLibraru).length - 1)];
        this.task.innerHTML = "Translate the word: " + '\"' + this.randomWord + '\"';
        this.transateTaskResult = translateWordLibraru[this.randomWord];
    }



    getTaskResult() {
        if (this.taskRandomResult === this.mathTask) {
            return this.taskExpressionResult;
        } else if (this.taskRandomResult === this.transateTask) {
            return this.transateTaskResult;
        }
    }

}