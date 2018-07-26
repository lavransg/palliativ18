import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { SearchData } from '../../providers/searchData';

@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {

  searchbarInput: string;
  results: any[];
  showEmptyResults: boolean = false;

  constructor(public navCtrl: NavController, public searchData: SearchData) {}

  onInput(){
    if (this.searchbarInput == ""){ this.results = []; }
    else {
      this.results = this.searchData.filterItems(this.searchbarInput);
      
      if ( this.results.length == 0 ){ this.showEmptyResults = true }
      else { this.showEmptyResults = false }
    }
    
  }

  onCancel(){
    this.searchbarInput = "";
    this.results = [];
  }

  exitButtonClicked() {
    this.navCtrl.pop();
  }

  goToPage(component,id){
    this.navCtrl.push(component, {id: id})
    this.navCtrl.remove(1);
  }


}
