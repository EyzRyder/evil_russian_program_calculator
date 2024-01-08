import { Component } from '@angular/core';
import { StorageService } from './services/storage.service';
import { StatsService } from './services/stats.service';
import { IUser } from './models/iUser';

@Component({
  selector: 'app-root',
  template: '<ion-app><ion-router-outlet></ion-router-outlet></ion-app>',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    public storageService: StorageService,
    public statsService: StatsService
  ) {
    this.getUserData();
  }

  getUserData() {
    this.storageService.getFromStorage<IUser>("user")
      .then(res => {
        if (res) {
          this.statsService.createUser(res)
        };
      });
  }

}
