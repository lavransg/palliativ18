import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HomePage } from '../home/home';

@Component({
  selector: 'page-information',
  templateUrl: 'information.html'
})
export class InformationPage {
  
  title: string = "Informasjon"

  constructor(public navCtrl: NavController) {

  }

  backButtonClicked() {
    this.navCtrl.push(HomePage);
  }

}
