import {Component} from '@angular/core';
import { NavController } from 'ionic-angular';

import { InformationPage } from './information/information';
import { SearchPage } from './search/search';

@Component({
  selector: 'header-bar',
  inputs: ['title: title',"frontpage: frontpage"],
  template:
  `
    <div class="menu-header header-fixed">
        <ion-row>
            <ion-col col-2>
            <ion-icon name="arrow-back" *ngIf="!frontpage" (click)="backButtonClicked()"></ion-icon>
            <ion-icon name="information-circle-outline" *ngIf="frontpage" (click)="infoButtonClicked()"></ion-icon>
            </ion-col>
            <ion-col col-8><b>{{title}}</b></ion-col>
            <ion-col col-2><ion-icon name="search" (click)=searchButtonClicked()></ion-icon></ion-col>
        </ion-row>
    </div>
    <div class="menu-header"></div>

  `
})
export class HeaderBar {
  constructor(public navCtrl: NavController,) {   
  }

  backButtonClicked(){
    this.navCtrl.pop()
  }

  infoButtonClicked(){
    this.navCtrl.push(InformationPage)
  }

  searchButtonClicked(){
    this.navCtrl.push(SearchPage,{direction: "down"})
  }
}