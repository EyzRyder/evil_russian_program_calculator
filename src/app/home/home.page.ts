import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  openModal: boolean = false;
  maxPulUps: number = 0;
  curWeek: 1 | 2 = 1;

  constructor(
    public toastController: ToastController
  ) { }

  calculate() {
    if (this.maxPulUps < 1 ) {
      this.presentToast('Please input a valid value', 'danger');
      return;
    }
    if (!(this.curWeek == 1 || this.curWeek == 2)) {
      this.presentToast('Please input a valid value', 'danger');
      return;
    }
    this.openModal = true;
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
