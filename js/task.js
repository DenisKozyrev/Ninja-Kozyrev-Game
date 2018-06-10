"use strict";

const _ = require('lodash');

export default class Task {
    constructor() {
        this.taskWindow = document.getElementById('taskWindowConteiner');
        this.task = document.getElementById('taskHeading');
        this.mathOperationsCollection = ['+', '-', '*', '/'];
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
    }

    getTaskResult() {
        this.taskExpressionResult = eval(this.taskExpression);
        return this.taskExpressionResult;
    }

}