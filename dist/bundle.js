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
/* harmony import */ var _monster__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./monster */ "./js/monster.js");


// import "../src/style.css";
// import "../src/index.html";


class Game {
    constructor() {

    }

    newGameCreate() {

    }
}

const newGame = new Game();

/***/ }),

/***/ "./js/monster.js":
/*!***********************!*\
  !*** ./js/monster.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Monster; });


class Monster {
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

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map