"use strict";

import Monster from "./monster";

export default class Player {
  constructor() {
    this.firstName = document.getElementById('playerFirstName');
    this.lastName = document.getElementById('playerLastName');
    this.fullNameBlock = document.getElementById('playerName');
    this.playerBlock = document.getElementById('playerBlock');
    this.healthPointsBlock = document.getElementById('playerHealthPoints');
    this.hpGreenLine = document.getElementById('playerHpGreenLine');
    this.healthPoints = 100;
    this.healthPointsLine = 250;
    this.monster = new Monster();
  }

  render() {
    this.fullNameBlock.innerHTML = this.firstName.value + " " + this.lastName.value;
    this.healthPointsBlock.innerHTML = `${this.healthPoints}hp`;
    this.hpGreenLine.classList.add('character-health-render');
    this.playerBlock.style.backgroundImage = "url('../images/ninja-sprites/player-idle.png')";
    this.playerBlock.classList.remove('player-attack');
    this.playerBlock.classList.add('player-idle');
  }

  attack() {
    this.playerBlock.style.backgroundImage = "url('../images/ninja-sprites/player-attack.png')";
    this.playerBlock.classList.remove('player-idle');
    this.playerBlock.classList.add('player-attack');
    setTimeout(() => {
      this.render();
    }, 1500)
  }

  death() {}

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