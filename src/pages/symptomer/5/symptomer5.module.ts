import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Symptomer5Page } from "./symptomer5";
import { HeaderBarModule } from "../../header.module";

@NgModule({
  declarations: [
    Symptomer5Page,
  ],
  imports: [   
    IonicPageModule.forChild(Symptomer5Page),
    HeaderBarModule,
  ],
  exports: [Symptomer5Page]
})
export class Symptomer5Module {}
