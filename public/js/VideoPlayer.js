"use script";
import { Player } from "./Player.js";
export class VideoPlayer extends Player {
    constructor({ brand, releaseYear }) {
        super({ brand, releaseYear });
    }
    play() {
        // super.play();
        // calls the method of Player - play()
        console.log("Playing video");
    }
}
