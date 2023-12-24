import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-week-table',
  templateUrl: './week-table.component.html',
  styleUrls: ['./week-table.component.scss'],
})
export class WeekTableComponent implements OnChanges {
  @Input()
  curMax: number = 0;
  @Input()
  curWeek: 1 | 2 = 1;
  weekOne = [
    { percent: 30, minutes: 60 },
    { percent: 50, minutes: 60 },
    { percent: 60, minutes: 45 },
    { percent: 25, minutes: 60 },
    { percent: 45, minutes: 30 },
    { percent: 40, minutes: 60 },
    { percent: 20, minutes: 90 },
  ];
  weekTwo = [
    { percent: 35, minutes: 45 },
    { percent: 55, minutes: 20 },
    { percent: 30, minutes: 15 },
    { percent: 65, minutes: 60 },
    { percent: 35, minutes: 45 },
    { percent: 45, minutes: 60 },
    { percent: 25, minutes: 120 },
  ];
  workoutProgramList: { day: number, quantity: number, percent: number, minutes: number }[] = [];

  constructor() {
    this.calculaTable({ max: this.curMax, week: this.curWeek })
  }

  ngOnChanges() {
    this.calculaTable({ max: this.curMax, week: this.curWeek })
  }

  calculaTable({ max, week }: { max: number, week: number }) {
    this.workoutProgramList = [];
    for (let i = 0; i < 7; i++) {

      if (week == 1) {
        this.workoutProgramList.push(
          {
            day: i + 1,
            minutes: this.weekOne[i].minutes,
            percent: this.weekOne[i].percent,
            quantity: Math.round(max * (this.weekOne[i].percent / 100))
          }
        )
      }

      if (week == 2) {
        this.workoutProgramList.push(
          {
            day: i + 1,
            minutes: this.weekTwo[i].minutes,
            percent: this.weekTwo[i].percent,
            quantity: Math.round(max * (this.weekTwo[i].percent / 100))
          }
        )
      }
    }
  }
}

