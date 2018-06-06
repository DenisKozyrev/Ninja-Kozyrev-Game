"use strict";

import Task from "./task";

export default class Spell {
    constructor() {
        this.spellWindowConteiner = document.getElementById('spellWindowConteiner');
    }
    spellRender() {
        this.spellWindowConteiner.style.display = "flex";
    }

}