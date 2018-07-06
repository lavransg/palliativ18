import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-innhold_bakgrunn',
  templateUrl: 'innhold_bakgrunn.html'
})
export class Innhold_bakgrunnPage {

   title: string = "Innhold / bakgrunn"

  constructor(public navCtrl: NavController) {

  }

}
