import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { TestComponentComponent } from '../test/test-component/test-component.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    MatButtonToggleModule,
  ],
  declarations: [HomePage,
    TestComponentComponent]
})
export class HomePageModule {}
