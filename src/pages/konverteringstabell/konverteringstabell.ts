import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-konverteringstabell',
  templateUrl: 'konverteringstabell.html'
})
export class KonverteringstabellPage {
  
  title: string = "Konverteringstabell"

  constructor(public navCtrl: NavController) {}

  backButtonClicked() {
    this.navCtrl.push("HomePage");
  }

}
