/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/game.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/game.js":
/*!********************!*\
  !*** ./js/game.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user */ "./js/user.js");


// import "../src/style.css";
// import "../src/index.html";

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

/***/ }),

/***/ "./js/user.js":
/*!********************!*\
  !*** ./js/user.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return User; });


class User {
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

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map