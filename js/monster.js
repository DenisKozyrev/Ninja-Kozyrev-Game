"use strict";

export default class Monster {
    constructor() {
        this.healthPoints = 100;
        this.monsterBlock = document.getElementById('monsterBlock');
    }

    monsterRender() {
        this.monsterBlock.style.backgroundImage = "url('../images/zombie-sprite/zombie_sprite-attack.png')"
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