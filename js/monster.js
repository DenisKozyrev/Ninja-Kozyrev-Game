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
        this.healthPoints = 100;
        this.healthPointsLine = 250;
        this.hpGreenLine = document.getElementById('monsterHpGreenLine');
        this.monsterBlock = document.getElementById('monsterBlock');
        this.monsterSpritesCollection = ['robot', 'dino', 'freeknight', 'cowgirl', 'jack'];
    }

    monsterRender() {
        this.fullNameBlock.innerHTML = this.nameCollection[0][_.random(0, this.nameCollection[0].length - 1)] + " " + this.nameCollection[1][_.random(0, this.nameCollection[1].length - 1)]; //+ " " + this.nameCollection[2][_.random(0, this.nameCollection[2].length - 1)]
        this.healthPointsBlock.innerHTML = `${this.healthPoints}hp`;
        this.hpGreenLine.classList.add('character-health-render');
        this.monsterSprite = this.monsterSpritesCollection[_.random(0, this.monsterSpritesCollection.length - 1)];
        this.monsterBlock.style.backgroundImage = `url('../images/monster-sprite/${this.monsterSprite}-idle.png')`;
        this.monsterBlock.classList.add('monster-idle');
    }

    attack() {}

    death() {

    }

    healthDecrease() {
        this.healthPoints -= 20;
        this.healthPointsLine -= 50;
        this.healthPointsBlock.innerHTML = `${this.healthPoints}hp`;
        this.hpGreenLine.style.width = `${this.healthPointsLine}px`;
    }

    healthIncrease() {
        this.healthPoints += 20;
        this.healthPointsLine += 50;
        this.healthPointsBlock.innerHTML = `${this.healthPoints}hp`;
        this.hpGreenLine.style.width = `${this.healthPointsLine}px`;
    }
}