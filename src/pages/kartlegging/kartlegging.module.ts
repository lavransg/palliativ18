import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { KartleggingPage } from "./kartlegging";
import { HeaderBarModule } from "../header.module";

@NgModule({
  declarations: [
    KartleggingPage,
  ],
  imports: [   
    IonicPageModule.forChild(KartleggingPage),
    HeaderBarModule,
  ],
  exports: [KartleggingPage]
})
export class KartleggingModule {}
