import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { InformationPage } from '../pages/information/information';
import { HeaderBar } from '../pages/header';
import { SearchPage } from '../pages/search/search';

import { Symptomer1Page } from '../pages/symptomer/1/symptomer1';
import { Symptomer2Page } from '../pages/symptomer/2/symptomer2';
import {Symptomer3Page} from '../pages/symptomer/3/symptomer3';
import {Symptomer4Page} from '../pages/symptomer/4/symptomer4';
import {Symptomer5Page} from '../pages/symptomer/5/symptomer5';
import {Symptomer6Page} from '../pages/symptomer/6/symptomer6';
import {Symptomer7Page} from '../pages/symptomer/7/symptomer7';
import {Symptomer8Page} from '../pages/symptomer/8/symptomer8';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    HeaderBar,
    InformationPage,
    SearchPage,
    Symptomer1Page,Symptomer2Page,Symptomer3Page,Symptomer4Page,
    Symptomer5Page,Symptomer6Page,Symptomer7Page,Symptomer8Page,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    HeaderBar,
    InformationPage,
    SearchPage,
    Symptomer1Page,Symptomer2Page,Symptomer3Page,Symptomer4Page,
    Symptomer5Page,Symptomer6Page,Symptomer7Page,Symptomer8Page,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
