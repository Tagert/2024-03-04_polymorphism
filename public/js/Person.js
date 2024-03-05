"use strict";
import { calcMonthWorkDays } from "./calculatePay.js";
class Person {
    constructor({ id, name, surname }) {
        this.id = id;
        this.name = name;
        this.surname = surname;
    }
    getPersonInfo() {
        const personInfo = `My name is ${this.name} ${this.surname}`;
        return personInfo;
    }
}
class Employee extends Person {
}
export class Job {
    constructor({ id, title, pay, dateFinished }) {
        this.instanceCount = 0;
        this.finished = false;
        this.payed = false;
        this.completeJob = () => {
            this.finished = true;
            this.dateFinished = new Date();
        };
        this.setJobPayed = () => {
            this.payed = true;
        };
        this.getPay = () => this.pay;
        this.isFinished = () => this.finished;
        this.isPayed = () => this.payed;
        this.id = id;
        this.title = title;
        this.pay = pay;
        this.dateFinished = dateFinished;
    }
    toString() {
        return "No text";
    }
}
export class BusinessLicensePerson extends Employee {
    constructor({ id, name, surname, jobs = [] }) {
        super({ id, name, surname });
        this.jobs = jobs;
    }
    calcPay() {
        const unpaidFinishedJobs = this.jobs.filter((job) => job.isFinished() && !job.isPayed());
        const calculatedPay = unpaidFinishedJobs.reduce((sum, job) => sum + job.getPay(), 0);
        unpaidFinishedJobs.forEach((job) => job.setJobPayed());
        return calculatedPay;
    }
    toString() {
        return "No text";
    }
}
export class SelfEmployedPerson extends Employee {
    constructor({ id, name, surname, hourPay, hoursWorked, }) {
        super({ id, name, surname });
        this.hourPay = hourPay;
        this.hoursWorked = hoursWorked;
    }
    calcPay() {
        return this.hourPay * this.hoursWorked;
    }
    toString() {
        return `${this.getPersonInfo()} and my hour pay is ${this.hourPay} $, hours worked: ${this.hoursWorked}h in total earned ${this.calcPay()} $`;
    }
}
export class WorkPerson extends Employee {
    constructor({ id, name, surname, hourPay, fullTimeEquivalent }) {
        super({ id, name, surname });
        this.hourPay = hourPay;
        this.fullTimeEquivalent = fullTimeEquivalent;
    }
    calcPay() {
        return calcMonthWorkDays() * this.hourPay * this.fullTimeEquivalent;
    }
    toString() {
        return `${this.getPersonInfo()} and my hour pay is ${this.hourPay} $, per day working ${this.fullTimeEquivalent} hours and in total over course of a month earned ${this.calcPay()} $`;
    }
}
