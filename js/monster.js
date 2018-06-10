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

    render(monsterSprite, monsterName) {
        this.monsterName = monsterName;
        this.monsterSprite = monsterSprite;
        this.fullNameBlock.innerHTML = this.monsterName;
        this.healthPointsBlock.innerHTML = `${this.healthPoints}hp`;
        if (this.healthPoints === 100) {
            this.hpGreenLine.classList.add('character-health-render');
        }
        this.monsterBlock.style.backgroundImage = `url('../images/monster-sprites/${this.monsterSprite}-idle.png')`;
        this.monsterBlock.classList.remove('monster-attack');
        this.monsterBlock.classList.remove('monster-dead');
        this.monsterBlock.classList.add('monster-idle');
    }

    attack() {
        this.monsterBlock.classList.add('monster-attack');
        this.monsterBlock.classList.remove('monster-idle');
        this.monsterBlock.style.backgroundImage = `url('../images/monster-sprites/${this.monsterSprite}-attack.png')`;
        setTimeout(() => {
            this.render(this.monsterSprite, this.monsterName);
        }, 1500)
    }

    dead() {
        this.monsterBlock.classList.add('monster-dead');
        this.monsterBlock.classList.remove('monster-idle');
        this.monsterBlock.style.backgroundImage = `url('../images/monster-sprites/${this.monsterSprite}-dead.png')`;
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