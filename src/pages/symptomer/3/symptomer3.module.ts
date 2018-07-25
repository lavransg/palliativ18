import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Symptomer3Page } from "./symptomer3";
import { HeaderBarModule } from "../../header.module";

@NgModule({
  declarations: [
    Symptomer3Page,
  ],
  imports: [   
    IonicPageModule.forChild(Symptomer3Page),
    HeaderBarModule,
  ],
  exports: [Symptomer3Page]
})
export class Symptomer3Module {}
