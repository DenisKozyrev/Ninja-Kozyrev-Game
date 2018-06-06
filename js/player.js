"use strict";
import Monster from "./monster";

export default class Player {
  constructor() {
    this.firstName = document.getElementById('playerFirstName');
    this.lastName = document.getElementById('playerLastName');
    this.playerBlock = document.getElementById('playerBlock');
    this.monster = new Monster();
    this.healthPoints = 100;

  }

  playerRender() {
    this.playerBlock.style.backgroundImage = "url('../images/ninja-sprites/player-idle.png')";
    this.playerBlock.classList.remove('player-attack');
    this.playerBlock.classList.add('player-idle');
  }

  attack() {
    this.playerBlock.style.backgroundImage = "url('../images/ninja-sprites/player-attack.png')";
    this.playerBlock.classList.remove('player-idle');
    this.playerBlock.classList.add('player-attack');
    setTimeout(() => {
      this.playerRender();
    }, 1500)
  }


  death() {}

  healhDecrease() {
    this.healthPoints -= 20;


    this.monster.monsterRender();
  }

  healhIncrease() {
    this.healthPoints += 20;
  }
}