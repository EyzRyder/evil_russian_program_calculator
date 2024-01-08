import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StatsService } from 'src/app/services/stats.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.page.html',
})
export class TablePage {

  constructor(
    private statsService: StatsService,
    private router:Router
  ) {
    if(this.statsService.user.name.length<1){
      this.router.navigateByUrl("/");
    }
  }
}
