import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Symptomer2Page } from "./symptomer2";
import { HeaderBarModule } from "../../header.module";

@NgModule({
  declarations: [
    Symptomer2Page,
  ],
  imports: [   
    IonicPageModule.forChild(Symptomer2Page),
    HeaderBarModule,
  ],
  exports: [Symptomer2Page]
})
export class Symptomer2Module {}
