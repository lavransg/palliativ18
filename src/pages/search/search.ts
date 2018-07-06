import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HomePage } from '../home/home';
import { SearchData } from '../../providers/searchData';

@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {

  searchbarInput: string;
  results: any[];

  constructor(public navCtrl: NavController, public searchData: SearchData) {

  }

  onInput(event){
    if(this.searchbarInput == ""){
      this.results = [];
    }
    else{
      this.results = this.searchData.filterItems(this.searchbarInput);
    }
    
  }

  onCancel(event){
    this.searchbarInput = "";
    this.results = [];
  }

  exitButtonClicked() {
    this.navCtrl.pop();
  }

  goToPage(component){
    this.navCtrl.push(component)
  }



}
