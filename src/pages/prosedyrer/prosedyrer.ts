import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-prosedyrer',
  templateUrl: 'prosedyrer.html'
})
export class ProsedyrerPage {

   title: string = "Prosedyrer"

  constructor(public navCtrl: NavController) {

  }

}
