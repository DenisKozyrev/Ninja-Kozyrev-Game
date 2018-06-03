"use strict";

export default class User {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = this.firstName + " " + this.lastName;
    }

    characterRender(spritesImgNumber) {
        this.canvas = document.getElementById("myCanvas");
        this.ctx = this.canvas.getContext("2d");
        this.hp = 100
        this.ctx.font = "30px Arial";
        this.ctx.fillStyle = "#7f1691";
        this.ctx.fillText(`${this.fullName}`, 150, 80);
        this.a = this.ctx.fillText(`${this.hp}hp`, 200, 120);
        this.userSprite = new Image();
        this.userSprite.src = "../sprites/ninja-sprites/attack-sprites.png";
        this.userSprite.addEventListener('load', () => {
            this.ctx.drawImage(this.userSprite, 0, 0, 556, 495, 100, 350, 300, 300)
        })
    }

    attack() {
        this.spriteXCoordinate = 556;
        this.canvasXCoordinate = 230;
        this.clearRXCoordinate = 100;
        this.g = setInterval(() => {
            this.ctx.clearRect(this.clearRXCoordinate, 350, 556, 495);
            this.ctx.drawImage(this.userSprite, this.spriteXCoordinate, 0, 556, 495, this.canvasXCoordinate, 350, 300, 300);
            this.spriteXCoordinate += 556;
            this.canvasXCoordinate += 130;
            this.clearRXCoordinate += 100;
        }, 40)

        setTimeout(() => {
            clearInterval(this.g)
            this.ctx.clearRect(this.clearRXCoordinate, 350, 556, 495);
            this.ctx.drawImage(this.userSprite, 0, 0, 556, 495, 100, 350, 300, 300)
            this.healhChanging()
        }, 240)
    }

    healhChanging() {
        this.hp -= 10;
        this.ctx.clearRect(200, 130, 100, -40);
        this.ctx.fillText(`${this.hp}hp`, 200, 120);
    }
}
const newUser = new User("Denis", "Kozyrev");
newUser.characterRender(9);
setTimeout(() => {
    newUser.attack()
}, 1000)