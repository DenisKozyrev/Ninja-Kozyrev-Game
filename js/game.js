"use strict";

// import "../src/style.css";
// import "../src/index.html";
import User from "./user";
class Game {
    constructor() {

    }

    newGameCreate() {
        let newGameButton = document.querySelector('#newGameButton');
        let newGameButtons = document.querySelector('#newGameButtons');
        let checkinBlock = document.querySelector('#checkinBlock');
        newGameButton.addEventListener('click', () => {
            checkinBlock.style.display = "block";
            newGameButtons.style.display = "none";
        })
    }
}

const newGame = new Game();

newGame.newGameCreate();