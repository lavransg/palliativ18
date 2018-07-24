import { NgModule } from '@angular/core';
import { HeaderBar } from './header';
import { IonicModule } from 'ionic-angular';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    HeaderBar,
  ],
  imports: [
    IonicModule,
    CommonModule
  ],
  exports: [HeaderBar]
})
export class HeaderBarModule {}