import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Den_siste_tiden1Page } from "./den_siste_tiden1";
import { HeaderBarModule } from "../../header.module";

@NgModule({
  declarations: [
    Den_siste_tiden1Page,
  ],
  imports: [   
    IonicPageModule.forChild(Den_siste_tiden1Page),
    HeaderBarModule,
  ],
  exports: [Den_siste_tiden1Page]
})
export class Symptomer1Module {}
