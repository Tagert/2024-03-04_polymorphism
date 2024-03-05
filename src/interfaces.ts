"use strict";

import { Job } from "./Person";

//================== Task 1 & Polymorphism, interface   ==================
export interface IDrivable {
  drive(): boolean;
}

export interface IRefillable {
  refuel(): void;
}

export interface IParkedStatus {
  isParked: boolean;
}

//================== Task 3 & Abstract  ==================
export interface IBuilding {
  price: number;
  type: "House" | "Flat";
  yearFinished: number;
}

export interface IBuildingMethods {
  contactSeller(): void;
  buyProperty(): void;
  enterHome(): void;
  arrangeRenovateBuilding(): void;
}

// Two different interfaces (properties) - Combined:
export interface IHouseBuilding extends IBuilding {
  yardArea: number;
  floors: number;
}

export interface IFlatBuilding extends IBuilding {
  floor: number;
  windowsDirection: string;
}

//================== Task 4 & CAO  ==================

export interface IPerson {
  id: string;
  name: string;
  surname: string;
}

export interface IPersonMethods {
  getPersonInfo(): string;
  toString(): string;
}

export interface IJob {
  id: string;
  title: string;
  pay: number;
  finished?: boolean;
  payed?: boolean;
  dateFinished?: Date;
}

export interface IJobMethods {
  completeJob(): void;
  setJobPayed(): void;
  getPay(): number;
  isFinished(): boolean;
  isPayed(): boolean;
  toString(): string;
}

export interface IBusinessLicensePerson extends IPerson {
  jobs: Job[];
}

export interface ISelfEmployedPerson extends IPerson {
  hourPay: number;
  hoursWorked: number;
}

export interface IWorkPerson extends IPerson {
  hourPay: number;
  fullTimeEquivalent: number;
}
