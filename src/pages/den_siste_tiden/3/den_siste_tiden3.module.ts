import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Den_siste_tiden3Page } from "./den_siste_tiden3";
import { HeaderBarModule } from "../../header.module";

@NgModule({
  declarations: [
    Den_siste_tiden3Page,
  ],
  imports: [   
    IonicPageModule.forChild(Den_siste_tiden3Page),
    HeaderBarModule,
  ],
  exports: [Den_siste_tiden3Page]
})
export class Symptomer1Module {}
