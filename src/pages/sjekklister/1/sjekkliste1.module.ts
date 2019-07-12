import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Sjekkliste1Page } from './sjekkliste1';
import { HeaderBarModule } from "../../header.module";

@NgModule({
  declarations: [
    Sjekkliste1Page,
  ],
  imports: [   
    IonicPageModule.forChild(Sjekkliste1Page),
    HeaderBarModule,
  ],
  exports: [Sjekkliste1Page]
})
export class Sjekkliste1Module {}
