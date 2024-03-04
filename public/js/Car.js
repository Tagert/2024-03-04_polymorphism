"use strict";
export class Car {
    constructor({ isParked }) {
        this.isParked = isParked;
    }
    refuel() {
        console.log("Refuel is in progress");
    }
    drive() {
        return true;
    }
    park() {
        console.log("Parked");
        return (this.isParked = true);
    }
    lock() {
        console.log("Locked");
    }
    leaveParking() {
        console.log("You are leaving parking");
        return (this.isParked = false); // When I don't use the 'return' keyword, the console displays 'undefined' as the output.
    }
    displayParkingStatus() {
        if (this.isParked === false) {
            console.log("Your car hasn't been parked.");
        }
        else if (this.isParked === true) {
            console.log("Your car has been parked.");
        }
        else {
            console.log("Something went wrong");
        }
        // this.isParked === false
        //   ? console.log("Your car hasn't been parked.")
        //   : console.log("Your car has been parked.");
    }
}
