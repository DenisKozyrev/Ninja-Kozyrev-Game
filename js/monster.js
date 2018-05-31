"use strict";

export default class Monster {
    constructor(name, body, health) {
        this.name = name;
        this.body = body;
        this.health = health;
    }
    magicShooting() {

    }

    monsterRender(spritesImgNumber) {
        const characterSprite = document.querySelector('#monsterSprite');
        characterSprite.src = `../sprites/zombie-sprite/male/Attack(${spritesImgNumber}).png`
    }
    attack() {
        this.spritesImgNumber = 1;
        this.characterSprite = document.querySelector('#monsterSprite');
        this.spriteActive = setInterval(() => {
            this.characterSprite.src = `../sprites/zombie-sprite/male/Attack(${this.spritesImgNumber}).png`
            if (this.spritesImgNumber == 8) {
                this.spritesImgNumber = 1
            } else {
                this.spritesImgNumber += 1;
            }
        }, 70)
        setTimeout(() => {
            clearInterval(this.spriteActive)
        }, 1400)
    }
}

const monster = new Monster();
monster.monsterRender(1);
// monster.attack();