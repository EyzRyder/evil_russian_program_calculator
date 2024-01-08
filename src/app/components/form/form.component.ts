import { Component, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { StatsService } from 'src/app/services/stats.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
})
export class FormComponent implements OnChanges {

  constructor(
    private toastController: ToastController,
    public statsService: StatsService,
    private router:Router
  ) {
  }

  ngOnChanges() {
    this.statsService.calculaTable()
  }

  calculate() {

    if (this.statsService.user.maxPushUps < 1) {
      this.presentToast('Please input a valid value', 'danger');
      return;
    }
    if (!(this.statsService.user.curWeek === '1' || this.statsService.user.curWeek === '2')) {
      this.presentToast('Please input a valid value', 'danger');
      return;
    }
    this.statsService.calculaTable();
    this.statsService.openTable = true;
    this.router.navigateByUrl('/table');
  }

  async presentToast(msg: string, color: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 5000,
      color: color
    })
    toast.present();
  }
}
