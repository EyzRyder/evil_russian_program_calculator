import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { StatsService } from 'src/app/services/stats.service';

@Component({
  selector: 'app-calc',
  templateUrl:'./calc.page.html'
})
export class CalcPage {

  constructor(
    private statsService: StatsService,
    private router:Router
  ) {
    if(this.statsService.user.name.length<1){
      this.router.navigateByUrl("/");
    }
  }

}
