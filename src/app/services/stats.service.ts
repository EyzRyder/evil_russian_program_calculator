import { Injectable, OnChanges } from '@angular/core';

type TWeek = {
  percent: number
  minutes: number
}

type TWorkoutProgrameData = {
  day: number,
  quantity: number,
  percent: number,
  minutes: number
}


@Injectable({
  providedIn: 'root'
})
export class StatsService {
  name: string = '';
  maxPushUps: number = 0;
  curWeek: 1 | 2 = 1;
  openTable: boolean = false;

  weekOne: TWeek[] = [
    { percent: 30, minutes: 60 },
    { percent: 50, minutes: 60 },
    { percent: 60, minutes: 45 },
    { percent: 25, minutes: 60 },
    { percent: 45, minutes: 30 },
    { percent: 40, minutes: 60 },
    { percent: 20, minutes: 90 },
  ];
  weekTwo: TWeek[] = [
    { percent: 35, minutes: 45 },
    { percent: 55, minutes: 20 },
    { percent: 30, minutes: 15 },
    { percent: 65, minutes: 60 },
    { percent: 35, minutes: 45 },
    { percent: 45, minutes: 60 },
    { percent: 25, minutes: 120 },
  ];

  workoutProgramList: TWorkoutProgrameData[] = [];

  calculaTable() {
    this.workoutProgramList = [];
    for (let i = 0; i < 7; i++) {

      if (this.curWeek == 1) {
        this.workoutProgramList.push(
          {
            day: i + 1,
            minutes: this.weekOne[i].minutes,
            percent: this.weekOne[i].percent,
            quantity: Math.round(this.maxPushUps * (this.weekOne[i].percent / 100))
          }
        )
      }

      if (this.curWeek == 2) {
        this.workoutProgramList.push(
          {
            day: i + 1,
            minutes: this.weekTwo[i].minutes,
            percent: this.weekTwo[i].percent,
            quantity: Math.round(this.maxPushUps * (this.weekTwo[i].percent / 100))
          }
        )
      }
    }
  }

}
