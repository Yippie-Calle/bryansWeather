import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HistoryPage } from './weatherApp.page;

import { HistoryPageRoutingModule } from './weatherApp-routing.module';

@NgModule({
  imports:[CommonModule,FormsModule,IonicModule,HistoryPageRoutingModule],
  declarations: [HistoryPage],
})
export class HistoryPageModule {}
