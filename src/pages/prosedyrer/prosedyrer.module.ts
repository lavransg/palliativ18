import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProsedyrerPage } from "./prosedyrer";
import { HeaderBarModule } from "../header.module";

@NgModule({
  declarations: [
    ProsedyrerPage,
  ],
  imports: [   
    IonicPageModule.forChild(ProsedyrerPage),
    HeaderBarModule,
  ],
  exports: [ProsedyrerPage]
})
export class ProsedyrerModule {}
