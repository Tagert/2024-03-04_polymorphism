"use script";

import { Player, IPlayer, IPlay } from "./Player.js";

export class VideoPlayer extends Player implements IPlayer {
  constructor({ brand, releaseYear }: IPlayer) {
    super({ brand, releaseYear });
  }

  play() {
    // super.play();
    // calls the method of Player - play()
    console.log("Playing video");
  }
}
