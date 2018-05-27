"use strict";

export default class User {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = this.firstName + " " + this.lastName;
    }

    userCharacterMaking(userCharacterSprite, spriteWidth, spriteHeight) {
        this.userCharacterImg = new Image()
        this.userCharacterImg.width = spriteWidth;
        this.userCharacterImg.height = spriteHeight;
        this.userCharacterImg.src = `../sprites/UserSprites/${userCharacterSprite}.png`;
        document.body.appendChild(this.userCharacterImg);
    }
    userCharacterAttack(spritesImgNumber) {
        this.spritesImgNumber = spritesImgNumber;
        this.spriteActive = setInterval(() => {
            this.userCharacterImg.src = `../sprites/UserSprites/Attack__00${this.spritesImgNumber}.png`;
            if (this.spritesImgNumber == 9) {
                this.spritesImgNumber = 0
            } else {
                this.spritesImgNumber += 1;
            }
        }, 80)
        setInterval(() => {
            clearInterval(this.spriteActive)
        }, 1600)
    }
}

const newUser = new User('Denis', 'Kozyrev');
newUser.userCharacterMaking("Attack__000", 300, 300);
newUser.userCharacterAttack(1);