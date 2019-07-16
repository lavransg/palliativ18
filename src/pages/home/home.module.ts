import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import { HeaderBarModule } from "../header.module";
import { ListModule } from "../list/list.module";

@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [   
    IonicPageModule.forChild(HomePage),
    HeaderBarModule,
    ListModule
  ],
  exports: [HomePage]
})
export class HomeModule {}