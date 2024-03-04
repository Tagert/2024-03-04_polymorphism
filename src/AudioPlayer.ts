"use script";

import { Player, IPlayer, IPlay } from "./Player.js";

export class AudioPlayer extends Player implements IPlayer {
  constructor({ brand, releaseYear }: IPlayer) {
    super({ brand, releaseYear });
  }

  play() {
    console.log("Playing audio");
  }
}
