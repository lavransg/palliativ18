import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-prosedyrer',
  templateUrl: 'prosedyrer.html'
})
export class ProsedyrerPage {

   title: string = "Prosedyrer"

  constructor(public navCtrl: NavController) {

  }

}
