import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Symptomer7Page } from "./symptomer7";
import { HeaderBarModule } from "../../header.module";

@NgModule({
  declarations: [
    Symptomer7Page,
  ],
  imports: [   
    IonicPageModule.forChild(Symptomer7Page),
    HeaderBarModule,
  ],
  exports: [Symptomer7Page]
})
export class Symptomer7Module {}
