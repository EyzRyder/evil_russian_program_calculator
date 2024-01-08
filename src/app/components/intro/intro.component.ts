import { Component } from '@angular/core';
import { IUser } from 'src/app/models/iUser';
import { StatsService } from 'src/app/services/stats.service';
import { StorageService } from 'src/app/services/storage.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
})
export class IntroComponent {
  profileForm = new FormGroup({
    userName: new FormControl(''),
  });

  constructor(
    private statsService: StatsService,
    private storageService: StorageService
  ) { }

  login() {
    const name = this.profileForm.value.userName;
    if (!name) return;
    const data = this.statsService.createUser({
      name,
      curWeek: 1,
      maxPushUps: 0,
      workoutProgramList: []
    });
    this.storageService.addStorage<IUser>("user", data);
  }
}
