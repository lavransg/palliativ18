import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Den_siste_tiden6Page } from "./den_siste_tiden6";
import { HeaderBarModule } from "../../header.module";

@NgModule({
  declarations: [
    Den_siste_tiden6Page,
  ],
  imports: [   
    IonicPageModule.forChild(Den_siste_tiden6Page),
    HeaderBarModule,
  ],
  exports: [Den_siste_tiden6Page]
})
export class Symptomer1Module {}
