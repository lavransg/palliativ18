import { Component, ViewChild } from '@angular/core';
import { Content } from 'ionic-angular';
import { NavController, NavParams, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-åndelig_omsorg',
  templateUrl: 'aandelig_omsorg.html'
})
export class Aandelig_omsorgPage {

  title: string = "Åndelig omsorg"

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  
  @ViewChild(Content) content: Content;

  ionViewDidEnter(){ 
    let id = this.navParams.get('id')
    if (id && id != -1){
      this.scrollTo("element"+id)
    }
  }

  scrollTo(element) {
    let elem = document.getElementById(element);
    if (elem){
      let box = elem.getBoundingClientRect();
      let body = document.body;
      let docEl = document.documentElement;
      let scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
      let clientTop = docEl.clientTop || body.clientTop || 0;
      let top  = box.top +  scrollTop - clientTop;
      let cDim = this.content.getContentDimensions();
      let scrollOffset = Math.round(top) + cDim.scrollTop - cDim.contentTop;
      this.content.scrollTo(0, scrollOffset-30, 500);
    }
  }

}
