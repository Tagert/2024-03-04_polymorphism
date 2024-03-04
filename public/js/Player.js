"use script";
export class Player {
    constructor({ brand, releaseYear }) {
        this.brand = brand;
        this.releaseYear = releaseYear;
    }
    play() {
        console.log("Press to play");
    }
}
