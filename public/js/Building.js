"use strict";
// Classes:
class Building {
    constructor({ price, type, yearFinished }) {
        this.price = price;
        this.type = type;
        this.yearFinished = yearFinished;
    }
    contactSeller() {
        console.log("Call the seller");
    }
    buyProperty() {
        console.log("Real estate purchased");
    }
}
export class HouseBuilding extends Building {
    constructor({ price, type, yearFinished, yardArea, floors }) {
        super({ price, type, yearFinished });
        this.yardArea = yardArea;
        this.floors = floors;
    }
    enterHome() {
        console.log("Welcome to your new home.");
    }
    arrangeRenovateBuilding() {
        console.log("Call the company to renovate your new house");
    }
}
export class FlatBuilding extends Building {
    constructor({ price, type, yearFinished, floor, windowsDirection, }) {
        super({ price, type, yearFinished });
        this.floor = floor;
        this.windowsDirection = windowsDirection;
    }
    enterHome() {
        console.log("Welcome to your new flat.");
    }
    arrangeRenovateBuilding() {
        console.log("Call the company to renovate your new flat");
    }
}
