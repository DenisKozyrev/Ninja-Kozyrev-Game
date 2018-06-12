"use strict";

const _ = require('lodash');

export default class Monster {
    constructor() {
        this.fullNameBlock = document.getElementById('monsterName');
        this.nameCollection = [
            ['Slyunyavyiy', 'Moydodyirnyiy', 'Zlovonnyiy', 'Podmyishachnyiy', 'Podnozhnyiy'],
            ['Giperslizen', 'Kamnezmey', 'Tigrokruis', 'Svinozayats', 'Zloboglaz'],
            ['Artem', 'Denis', 'Andrey', 'Yura', 'Vanya']
        ];
        this.healthPointsBlock = document.getElementById('monsterHealthPoints');
        this.healthPoints = 0;
        this.healthPointsLine = 0;
        this.hpGreenLine = document.getElementById('monsterHpGreenLine');
        this.monsterBlock = document.getElementById('monsterBlock');
        this.monsterSpritesCollection = ['robot', 'dino', 'freeknight', 'jack', 'dog', 'cat'];
    }

    render() {
        this.monsterSprite = this.monsterSpritesCollection[_.random(0, this.monsterSpritesCollection.length - 1)];
        this.monsterName = this.nameCollection[0][_.random(0, this.nameCollection[0].length - 1)] + " " + this.nameCollection[1][_.random(0, this.nameCollection[1].length - 1)] + " " + this.nameCollection[2][_.random(0, this.nameCollection[2].length - 1)];
        this.fullNameBlock.innerHTML = this.monsterName;
        this.healthPointsBlock.innerHTML = `${this.healthPoints}hp`;
        if (this.healthPoints === 100) {
            this.hpGreenLine.classList.add('character-health-render');
        }
        this.monsterBlock.classList.add(`${this.monsterSprite}-idle-sprite`);
        this.monsterBlock.classList.remove('monster-damage-animation');
        this.monsterBlock.classList.remove('monster-attack-animation');
        this.monsterBlock.classList.remove('monster-dead-animation');
        this.monsterBlock.classList.add('monster-idle-animation');
    }

    attack() {
        this.monsterBlock.classList.add('monster-attack-animation');
        this.monsterBlock.classList.remove('monster-idle-animation');
        this.monsterBlock.classList.remove(`${this.monsterSprite}-idle-sprite`);
        this.monsterBlock.classList.add(`${this.monsterSprite}-attack-sprite`);
        setTimeout(() => {
            this.monsterBlock.classList.remove(`${this.monsterSprite}-attack-sprite`);
            this.monsterBlock.classList.add(`${this.monsterSprite}-idle-sprite`);
            this.monsterBlock.classList.remove('monster-attack-animation');
            this.monsterBlock.classList.add('monster-idle-animation');
        }, 1500)
    }

    damage() {
        this.monsterBlock.classList.remove(`${this.monsterSprite}-idle-sprite`);
        this.monsterBlock.classList.add(`${this.monsterSprite}-damage-sprite`);
        this.monsterBlock.classList.remove('monster-idle-animation');
        this.monsterBlock.classList.add('monster-damage-animation');
        setTimeout(() => {
            this.monsterBlock.classList.remove(`${this.monsterSprite}-damage-sprite`);
            this.monsterBlock.classList.add(`${this.monsterSprite}-idle-sprite`);
            this.monsterBlock.classList.remove('monster-damage-animation');
            this.monsterBlock.classList.add('monster-idle-animation');
        }, 200)
    }

    dead() {
        this.monsterBlock.classList.add('monster-dead-animation');
        this.monsterBlock.classList.remove('monster-idle-animation');
        this.monsterBlock.classList.remove(`${this.monsterSprite}-idle-sprite`);
        this.monsterBlock.classList.add(`${this.monsterSprite}-dead-sprite`);
        setTimeout(() => {
            this.monsterBlock.classList.remove(`${this.monsterSprite}-dead-sprite`);
        }, 1000)
    }

    healthDecrease() {
        this.healthPoints -= 20;
        this.healthPointsLine -= 50;
        this.healthPointsBlock.innerHTML = `${this.healthPoints}hp`;
        this.hpGreenLine.style.width = `${this.healthPointsLine}px`;
        this.hpGreenLine.classList.remove('character-health-render');
    }

    healthIncrease() {
        this.healthPoints += 20;
        this.healthPointsLine += 50;
        this.healthPointsBlock.innerHTML = `${this.healthPoints}hp`;
        this.hpGreenLine.style.width = `${this.healthPointsLine}px`;
    }

}