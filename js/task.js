"use strict";
const _ = require('lodash');

export default class Task {
    constructor() {
        this.taskWindow = document.getElementById('taskWindowConteiner');
        this.task = document.getElementById('taskHeading');
        this.mathOperationsArr = ['+', '-', '*', '/'];
    }


    mathTask() {
        this.taskWindow.style.display = "flex";
        this.randomMathOperationsArrIndex = _.random(0, 3);
        if (this.randomMathOperationsArrIndex === 3) {
            this.taskExpression = (_.random(0, 50) + _.random(0, 50)) + " " + "/" + " " + 2;
        } else {
            this.taskExpression = _.random(0, 50) + " " + this.mathOperationsArr[this.randomMathOperationsArrIndex] + " " + _.random(0, 50);
        }
        this.task.innerHTML = "Solve The Task: " + '\"' + this.taskExpression + '\"';
    }

    getTaskResult() {
        this.taskExpressionResult = eval(this.taskExpression);
        return this.taskExpressionResult;
    }

}