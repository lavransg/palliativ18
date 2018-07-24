import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { KommunikasjonPage } from './kommunikasjon';
import { HeaderBarModule } from "../header.module";

@NgModule({
  declarations: [
    KommunikasjonPage,
  ],
  imports: [   
    IonicPageModule.forChild(KommunikasjonPage),
    HeaderBarModule,
  ],
  exports: [KommunikasjonPage]
})
export class KommunikasjonModule {}
