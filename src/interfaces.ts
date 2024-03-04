"use strict";

export interface IDrivable {
  drive(): boolean;
}

export interface IRefillable {
  refuel(): void;
}

export interface IParkedStatus {
  isParked: boolean;
}
