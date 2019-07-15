import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { InformationPage } from '../pages/information/information';
import { HeaderBarModule } from '../pages/header.module';
import { SearchPage } from '../pages/search/search';
import { SearchData } from '../providers/searchData';
import { Checklists } from '../providers/checklists';

@NgModule({
  declarations: [
    MyApp,
    InformationPage,
    SearchPage,
  ],
  imports: [
    BrowserModule,
    HeaderBarModule,
    IonicModule.forRoot(MyApp, {pageTransition: "md-transition"})
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    InformationPage,
    SearchPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SearchData,
    Checklists,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
