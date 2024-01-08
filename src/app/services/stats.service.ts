import { Injectable } from '@angular/core';
import { TWeek, IUser } from '../models/iUser';

@Injectable({
  providedIn: 'root'
})
export class StatsService {
  user: IUser = {
    name: "",
    curWeek: '1',
    maxPushUps: 0,
    workoutProgramList: []
  };

  openTable: boolean = false;

  readonly weekOne: TWeek[] = [
    { percent: 30, minutes: 60 },
    { percent: 50, minutes: 60 },
    { percent: 60, minutes: 45 },
    { percent: 25, minutes: 60 },
    { percent: 45, minutes: 30 },
    { percent: 40, minutes: 60 },
    { percent: 20, minutes: 90 },
  ];

  readonly weekTwo: TWeek[] = [
    { percent: 35, minutes: 45 },
    { percent: 55, minutes: 20 },
    { percent: 30, minutes: 15 },
    { percent: 65, minutes: 60 },
    { percent: 35, minutes: 45 },
    { percent: 45, minutes: 60 },
    { percent: 25, minutes: 120 },
  ];

  calculaTable() {
    if (!this.user) return
    this.user.workoutProgramList = [];
    for (let i = 0; i < 7; i++) {

      if (this.user.curWeek === '1') {
        this.user.workoutProgramList.push(
          {
            day: i + 1,
            minutes: this.weekOne[i].minutes,
            percent: this.weekOne[i].percent,
            quantity: Math.round(this.user.maxPushUps * (this.weekOne[i].percent / 100))
          }
        )
      }

      if (this.user.curWeek === '2') {
        this.user.workoutProgramList.push(
          {
            day: i + 1,
            minutes: this.weekTwo[i].minutes,
            percent: this.weekTwo[i].percent,
            quantity: Math.round(this.user.maxPushUps * (this.weekTwo[i].percent / 100))
          }
        )
      }
    }
  }

  createUser(data: IUser) {
    this.user = data;
    return this.user
  }

  deleteUser(){
    this.createUser( {
      name: "",
      curWeek: '1',
      maxPushUps: 0,
      workoutProgramList: []
    })
  }
}
