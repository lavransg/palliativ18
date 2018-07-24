import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Innhold_bakgrunnPage } from './innhold_bakgrunn';
import { HeaderBarModule } from "../header.module";

@NgModule({
  declarations: [
    Innhold_bakgrunnPage,
  ],
  imports: [   
    IonicPageModule.forChild(Innhold_bakgrunnPage),
    HeaderBarModule,
  ],
  exports: [Innhold_bakgrunnPage]
})
export class Innhold_bakgrunnModule {}
