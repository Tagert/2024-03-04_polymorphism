"use script";
import { VideoPlayer } from "./VideoPlayer.js";
import { AudioPlayer } from "./AudioPlayer.js";
import { Bicycle } from "./Bicycle.js";
import { Car } from "./Car.js";
////// Task 1
console.groupCollapsed("Task1");
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
////// Task 2
// Bicycle
const bicycleNo1 = new Bicycle();
bicycleNo1.lock();
// Car
const carNo1 = new Car({ isParked: false });
console.log(carNo1.park());
carNo1.displayParkingStatus();
console.log(carNo1.leaveParking());
carNo1.displayParkingStatus();
