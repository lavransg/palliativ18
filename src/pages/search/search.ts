import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HomePage } from '../home/home';

@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {

  searchbarInput: string;

  constructor(public navCtrl: NavController) {

  }

  onInput(event){
    
  }

  onCancel(event){

  }

  exitButtonClicked() {
    this.navCtrl.pop();
  }

  resultClicked(component){
    //go to component
  }



}
