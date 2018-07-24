import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Aandelig_omsorgPage } from "./aandelig_omsorg";
import { HeaderBarModule } from "../header.module";

@NgModule({
  declarations: [
    Aandelig_omsorgPage,
  ],
  imports: [   
    IonicPageModule.forChild(Aandelig_omsorgPage),
    HeaderBarModule,
  ],
  exports: [Aandelig_omsorgPage]
})
export class Aandelig_omsorgModule {}
