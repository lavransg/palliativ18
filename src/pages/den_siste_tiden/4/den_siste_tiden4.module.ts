import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Den_siste_tiden4Page } from "./den_siste_tiden4";
import { HeaderBarModule } from "../../header.module";

@NgModule({
  declarations: [
    Den_siste_tiden4Page,
  ],
  imports: [   
    IonicPageModule.forChild(Den_siste_tiden4Page),
    HeaderBarModule,
  ],
  exports: [Den_siste_tiden4Page]
})
export class Symptomer1Module {}
