"use strict";

export default class Monster {
    constructor() {
        this.healthPoints = 100;
    }

    monsterRender() {
        this.canvas = document.getElementById("myCanvas");
        this.ctx = this.canvas.getContext("2d");
        this.ctx.font = "30px Arial";
        this.ctx.fillStyle = "#7f1691";
        this.ctx.fillText("monster", 1150, 80);
        this.ctx.fillText(`${this.healthPoints}hp`, 1160, 140);
        this.monsterSprite = new Image();
        this.monsterSprite.src = "../images/zombie-sprite/zombie_sprite-attack.png";
        this.monsterSprite.addEventListener("load", () => {
            this.ctx.drawImage(this.monsterSprite, 0, 0, 450, 519, 1055, 340, 280, 280);
        });
    }

    attack() {}

    death() {

    }

    healhDecrease() {
        this.healthPoints -= 20;
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.fillText(`${this.healthPoints}hp`, 1160, 140);
    }

    healhIncrease() {
        this.healthPoints += 20;
        this.ctx.clearRect(1160, 155, 100, -40);
        this.ctx.fillText(`${this.healthPoints}hp`, 1160, 140);
    }
}