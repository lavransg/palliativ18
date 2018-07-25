import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import { HeaderBarModule } from "../header.module";

@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [   
    IonicPageModule.forChild(HomePage),
    HeaderBarModule,
  ],
  exports: [HomePage]
})
export class HomeModule {}