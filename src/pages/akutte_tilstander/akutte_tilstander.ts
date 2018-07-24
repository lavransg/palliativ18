import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-akutte_tilstander',
  templateUrl: 'akutte_tilstander.html'
})
export class Akutte_tilstanderPage {

   title: string = "Akutte Tilstander"

  constructor(public navCtrl: NavController) {

  }

}
