import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListPage } from './list';
import { HeaderBarModule } from "../header.module";

@NgModule({
  declarations: [
    ListPage
  ],
  imports: [   
    IonicPageModule.forChild(ListPage),
    HeaderBarModule,
  ],
  exports: [ListPage]
})
export class ListModule {}
