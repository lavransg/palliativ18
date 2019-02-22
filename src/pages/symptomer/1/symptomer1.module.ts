import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Symptomer1Page } from "./symptomer1";
import { HeaderBarModule } from "../../header.module";
import { KonverteringstabellModule } from '../../konverteringstabell/konverteringstabell.module';

@NgModule({
  declarations: [
    Symptomer1Page,
  ],
  imports: [   
    IonicPageModule.forChild(Symptomer1Page),
    HeaderBarModule,
    KonverteringstabellModule
  ],
  exports: [Symptomer1Page]
})
export class Symptomer1Module {}
