import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {

  pages: any[];
  title: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.title = navParams.get("title")
    this.pages = navParams.get("pages")
  }

  goToPage(component){
    this.navCtrl.push(component)
  }

  backButtonClicked(){
    this.navCtrl.pop()
  }
    
}
