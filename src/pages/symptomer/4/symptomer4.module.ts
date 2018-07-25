import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Symptomer4Page } from "./symptomer4";
import { HeaderBarModule } from "../../header.module";

@NgModule({
  declarations: [
    Symptomer4Page,
  ],
  imports: [   
    IonicPageModule.forChild(Symptomer4Page),
    HeaderBarModule,
  ],
  exports: [Symptomer4Page]
})
export class Symptomer4Module {}
