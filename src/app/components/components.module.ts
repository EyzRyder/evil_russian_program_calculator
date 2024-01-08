import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { WeekTableComponent } from './week-table/week-table.component';
import { FormComponent } from './form/form.component';
import { IntroComponent } from './intro/intro.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule
  ],
 exports:[
    WeekTableComponent,
    FormComponent,
    IntroComponent,
    NavbarComponent
  ],
  declarations:[
    WeekTableComponent,
    FormComponent,
    IntroComponent,
    NavbarComponent
  ],
})
export class ComponentsModule { }
