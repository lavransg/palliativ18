import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-kartlegging',
  templateUrl: 'kartlegging.html'
})
export class KartleggingPage {

   title: string = "Kartlegging"

  constructor(public navCtrl: NavController) {

  }

}
