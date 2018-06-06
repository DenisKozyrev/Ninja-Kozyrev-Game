"use strict";
import Monster from "./monster";

export default class Player {
  constructor() {
    this.firstName = document.getElementById('playerFirstName');
    this.lastName = document.getElementById('playerLastName');
    this.monster = new Monster();
    this.healthPoints = 100;
    this.animateTimes = 0;
    this.spriteXCoordinate = 0;
    this.spriteYCoordinate = 0;
    this.canvasXCoordinate = 100;
  }

  playerRender() {
    this.canvas = document.getElementById("myCanvas");
    this.ctx = this.canvas.getContext("2d");
    this.ctx.font = "30px Arial";
    this.ctx.fillStyle = "#7f1691";
    this.ctx.fillText(`${this.firstName.value + " " + this.lastName.value}`, 150, 80);
    this.ctx.fillText(`${this.healthPoints}hp`, 200, 150);
    this.userSprite = new Image();
    this.userSprite.src = "../images/ninja-sprites/attack.png";
    this.userSprite.addEventListener("load", () => {
      this.ctx.drawImage(this.userSprite, this.spriteXCoordinate, this.spriteYCoordinate, 556, 495, this.canvasXCoordinate, 350, 300, 300);
    });
  }

  attack() {
    this.attackAnimation = setInterval(() => {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.spriteXCoordinate += 556;
      this.canvasXCoordinate += 45;
      this.playerRender(this.spriteXCoordinate, this.canvasXCoordinate);
      this.monster.monsterRender();
      this.animateTimes += 1;
      if (this.animateTimes == 10) {
        this.spriteXCoordinate = 0;
        this.spriteYCoordinate = 550;
      } else if (this.animateTimes == 20) {
        clearInterval(this.attackAnimation)
        this.spriteXCoordinate = 0;
        this.spriteYCoordinate = 0;
        this.canvasXCoordinate = 100;
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.playerRender();
        this.monster.monsterRender();
      }
    }, 60)
  }


  death() {}

  healhDecrease() {
    this.healthPoints -= 20;
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.playerRender(0, 100);
    this.monster.monsterRender();
  }

  healhIncrease() {
    this.healthPoints += 20;
    this.ctx.clearRect(200, 160, 100, -40);
    this.ctx.fillText(`${this.healthPoints}hp`, 200, 120);
  }
}