import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfgPageRoutingModule } from './confg-routing.module';

import { ConfgPage } from './confg.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfgPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ConfgPage]
})
export class ConfgPageModule {}
