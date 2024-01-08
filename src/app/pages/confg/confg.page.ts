import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { StatsService } from 'src/app/services/stats.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-confg',
  templateUrl: './confg.page.html',
})
export class ConfgPage {
  constructor(
    public statsService:StatsService,
    private storageService:StorageService,
    private router:Router
  ){
if(this.statsService.user.name.length<1){
  this.router.navigateByUrl('/');
}
  }
  logOut(){
    this.storageService.deleteStorage("user").then(()=>{
      this.statsService.deleteUser();
      this.router.navigateByUrl('/');
  });
  }
}
