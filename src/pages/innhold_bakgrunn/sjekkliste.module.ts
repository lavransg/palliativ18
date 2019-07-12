import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SjekklistePage } from './sjekkliste';
import { HeaderBarModule } from "../header.module";

@NgModule({
  declarations: [
    SjekklistePage,
  ],
  imports: [   
    IonicPageModule.forChild(SjekklistePage),
    HeaderBarModule,
  ],
  exports: [SjekklistePage]
})
export class SjekklisteModule {}
