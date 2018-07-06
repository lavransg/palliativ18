import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-kartlegging',
  templateUrl: 'kartlegging.html'
})
export class KartleggingPage {

   title: string = "Kartlegging"

  constructor(public navCtrl: NavController) {

  }

}
