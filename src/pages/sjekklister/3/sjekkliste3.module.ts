import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Sjekkliste3Page } from './sjekkliste3';
import { HeaderBarModule } from "../../header.module";

@NgModule({
  declarations: [
    Sjekkliste3Page,
  ],
  imports: [   
    IonicPageModule.forChild(Sjekkliste3Page),
    HeaderBarModule,
  ],
  exports: [Sjekkliste3Page]
})
export class Sjekkliste3Module {}
