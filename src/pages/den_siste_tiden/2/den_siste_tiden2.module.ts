import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Den_siste_tiden2Page } from "./den_siste_tiden2";
import { HeaderBarModule } from "../../header.module";

@NgModule({
  declarations: [
    Den_siste_tiden2Page,
  ],
  imports: [   
    IonicPageModule.forChild(Den_siste_tiden2Page),
    HeaderBarModule,
  ],
  exports: [Den_siste_tiden2Page]
})
export class Symptomer1Module {}
