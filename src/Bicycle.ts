"use strict";

import { IDrivable } from "./interfaces.js";

export class Bicycle implements IDrivable {
  drive() {
    return true;
  }

  lock() {
    console.log("Locked");
  }
}
