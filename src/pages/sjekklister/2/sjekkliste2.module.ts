import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Sjekkliste2Page } from './sjekkliste2';
import { HeaderBarModule } from "../../header.module";

@NgModule({
  declarations: [
    Sjekkliste2Page,
  ],
  imports: [   
    IonicPageModule.forChild(Sjekkliste2Page),
    HeaderBarModule,
  ],
  exports: [Sjekkliste2Page]
})
export class Sjekkliste2Module {}
