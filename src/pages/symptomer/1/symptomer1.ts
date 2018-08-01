import { Component, ViewChild } from '@angular/core';
import { Content, IonicPage } from 'ionic-angular';
import { NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-symptomer1',
  templateUrl: 'symptomer1.html'
})
export class Symptomer1Page {

  title: string = "Smerte"

  constructor(public navCtrl: NavController,public navParams: NavParams) {
  }
  
  @ViewChild(Content) content: Content;

  ionViewDidEnter(){
    let id = this.navParams.get('id')
    if (id && id != -1){
      this.scrollTo("symptomer-1-"+id)
    }
  }

  scrollTo(element:string) {
    let elem = document.getElementById(element);
    if (elem){
      let body = document.body;
      let docEl = document.documentElement;
      let scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
      let clientTop = docEl.clientTop || body.clientTop || 0;
      let box = elem.getBoundingClientRect();
      let top  = box.top +  scrollTop - clientTop;
      let cDim = this.content.getContentDimensions();
      let scrollOffset = Math.round(top) + cDim.scrollTop - cDim.contentTop;
      this.content.scrollTo(0, scrollOffset-35, 500);
    }
  }

}
