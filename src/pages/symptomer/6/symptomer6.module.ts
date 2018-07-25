import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Symptomer6Page } from "./symptomer6";
import { HeaderBarModule } from "../../header.module";

@NgModule({
  declarations: [
    Symptomer6Page,
  ],
  imports: [   
    IonicPageModule.forChild(Symptomer6Page),
    HeaderBarModule,
  ],
  exports: [Symptomer6Page]
})
export class Symptomer6Module {}
