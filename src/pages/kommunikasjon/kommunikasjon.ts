import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-kommunikasjon',
  templateUrl: 'kommunikasjon.html'
})
export class KommunikasjonPage {

   title: string = "Kommunikasjon"

  constructor(public navCtrl: NavController) {

  }

}
