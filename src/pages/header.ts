import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { InformationPage } from './information/information';
import { SearchPage } from './search/search';

@Component({
  selector: 'header-bar',
  inputs: ['title: title',"frontpage: frontpage"],
  templateUrl: 'header.html'
  
})
export class HeaderBar {

  constructor(public navCtrl: NavController) {   
  }

  backButtonClicked(){
    // if this is the only page (by directly linking in a browser) set the homePage as root
    if ( this.navCtrl.length() < 2 ) { this.navCtrl.setRoot("HomePage") } 
    else { this.navCtrl.pop() }
  }

  infoButtonClicked(){
    this.navCtrl.push(InformationPage)
  }

  searchButtonClicked(){
    this.navCtrl.push(SearchPage)
  }
}