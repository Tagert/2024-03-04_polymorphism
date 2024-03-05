"use script";

import { VideoPlayer } from "./VideoPlayer.js"; // Task 1
import { AudioPlayer } from "./AudioPlayer.js"; // Task 1
//
import { Bicycle } from "./Bicycle.js"; // Task 2
import { Car } from "./Car.js"; // Task 2
//
import { HouseBuilding, FlatBuilding } from "./Building.js"; // Task 3
//
import {
  BusinessLicensePerson,
  Job,
  SelfEmployedPerson,
  WorkPerson,
} from "./Person.js"; // CAO

//================== Task 1 & Polymorphism, interface   ==================
console.groupCollapsed("Task 1");
// VideoPlayer
const videoPlayerNo1 = new VideoPlayer({
  brand: "Logitech",
  releaseYear: 2018,
});

videoPlayerNo1.play();

console.log("testing");

// AudioPLayer
const audioPlayerNo1 = new AudioPlayer({
  brand: "Sony",
  releaseYear: 2022,
});

audioPlayerNo1.play();

console.log("testing");
console.groupEnd();

//================== Task 2 & Polymorphism, Interface ==================
console.groupCollapsed("Task 2");
// Bicycle
const bicycleNo1 = new Bicycle();

bicycleNo1.lock();

// Car
const carNo1 = new Car({ isParked: false });

console.log(carNo1.park());
carNo1.displayParkingStatus();

console.log(carNo1.leaveParking());
carNo1.displayParkingStatus();
console.groupEnd();

//================== Task 3 & Abstract  ==================

const houseNo1 = new HouseBuilding({
  price: 150000,
  type: "House",
  yearFinished: 2023,
  yardArea: 650,
  floors: 2,
});

console.log(houseNo1);

const flatNo1 = new FlatBuilding({
  price: 85000,
  type: "Flat",
  yearFinished: 2001,
  floor: 2,
  windowsDirection: "North West",
});

console.log(flatNo1);

//================== Task 4 & CAO  ==================

const jobs = [
  new Job({ id: "fb", title: "Facebook adds", pay: 200 }),
  new Job({ id: "go", title: "Google adds", pay: 700 }),
  new Job({ id: "x", title: "Twitter adds", pay: 400 }),
];

const businessLicensePersonNo1 = new BusinessLicensePerson({
  id: "business1",
  name: "Jane",
  surname: "Style",
  jobs: jobs,
});

console.log(businessLicensePersonNo1);

const selfEmployedPersonNo1 = new SelfEmployedPerson({
  id: "self01",
  name: "James",
  surname: "Wolf",
  hourPay: 13.5,
  hoursWorked: 180,
});

console.log(selfEmployedPersonNo1.toString());

const workPersonNo1 = new WorkPerson({
  id: "work01",
  name: "Steve",
  surname: "Knight",
  hourPay: 16.5,
  fullTimeEquivalent: 9,
});

console.log(workPersonNo1.toString());
