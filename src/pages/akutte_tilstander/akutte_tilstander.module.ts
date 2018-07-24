import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Akutte_tilstanderPage } from './akutte_tilstander';
import { HeaderBarModule } from "../header.module";

@NgModule({
  declarations: [
    Akutte_tilstanderPage,
  ],
  imports: [   
    IonicPageModule.forChild(Akutte_tilstanderPage),
    HeaderBarModule,
  ],
  exports: [Akutte_tilstanderPage]
})
export class Akutte_tilstanderModule {}
