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
import { SearchData } from '../providers/searchData';

import { Symptomer1Page } from '../pages/symptomer/1/symptomer1';
import { Symptomer2Page } from '../pages/symptomer/2/symptomer2';
import { Symptomer3Page } from '../pages/symptomer/3/symptomer3';
import { Symptomer4Page } from '../pages/symptomer/4/symptomer4';
import { Symptomer5Page } from '../pages/symptomer/5/symptomer5';
import { Symptomer6Page } from '../pages/symptomer/6/symptomer6';
import { Symptomer7Page } from '../pages/symptomer/7/symptomer7';
import { Symptomer8Page } from '../pages/symptomer/8/symptomer8';

import { Den_siste_tiden1Page } from '../pages/den_siste_tiden/1/den_siste_tiden1';
import { Den_siste_tiden2Page } from '../pages/den_siste_tiden/2/den_siste_tiden2';
import { Den_siste_tiden3Page } from '../pages/den_siste_tiden/3/den_siste_tiden3';
import { Den_siste_tiden4Page } from '../pages/den_siste_tiden/4/den_siste_tiden4';
import { Den_siste_tiden5Page } from '../pages/den_siste_tiden/5/den_siste_tiden5';
import { Den_siste_tiden6Page } from '../pages/den_siste_tiden/6/den_siste_tiden6';

import { Akutte_tilstanderPage } from '../pages/akutte_tilstander/akutte_tilstander';
import { Innhold_bakgrunnPage } from '../pages/innhold_bakgrunn/innhold_bakgrunn';
import { KartleggingPage } from '../pages/kartlegging/kartlegging';
import { KommunikasjonPage } from '../pages/kommunikasjon/kommunikasjon';
import { ProsedyrerPage } from '../pages/prosedyrer/prosedyrer';
import { Aandelig_omsorgPage } from '../pages/aandelig_omsorg/aandelig_omsorg';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    HeaderBar,
    InformationPage,
    SearchPage,
    Symptomer1Page, Symptomer2Page, Symptomer3Page, Symptomer4Page,
    Symptomer5Page, Symptomer6Page, Symptomer7Page, Symptomer8Page,
    Den_siste_tiden1Page, Den_siste_tiden2Page, Den_siste_tiden3Page,
    Den_siste_tiden4Page, Den_siste_tiden5Page, Den_siste_tiden6Page,
    Akutte_tilstanderPage,
    Innhold_bakgrunnPage,
    KartleggingPage,
    KommunikasjonPage,
    ProsedyrerPage,
    Aandelig_omsorgPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {pageTransition: "md-transition"})
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
    Den_siste_tiden1Page, Den_siste_tiden2Page, Den_siste_tiden3Page,
    Den_siste_tiden4Page, Den_siste_tiden5Page, Den_siste_tiden6Page,
    Akutte_tilstanderPage,
    Innhold_bakgrunnPage,
    KartleggingPage,
    KommunikasjonPage,
    ProsedyrerPage,
    Aandelig_omsorgPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SearchData,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
