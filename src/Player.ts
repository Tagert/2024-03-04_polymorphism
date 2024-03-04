"use script";

export interface IPlayer {
  brand: string;
  releaseYear: number;
}

export interface IPlay {
  play(): void;
}

export class Player implements IPlayer, IPlay {
  brand: string;
  releaseYear: number;

  constructor({ brand, releaseYear }: IPlayer) {
    this.brand = brand;
    this.releaseYear = releaseYear;
  }

  play() {
    console.log("Press to play");
  }
}
