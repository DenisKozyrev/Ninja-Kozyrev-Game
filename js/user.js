"use strict";

export default class User {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = this.firstName + " " + this.lastName;
    }

    characterRender(spritesImgNumber) {
        this.characterSprite = document.querySelector('#userSprite');
        this.characterName = document.querySelector('#characterName');
        this.characterName.innerHTML = this.fullName;
        this.characterSprite.src = `../sprites/UserSprites/Attack__00${spritesImgNumber}.png`;

    }
    attack() {
        this.spritesImgNumber = 0;
        this.characterSprite = document.querySelector('#userSprite');
        this.spriteActive = setInterval(() => {
            this.characterSprite.src = `../sprites/UserSprites/Attack__00${this.spritesImgNumber}.png`
            if (this.spritesImgNumber == 9) {
                this.spritesImgNumber = 0
            } else {
                this.spritesImgNumber += 1;
            }
        }, 70)
        setTimeout(() => {
            clearInterval(this.spriteActive)
        }, 700)
    }

    healhChanging() {
        const userHealthPoints = document.querySelector('#userHealthPoints');
        let hpNumber = 100;
        setTimeout(() => {
            userHealthPoints.innerHTML = `${hpNumber - 10}hp`;
            hpNumber -= 10;
        }, 1000)
    }
}

const newUser = new User('Denis', 'Kozyrev');
newUser.characterRender(9)
newUser.attack();
newUser.healhChanging()