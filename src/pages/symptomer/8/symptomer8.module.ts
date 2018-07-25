import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Symptomer8Page } from "./symptomer8";
import { HeaderBarModule } from "../../header.module";

@NgModule({
  declarations: [
    Symptomer8Page,
  ],
  imports: [   
    IonicPageModule.forChild(Symptomer8Page),
    HeaderBarModule,
  ],
  exports: [Symptomer8Page]
})
export class Symptomer8Module {}
