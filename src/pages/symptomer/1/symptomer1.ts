import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-symptomer1',
  templateUrl: 'symptomer1.html'
})
export class Symptomer1Page {

   title: string = "Smerte"

  constructor(public navCtrl: NavController) {

  }

}
