import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Den_siste_tiden5Page } from "./den_siste_tiden5";
import { HeaderBarModule } from "../../header.module";

@NgModule({
  declarations: [
    Den_siste_tiden5Page,
  ],
  imports: [   
    IonicPageModule.forChild(Den_siste_tiden5Page),
    HeaderBarModule,
  ],
  exports: [Den_siste_tiden5Page]
})
export class Symptomer1Module {}
