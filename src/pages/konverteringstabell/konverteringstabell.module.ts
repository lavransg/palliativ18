import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { KonverteringstabellPage } from './konverteringstabell';
import { HeaderBarModule } from "../header.module";

@NgModule({
  declarations: [
    KonverteringstabellPage,
  ],
  imports: [   
    IonicPageModule.forChild(KonverteringstabellPage),
    HeaderBarModule,
  ],
  exports: [KonverteringstabellPage]
})
export class KonverteringstabellModule {}
