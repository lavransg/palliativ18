import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { InformationPage } from './information/information';
import { SearchPage } from './search/search';

@Component({
  selector: 'header-bar',
  inputs: ['title: title',"frontpage: frontpage"],
  template:
  `
  <ion-row class="menu-header">
    <ion-col col-2></ion-col>
    <ion-col col-8><b>{{title}}</b></ion-col>
    <ion-col col-2></ion-col>
  </ion-row>

  <div class="header-fixed">
    <ion-row class="header-shadow">
      <ion-col col-2>
        <ion-icon name="arrow-back" *ngIf="!frontpage" (click)="backButtonClicked()"></ion-icon>
        <ion-icon name="ios-information-circle-outline" *ngIf="frontpage" (click)="infoButtonClicked()"></ion-icon>
      </ion-col>
      <ion-col col-8><b>{{title}}</b></ion-col>
      <ion-col col-2><ion-icon name="search" (click)=searchButtonClicked()></ion-icon></ion-col>
    </ion-row>
  </div>
  `
})
export class HeaderBar {

  constructor(public navCtrl: NavController) {   
  }

  backButtonClicked(){
    // if this is the only page (by directly linking in a browser) set the homePage as root
    if ( this.navCtrl.length() < 2 ) { this.navCtrl.setRoot("HomePage") } 
    else { this.navCtrl.pop() }
  }

  infoButtonClicked(){
    this.navCtrl.push(InformationPage)
  }

  searchButtonClicked(){
    this.navCtrl.push(SearchPage)
  }
}