"use script";
import { Player } from "./Player.js";
export class AudioPlayer extends Player {
    constructor({ brand, releaseYear }) {
        super({ brand, releaseYear });
    }
    play() {
        console.log("Playing audio");
    }
}
