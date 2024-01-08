import { Component } from '@angular/core';
import { StatsService } from 'src/app/services/stats.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(public statsService: StatsService) {
  }
}
