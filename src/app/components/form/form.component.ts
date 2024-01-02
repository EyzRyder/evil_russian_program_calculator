import { Component, OnChanges } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { StatsService } from 'src/app/services/stats.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
})
export class FormComponent implements OnChanges {
  
  constructor(
    public toastController: ToastController,
    public statsService: StatsService
  ) { }

  ngOnChanges() {
    this.statsService.calculaTable()
  }

  calculate() {
    if (this.statsService.maxPushUps < 1) {
      this.presentToast('Please input a valid value', 'danger');
      return;
    }
    if (!(this.statsService.curWeek == 1 || this.statsService.curWeek == 2)) {
      this.presentToast('Please input a valid value', 'danger');
      return;
    }
    this.statsService.calculaTable();
    this.statsService.openTable = true;
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
