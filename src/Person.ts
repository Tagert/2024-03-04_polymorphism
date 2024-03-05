"use strict";

import {
  IPerson,
  IPersonMethods,
  IJob,
  IJobMethods,
  IBusinessLicensePerson,
  ISelfEmployedPerson,
  IWorkPerson,
} from "./interfaces.js";
import { calcMonthWorkDays } from "./calculatePay.js";

abstract class Person implements IPersonMethods {
  protected id: string;
  protected name: string;
  protected surname: string;

  constructor({ id, name, surname }: IPerson) {
    this.id = id;
    this.name = name;
    this.surname = surname;
  }

  getPersonInfo(): string {
    const personInfo = `My name is ${this.name} ${this.surname}`;
    return personInfo;
  }

  abstract toString(): string;
}

abstract class Employee extends Person {
  abstract calcPay(): number;
}

export class Job implements IJobMethods {
  private instanceCount = 0;
  private id: string;
  private title: string;
  private pay: number;
  private finished: boolean = false;
  private payed: boolean = false;
  private dateFinished?: Date;

  constructor({ id, title, pay, dateFinished }: IJob) {
    this.id = id;
    this.title = title;
    this.pay = pay;
    this.dateFinished = dateFinished;
  }

  completeJob = (): void => {
    this.finished = true;
    this.dateFinished = new Date();
  };

  setJobPayed = (): void => {
    this.payed = true;
  };

  getPay = (): number => this.pay;

  isFinished = (): boolean => this.finished;

  isPayed = (): boolean => this.payed;

  toString(): string {
    return "No text";
  }
}

export class BusinessLicensePerson extends Employee {
  private jobs: Job[];

  constructor({ id, name, surname, jobs = [] }: IBusinessLicensePerson) {
    super({ id, name, surname });
    this.jobs = jobs;
  }

  calcPay(): number {
    const unpaidFinishedJobs = this.jobs.filter(
      (job) => job.isFinished() && !job.isPayed()
    );
    const calculatedPay = unpaidFinishedJobs.reduce(
      (sum, job) => sum + job.getPay(),
      0
    );
    unpaidFinishedJobs.forEach((job) => job.setJobPayed());

    return calculatedPay;
  }

  toString(): string {
    return "No text";
  }
}

export class SelfEmployedPerson extends Employee {
  private hourPay: number;
  private hoursWorked: number;

  constructor({
    id,
    name,
    surname,
    hourPay,
    hoursWorked,
  }: ISelfEmployedPerson) {
    super({ id, name, surname });
    this.hourPay = hourPay;
    this.hoursWorked = hoursWorked;
  }

  calcPay(): number {
    return this.hourPay * this.hoursWorked;
  }

  toString(): string {
    return `${this.getPersonInfo()} and my hour pay is ${
      this.hourPay
    } $, hours worked: ${
      this.hoursWorked
    }h in total earned ${this.calcPay()} $`;
  }
}

export class WorkPerson extends Employee {
  private hourPay: number;
  private fullTimeEquivalent: number;

  constructor({ id, name, surname, hourPay, fullTimeEquivalent }: IWorkPerson) {
    super({ id, name, surname });
    this.hourPay = hourPay;
    this.fullTimeEquivalent = fullTimeEquivalent;
  }
  calcPay() {
    return calcMonthWorkDays() * this.hourPay * this.fullTimeEquivalent;
  }

  toString() {
    return `${this.getPersonInfo()} and my hour pay is ${
      this.hourPay
    } $, per day working ${
      this.fullTimeEquivalent
    } hours and in total over course of a month earned ${this.calcPay()} $`;
  }
}
