import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { MessagesComponent } from 'src/app/components/messages/messages.component';
import { FechaDatePipe } from 'src/app/pipes/fecha-date.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
  ],
  declarations: [HomePage,MessagesComponent,FechaDatePipe],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomePageModule {}
