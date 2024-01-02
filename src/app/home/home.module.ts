import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { DashComponent } from '../components/dash/dash.component';
import { WeekTableComponent } from '../components/week-table/week-table.component';
import { FormComponent } from '../components/form/form.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,

  ],
  declarations: [HomePage, DashComponent,WeekTableComponent,FormComponent]
})
export class HomePageModule {}
