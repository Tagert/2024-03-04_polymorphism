"use strict";

import {
  IBuilding,
  IBuildingMethods,
  IHouseBuilding,
  IFlatBuilding,
} from "./interfaces.js";

// Classes:
abstract class Building implements IBuildingMethods {
  price: number;
  type: "House" | "Flat";
  yearFinished: number;

  constructor({ price, type, yearFinished }: IBuilding) {
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

  abstract enterHome(): void;

  abstract arrangeRenovateBuilding(): void;
}

export class HouseBuilding extends Building {
  yardArea: number;
  floors: number;

  constructor({ price, type, yearFinished, yardArea, floors }: IHouseBuilding) {
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
  floor: number;
  windowsDirection: string;

  constructor({
    price,
    type,
    yearFinished,
    floor,
    windowsDirection,
  }: IFlatBuilding) {
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
