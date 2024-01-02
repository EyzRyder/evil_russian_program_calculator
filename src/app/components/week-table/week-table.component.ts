import { Component } from '@angular/core';
import { StatsService } from 'src/app/services/stats.service';

@Component({
  selector: 'app-week-table',
  templateUrl: './week-table.component.html',
})
export class WeekTableComponent {
  constructor(public statsService: StatsService) {
  }
}
