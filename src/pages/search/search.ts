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
    if (this.searchbarInput == ""){ this.results = [] }
    else {
      this.results = this.searchData.filterItems(this.searchbarInput);
      
      if ( this.results.length == 0 ){ this.showEmptyResults = true }
      else { this.showEmptyResults = false }
    }
    
  }

  onCancel(){
    this.searchbarInput = ""
    this.results = []
  }

  exitButtonClicked() {
    this.navCtrl.pop()
  }

  goToPage(page,id){
    // if the page we are navigating to allready exists in the stack, 
    // we remove it to not make duplicates in the stack and cause the scrollTo to find the wrong element id
    for ( let i=0; i < this.navCtrl.length(); i++ ) {
      let view = this.navCtrl.getViews()[i];
      if ( view.component.name == page ){
        this.navCtrl.remove(i)
      }
    }

    // finally, push the page and remove the searcPage from the stack as we do not want it in the history
    this.navCtrl.push(page, {id: id}).then(() => {
      this.navCtrl.remove(this.navCtrl.getPrevious().index)
    })
    
  }


}
